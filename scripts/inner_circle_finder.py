"""Find current energy-related Inner Circle posts for officer review."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from datetime import date, datetime, timedelta
from email.utils import parsedate_to_datetime
from html.parser import HTMLParser
import re
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET


FEED = "https://innercircle.engineering.asu.edu/feed/"
USER_AGENT = "Mozilla/5.0 (compatible; AEEASUOpportunityFinder/1.0; +https://www.aeeasu.com)"
MAX_PAGES = 8
LOOKBACK_DAYS = 120
TITLE = "Inner Circle energy finder"
CONTENT_NS = "{http://purl.org/rss/1.0/modules/content/}encoded"
ENERGY = re.compile(
    r"\b(?:energy|renewable|storage|battery|batteries|solar|photovoltaic|wind|"
    r"microgrid|electric grid|power systems?|utility|utilities|electrification|"
    r"hydrogen|fuel cell|geothermal|decarboniz\w*|energy efficiency|"
    r"semiconductor|data center)\b",
    re.I,
)
BOILERPLATE = re.compile(r"School of Electrical, Computer and Energy Engineering", re.I)
MONTHS = {name: number for number, names in enumerate((
    ("jan", "january"), ("feb", "february"), ("mar", "march"),
    ("apr", "april"), ("may",), ("jun", "june"), ("jul", "july"),
    ("aug", "august"), ("sep", "sept", "september"),
    ("oct", "october"), ("nov", "november"), ("dec", "december"),
), 1) for name in names}
MONTH_PATTERN = "|".join(sorted(MONTHS, key=len, reverse=True))
DATE_PATTERN = re.compile(
    rf"\b({MONTH_PATTERN})\.?\s+(\d{{1,2}})(?:\s*[–—-]\s*(\d{{1,2}}))?(?:,?\s+(20\d{{2}}))?\b",
    re.I,
)


class PlainText(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []

    def handle_data(self, data: str) -> None:
        self.parts.append(data)


def plain_text(markup: str) -> str:
    parser = PlainText()
    parser.feed(markup)
    return " ".join(" ".join(parser.parts).split())


@dataclass(frozen=True)
class Candidate:
    title: str
    url: str
    published: date
    summary: str
    kind: str
    expires: date | None


def date_in_title(title: str, published: date) -> date | None:
    matches = list(DATE_PATTERN.finditer(title))
    if not matches:
        return None
    match = matches[-1]
    month = MONTHS[match.group(1).lower()]
    day = int(match.group(3) or match.group(2))
    year = int(match.group(4)) if match.group(4) else published.year
    if not match.group(4) and month < published.month - 3:
        year += 1
    try:
        return date(year, month, day)
    except ValueError:
        return None


def parse_feed(xml: bytes, today: date) -> list[Candidate]:
    root = ET.fromstring(xml)
    candidates = []
    for item in root.findall("./channel/item"):
        title = (item.findtext("title") or "").strip()
        url = (item.findtext("link") or "").strip()
        published_text = item.findtext("pubDate")
        if not title or not url.startswith("https://innercircle.engineering.asu.edu/") or not published_text:
            continue
        published = parsedate_to_datetime(published_text).date()
        if published < today - timedelta(days=LOOKBACK_DAYS):
            continue
        body = plain_text(item.findtext(CONTENT_NS) or item.findtext("description") or "")
        if not ENERGY.search(title) and not ENERGY.search(BOILERPLATE.sub("", body[:350])):
            continue
        categories = {node.text or "" for node in item.findall("category")}
        if re.search(r"\b(?:apply|register|submit|sign up)\b.*\bby\b|\bdeadline\b", title, re.I) or "Deadlines" in categories:
            kind = "deadline"
        elif "Events" in categories or re.search(r"\b(?:attend|webinar|seminar|workshop|event)\b", title, re.I):
            kind = "event"
        else:
            kind = "resource"
        expires = date_in_title(title, published)
        if expires and expires < today:
            continue
        summary = body[:220].rsplit(" ", 1)[0] + ("…" if len(body) > 220 else "") if body else ""
        candidates.append(Candidate(title, url, published, summary, kind, expires))
    return candidates


def fetch_candidates(today: date) -> list[Candidate]:
    found: dict[str, Candidate] = {}
    for page in range(1, MAX_PAGES + 1):
        url = FEED if page == 1 else f"{FEED}?paged={page}"
        request = Request(url, headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml"})
        with urlopen(request, timeout=20) as response:
            xml = response.read(3_000_000)
        root = ET.fromstring(xml)
        items = root.findall("./channel/item")
        if not items:
            break
        for candidate in parse_feed(xml, today):
            found[candidate.url] = candidate
        oldest = min(parsedate_to_datetime(item.findtext("pubDate")).date() for item in items if item.findtext("pubDate"))
        if oldest < today - timedelta(days=LOOKBACK_DAYS):
            break
    return list(found.values())


def render(candidates: list[Candidate]) -> str:
    sections = [
        ("Upcoming events", [c for c in candidates if c.kind == "event" and c.expires]),
        ("Deadlines", [c for c in candidates if c.kind == "deadline" and c.expires]),
        ("Resources to review", [c for c in candidates if c.kind == "resource"]),
        ("Dates to verify", [c for c in candidates if c.kind in {"event", "deadline"} and not c.expires]),
    ]
    lines = [
        "# Inner Circle energy finder",
        "",
        "Daily scan of [Fulton Inner Circle](https://innercircle.engineering.asu.edu/). Review each original post before adding anything to the AEE website. This issue is a candidate list, not a published event calendar.",
        "",
        "Dated candidates disappear after their listed date in Arizona. Undated resources remain while they are in the recent feed window; verify that any linked program is still active.",
    ]
    for heading, items in sections:
        lines += ["", f"## {heading}", ""]
        if not items:
            lines.append("None in the current scan.")
            continue
        items.sort(key=lambda c: (c.expires or date.max, c.title.casefold()))
        for candidate in items[:30]:
            date_text = f" — {candidate.expires.isoformat()}" if candidate.expires else ""
            lines.append(f"- [{candidate.title}]({candidate.url}){date_text}. {candidate.summary}")
    lines.append("")
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True)
    parser.add_argument("--today", help="Override Arizona date for checks (YYYY-MM-DD)")
    args = parser.parse_args()
    if args.today:
        today = date.fromisoformat(args.today)
    else:
        from zoneinfo import ZoneInfo
        today = datetime.now(ZoneInfo("America/Phoenix")).date()
    report = render(fetch_candidates(today))
    from pathlib import Path
    Path(args.output).write_text(report, encoding="utf-8")


if __name__ == "__main__":
    main()
