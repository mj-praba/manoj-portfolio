# manoj-portfolio

Two independent, static portfolio sites built from Manoj Prabahar J's resume — one for backend roles, one for full-stack roles. Each is a "pure" React application (no server, no framework runtime) that builds to static assets and deploys to its own domain.

## Workspace layout

```
apps/
  web-backend/      Backend Engineer portfolio (standalone, deployable)
  web-fullstack/     Full Stack Developer portfolio (standalone, deployable)
packages/
  ui/                Shared presentational MUI component library
  data/              Shared TypeScript types describing resume content
```

- `packages/data` defines the shape of resume content (`ResumeData` and friends) — no content lives here.
- `packages/ui` is a pure presentational component library (`NavBar`, `Hero`, `Section`, `ExperienceTimeline`, `SkillGroup`, `AchievementList`, `EducationList`, `ContactLinks`, `Footer`, plus a shared MUI theme factory). Nothing in `packages/ui` knows which resume it's rendering.
- Each app owns its own content in `src/data/resume.data.ts`, typed against `@manoj-portfolio/data`, and wires it to `@manoj-portfolio/ui` components in `src/App.tsx`.

See [`docs/architecture.md`](docs/architecture.md) for the full breakdown.

## Tech stack

- **React 18 + TypeScript**, built with **Vite**
- **MUI (Material UI)** for a responsive component set (breakpoints, `Grid`/`Stack`, mobile nav `Drawer`)
- **pnpm workspaces** to share `packages/ui` and `packages/data` between the two apps without publishing them
- No React Router, no backend/API — each app is a single scrolling page with local typed data

## Prerequisites

- Node.js 20 (see `.nvmrc`)
- [pnpm](https://pnpm.io) (enable via `corepack enable && corepack prepare pnpm@latest --activate` if you don't have it)

## Getting started

```bash
pnpm install

pnpm run dev:backend      # http://localhost:5173
pnpm run dev:fullstack    # http://localhost:5174
```

## Building

```bash
pnpm run build:backend     # -> apps/web-backend/dist
pnpm run build:fullstack   # -> apps/web-fullstack/dist
pnpm run build             # both
```

Each app's `dist/` is fully self-contained and independently deployable — the two never share a runtime, host, or routing layer.

## Deployment

Both apps deploy to their own S3 bucket + CloudFront distribution on separate domains, via GitHub Actions on push to `main`. See [`docs/deployment.md`](docs/deployment.md) for the pipeline and [`docs/deployment.md`](docs/deployment.md#infrastructure) for how the AWS infrastructure is provisioned (in the sibling [`mj-cloud-terraform`](../mj-cloud-terraform) repo).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md).
