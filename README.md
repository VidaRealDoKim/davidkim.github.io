# David Kim — Portfolio

Personal portfolio website for David Kim, UX/UI & Product Designer.

Built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

## Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with CSS custom properties for theming
- **Animations**: Framer Motion
- **Theming**: next-themes (dark/light mode)
- **Icons**: lucide-react
- **Fonts**: System fonts — sans-serif stack for body, Georgia serif for headings
- **Deployment**: GitHub Pages via GitHub Actions

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured projects, services, about teaser |
| `/about` | Bio, skills grid, experience timeline, values |
| `/projects` | Filterable project grid |
| `/projects/[slug]` | Case study detail page |
| `/contact` | Contact form + social links |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # produces ./out for static hosting
```

## Deployment

Automatically deployed to GitHub Pages on push to `main` via `.github/workflows/deploy.yml`.
