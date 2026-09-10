# Design Documentation

## Design Philosophy

This portfolio is designed to communicate one core narrative clearly: **12
years of native Android craftsmanship, now applied to modern fullstack web
development.** Every design decision should reinforce credibility, precision,
and a clean engineering sensibility — not decoration for its own sake.

## Visual Direction

- **Tone**: Confident, technical, minimal — closer to a well-documented
  engineering tool than a flashy agency site.
- **Typography**: A single clean sans-serif for UI text; monospace accents
  for code snippets, tech-stack labels, or terminal-style flourishes to nod
  to the developer audience.
- **Color**: A restrained palette — one primary accent color (used for links,
  CTAs, highlights) against a neutral light/dark base. Avoid gradient overload;
  use accent color deliberately, not everywhere.
- **Motion**: Subtle, purposeful transitions (hover states, section reveals)
  — never motion that delays the visitor from reading content.

## Layout Structure

1. **Hero** — name, role, one-line positioning (Android → Fullstack), primary CTA (view work / contact)
2. **About** — the transition story: 12 years native Android, now Next.js/React/tRPC/Drizzle/Postgres
3. **Skills / Stack** — grouped by domain (Android, Fullstack, Tooling)
4. **Projects** — case-study style cards, not just logos; each links to a repo/live demo
5. **Experience** — condensed timeline, not a full resume dump
6. **Contact** — direct, low-friction (email/GitHub/LinkedIn), no contact-form backend required

## Component Principles

- **Single-file build target**: Since the project bundles to one HTML file,
  keep components self-contained — avoid dependencies that require external
  runtime assets (fonts, icons) unless inlined or loaded from a CDN.
- **Composable utility styling**: Use Tailwind CSS 4 utilities directly in
  markup; reach for `clsx` + `tailwind-merge` only when a component has
  genuinely conditional class logic (variants, states).
- **Accessibility first**: Semantic HTML elements, sufficient color contrast,
  keyboard-navigable interactive elements, and meaningful `alt` text on all
  images.

## Responsive Breakpoints

Follow Tailwind's default breakpoint scale:

| Breakpoint | Width | Usage |
|---|---|---|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |

Design mobile-first; every section should read cleanly at `sm` before
scaling up.

## Performance Budget

- Single bundled HTML output should stay lean — avoid large unoptimized
  images; prefer SVG for icons/illustrations where possible.
- No render-blocking third-party scripts on initial load.

## Future Considerations

- Dark mode toggle (currently follows system preference if implemented)
- i18n support if content expands beyond English
- Optional CMS-driven project data instead of hardcoded content
