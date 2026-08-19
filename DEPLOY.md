# Deploying

The repository is set up for the normal path: **GitHub for the source, Vercel for the live site, automatic deploys on push to `main`.** Nothing is deployed yet — this is the checklist for when you are ready.

---

## 1. Put it on GitHub

The repository is already initialised locally. The chapter's GitHub organisation is [github.com/aee-asu](https://github.com/aee-asu) and the repository is [aee-asu/website](https://github.com/aee-asu/website). The remote is already configured:

```bash
git push -u origin main
```

If you ever need to set it again from scratch:

```bash
git remote add origin https://github.com/aee-asu/website.git
git branch -M main
git push -u origin main
```

**Before the first push,** confirm the raw Drive archive is not staged:

```bash
git status --short | grep -i "_drive_raw\|\.zip" || echo "clean"
```

It should print `clean`. The archive is 2 GB and well past GitHub's file size limits; `.gitignore` already excludes it, along with the chapter's admin spreadsheets and PDFs.

### Who should have access

Give the officer team write access, not just the current president. The single most common way a student-organisation site dies is one person graduating with the only credentials.

---

## 2. Connect Vercel

1. Sign in at [vercel.com](https://vercel.com) — use "Continue with GitHub".
2. **Add New → Project**, and pick the repository.
3. Vercel detects Next.js on its own. Framework preset **Next.js**, build command `next build`, output directory `.next` — all defaults. There are no environment variables to set.
4. **Deploy.**

From then on every push to `main` deploys to production, and every pull request gets its own preview URL you can send round before merging.

### Domain

Vercel gives you a `*.vercel.app` address immediately. To use a real domain, add it under **Project → Settings → Domains** and follow the DNS instructions.

**When the final address is known, update `url` in `src/data/site.ts`.** Canonical tags, `sitemap.xml`, `robots.txt` and social previews all read from that one value, and they will point at the placeholder until you change it.

If the chapter ever gets a subdomain under `asu.edu`, that goes through ASU IT and student-organisation policy — worth asking about, but a `.org` or `.com` the chapter controls is easier to hand to the next officer team.

---

## 3. Checks before you push

```bash
npm run lint
npm run typecheck
npm run build
```

All three should pass with no output beyond the build summary. `npm run build` is the one that matters — Vercel runs the same command, so a build that fails locally fails there too.

---

## 4. Other hosts

Nothing here is Vercel-specific except the image optimiser. If you would rather host elsewhere:

- **Netlify, Render, Fly, a VPS** — `npm run build` then `npm start`. Works as-is.
- **GitHub Pages, S3, or any static host** — Pages cannot run the image optimiser, so add to `next.config.ts`:

  ```ts
  const nextConfig: NextConfig = {
    output: "export",
    images: { unoptimized: true },
  };
  ```

  `npm run build` then produces a static `out/` folder. The trade-off is real: images ship at full size instead of being resized and converted to WebP/AVIF per device, so the site gets noticeably heavier on phones. Prefer Vercel unless there is a reason not to.

---

## 5. After it is live

- Check the site on an actual phone, not just a narrow browser window.
- Paste the URL into a Slack, Discord or iMessage thread and confirm the social preview card renders.
- Submit the address to Google Search Console (`sitemap.xml` is generated at `/sitemap.xml`).
- Add the link to the chapter's Sun Devil Central page, Instagram bio and [LinkedIn page](https://www.linkedin.com/company/association-of-energy-engineers-aee-at-asu).
- Read through [`CONTENT_INVENTORY.md`](./CONTENT_INVENTORY.md) — there are open content decisions there that are easier to settle before a lot of people see the site.
