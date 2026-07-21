# AnshumanHQ Journal

A dark-first, editorial, static personal technical journal built with Astro + MDX + Tailwind CSS. No backend, no database, no server — pure static output.

Live site: https://anshumanhq.github.io/

## Stack

- [Astro](https://astro.build) (static output)
- MDX content collections
- Tailwind CSS
- '@astrojs/rss' for the feed
- '@astrojs/sitemap' for the sitemap

## Installation (for local development — optional)

If you want to run locally, you can clone and install:

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

`npm run build` outputs a fully static site to `dist/`.

## Deploying to GitHub Pages

This repo is set up as a **user/org Pages repo** (`anshumanhq.github.io`), so it deploys to the domain root — no `base` path changes are needed.

1. Push this project to the `anshumanhq.github.io` GitHub repository, on branch `main`.
2. In the repo settings, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the included workflow at `.github/workflows/deploy.yml` will build and deploy automatically.
4. Your site will be live at `https://anshumanhq.github.io/`.

> If you instead fork this into a *project* repo (e.g. `username.github.io/anshumanhq-journal`), you must set `base: '/anshumanhq-journal'` in `astro.config.mjs` and update `site` accordingly — otherwise all absolute links and assets will 404.

## Deploying to Render (Static Site)

Create a new **Static Site** on Render pointing at this repo, with:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

No environment variables or backend services are required.

## Writing a New Article

1. Create a new `.mdx` file inside `src/content/writing/`. The filename becomes the URL slug.
2. Add frontmatter at the top:

```yaml
---
title: "Your Article Title"
description: "A one-sentence summary shown in cards and previews."
type: "Article" # Article | Research Note | Build Log | Learning | Explainer
category: "Engineering" # Engineering | AI & ML | Research | Projects | Learning
pubDate: 2026-08-01
readingTime: "8 min read"
featured: false
draft: false
tags: ["optional", "tags"]
---
```

3. Write the article body in Markdown/MDX below the frontmatter — headings (`##`, `###`), code blocks, lists, blockquotes, links, and tables are all supported and styled automatically.
4. Set `draft: true` while working on it — draft articles are excluded from `/writing`, the homepage, RSS, and sitemap, but still build so you can preview locally via a direct URL if `draft` is temporarily set to `false` on your machine.
5. Set `featured: true` on at most one article at a time to control the homepage's featured slot (if none is marked featured, the most recent article is used automatically).
6. Commit and push — the GitHub Actions workflow handles the rest (no need to run any build commands locally).

## Notes

- The LinkedIn URL on the About page (`/about`) is already set to your actual profile.
- Sample MDX articles under `src/content/writing/` are generic demonstration content — replace or supplement with real writing at any time.
