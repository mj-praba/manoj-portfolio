# Architecture

## Layers

```
apps/web-backend, apps/web-fullstack   (composition — wires data to UI)
            │
            ▼
      packages/ui                      (presentation — typed props in, JSX out)
            │
            ▼
      packages/data                    (types — no content, no logic)
```

Dependencies only ever point downward. `packages/ui` never imports from an app, and `packages/data` never imports from `packages/ui` or an app. This keeps content, presentation, and composition independently testable and replaceable.

## Why two apps instead of one with a toggle

The backend and full-stack portfolios target different audiences with different emphasis (backend-only skills vs. full-stack skills), and Manoj wants to deploy them to two separate domains with independent CI/CD. Sharing a single app with a runtime toggle would couple their deploys and release cadence together for no benefit — a recruiter looking at one should never be able to accidentally land on, or be blocked by a bug in, the other. Two independent Vite apps, sharing a component library, gets consistency without coupling deploys.

## Why no backend/API

The content is static resume data that changes rarely and is known at build time. Fetching it from an API would add a runtime dependency (and a server to operate) for no benefit — a compile-time typed data file is simpler, faster, and matches the "pure React application" requirement.

## Why no React Router

Each app is a single scrolling page (nav anchors scroll to sections). There's no distinct routable page content, so a router would add indirection without solving a real problem.

## The MUI theme

`packages/ui/src/theme/theme.ts` exports `createPortfolioTheme(accentColor)` — a factory, not a static theme object, so each app can pass its own accent color (`web-backend` uses blue, `web-fullstack` uses teal) while sharing identical typography, spacing, and breakpoints. This is the mechanism that keeps both sites visually related without making them identical.
