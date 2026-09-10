# Contributing

Thanks for your interest in contributing! This is a personal portfolio
project, but bug fixes, accessibility improvements, and small enhancements
are welcome.

## Before You Start

- Please read the [Code of Conduct](./CODE_OF_CONDUCT.md).
- For significant changes (new sections, redesigns), please open an issue
  first to discuss what you'd like to change.

## Development Setup

```bash
git clone https://github.com/Dev-moe-kyawaung/moekyawaung-developer-portfolio-56.git
cd moekyawaung-developer-portfolio-56
npm install
npm run dev
```

## Making Changes

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes in `src/`
4. Test locally with `npm run dev` and verify the production build works:
   ```bash
   npm run build
   npm run preview
   ```
5. Commit using clear, descriptive messages:
   ```bash
   git commit -m "fix: correct spacing on mobile nav"
   ```
6. Push and open a Pull Request against `main`

## Pull Request Guidelines

- Keep PRs focused — one concern per PR
- Include before/after screenshots for visual changes
- Ensure `npm run build` completes without errors
- Match existing code style (TypeScript, Tailwind utility classes, functional
  React components)

## Style Conventions

- **TypeScript**: strict typing preferred, avoid `any`
- **Styling**: Tailwind utility classes; use `clsx`/`tailwind-merge` for
  conditional class composition rather than manual string concatenation
- **Components**: functional components with hooks; no class components

## Reporting Bugs

Open an issue with:
- A clear title and description
- Steps to reproduce
- Expected vs. actual behavior
- Screenshots if relevant (browser/device info helps too)

## Questions

Feel free to open a [Discussion](https://github.com/Dev-moe-kyawaung/moekyawaung-developer-portfolio-56/discussions) or reach out via [@Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung).
