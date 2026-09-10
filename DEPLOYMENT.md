# Deployment Guide

This project builds to a **single self-contained HTML file** (via `vite-plugin-singlefile`), which makes it deployable almost anywhere that can serve static files.

## Build

```bash
npm install
npm run build
```

The output lands in `dist/` — typically just `dist/index.html` with everything inlined.

---

## Option 1: Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy — Vercel handles the rest automatically on every push to `main`.

## Option 2: Netlify

1. New site from Git → select this repo
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy site

## Option 3: GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

> If deploying to a project page (`username.github.io/repo-name`), set `base: '/repo-name/'` in `vite.config.ts` before building.

## Option 4: Cloudflare Pages

1. Connect the repo in the Cloudflare dashboard
2. Build command: `npm run build`
3. Build output directory: `dist`

## Option 5: Any Static Host (S3, Firebase Hosting, etc.)

Since the build is a single HTML file with everything inlined, you can upload `dist/index.html` directly to any static file host or CDN bucket — no special server configuration required.

---

## Environment Notes

- No environment variables or backend services are required for this project — it is fully static.
- No server-side rendering; all rendering is client-side via React.

## Verifying a Deployment

After deploying, confirm:
- [ ] The page loads without console errors
- [ ] All fonts/images render correctly
- [ ] Responsive layout works on mobile, tablet, and desktop widths
- [ ] Links (GitHub, live demo, social) resolve correctly
