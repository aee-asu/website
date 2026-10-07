import unittest
from datetime import date

from scripts.inner_circle_finder import date_in_title, parse_feed, render


def item(title: str, categories: list[str], body: str, link: str) -> str:
    tags = "".join(f"<category>{category}</category>" for category in categories)
    return f"""<item><title>{title}</title><link>{link}</link>
    <pubDate>Tue, 06 Oct 2026 18:03:29 +0000</pubDate>{tags}
    <description><![CDATA[{body}]]></description></item>"""


class FinderTests(unittest.TestCase):
    def test_title_dates_and_year_rollover(self):
        published = date(2026, 10, 6)
        self.assertEqual(date_in_title("Webinar, Oct. 14", published), date(2026, 10, 14))
        self.assertEqual(date_in_title("Workshop Oct. 2–4", published), date(2026, 10, 4))
        self.assertEqual(date_in_title("Energy seminar, Jan. 11", published), date(2027, 1, 11))
        self.assertIsNone(date_in_title("Energy resources", published))

    def test_classification_and_expiry(self):
        base = "https://innercircle.engineering.asu.edu/2026/10/"
        xml = ("<rss><channel>" +
            item("Energy storage webinar, Oct. 14", ["Events"], "Grid reliability.", base + "webinar/") +
            item("Apply for battery research by Oct. 12", ["Opportunities"], "Funding.", base + "battery/") +
            item("Solar research guide", ["Resources"], "Find ASU labs.", base + "guide/") +
            item("Attend grid lecture, Oct. 4", ["Events"], "Grid resilience.", base + "past/") +
            item("Art exhibit, Oct. 18", ["Events"], "Campus art.", base + "art/") +
            "</channel></rss>").encode()
        candidates = parse_feed(xml, date(2026, 10, 7))
        self.assertEqual({c.kind for c in candidates}, {"event", "deadline", "resource"})
        self.assertEqual(len(candidates), 3)
        report = render(candidates)
        self.assertIn("Energy storage webinar", report)
        self.assertNotIn("Attend grid lecture", report)
        self.assertNotIn("Art exhibit", report)


if __name__ == "__main__":
    unittest.main()
