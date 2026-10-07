# Inner Circle energy finder

The [Inner Circle feed](https://innercircle.engineering.asu.edu/feed/) is scanned daily by `.github/workflows/inner-circle-finder.yml` at 8:17 a.m. Arizona time. GitHub schedules can start late. The workflow can also be run manually from Actions.

The Python finder uses only the standard library. It reads up to eight feed pages (at most about 80 recent posts), filters energy, power, storage, grid, efficiency, solar, battery and semiconductor topics, then writes a candidate report. It separates events, deadlines, resources and posts whose dates need verification. A single GitHub issue titled **Inner Circle energy finder** holds the current report. The workflow updates the issue and adds a comment only when the report changes. It uses the repository `GITHUB_TOKEN` with `contents: read` and `issues: write`; no other credential is needed.

Dates are inferred conservatively from post titles, such as “Oct. 14” or “apply by Oct. 14.” Items with a parsed date disappear after that day in Arizona. Undated events and deadlines go to **Dates to verify**. Resources without dates remain only while they are in the recent feed window. This is a discovery queue: review the original article for year, exact time, audience, eligibility, registration, and whether an offering is still active before publishing anything on the AEE website. The finder does not edit website content or register anyone.

If Inner Circle changes its feed, the workflow should fail and leave the prior issue unchanged. Check the Actions run and update `scripts/inner_circle_finder.py`. The feed has been verified to respond to the declared `AEEASUOpportunityFinder` User-Agent.

Local checks:

```sh
python -m unittest -v scripts/test_inner_circle_finder.py
python scripts/inner_circle_finder.py --output .qa/inner-circle-report.md
```

The second command reads the public feed. Use `--today YYYY-MM-DD` to check a specific Arizona date. The report is a local artifact; do not add it to the site as verified content.
