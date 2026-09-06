# AGENTS.md

Hugo static site (personal blog), deployed to Netlify from `main` via `netlify.toml` (Hugo 0.148.2).

## Commands

- Build / verify: `hugo` (or `hugo --quiet`); output goes to `public/` (gitignored)
- Dev server: `hugo server -D` — `-D` is required to preview drafts (several posts have `draft = true`)
- No tests, linter, or formatter exist; a clean `hugo` build is the only verification step

## Structure

- No Hugo theme — `themes/` is empty; all templates live in repo-root `layouts/` and are maintained here
- All CSS/JS/images are in `static/` (served as-is); `assets/` is empty, so no Hugo asset pipelining — reference files as `/styles/...`, `/js/...`, `/images/...`
- Posts are TOML-front-matter files in `content/posts/`; permalinks are `/posts/:slug/` (set in `hugo.toml`)
- `*.off` files (e.g. `layouts/_default/single.html.off`, `static/styles/main.css.off`) are intentionally disabled variants — do not delete or re-enable them

## Gotchas

- `catergory` in `hugo.toml` `[taxonomies]` is a typo'd singular key; front matter uses `categories` and `layouts/categories/` depends on this setup — leave it unless explicitly asked to fix
- Local Hugo may be newer than Netlify's pinned 0.148.2; avoid bleeding-edge template functions that older Hugo rejects
