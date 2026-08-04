# Contributing

## Local setup

```bash
pnpm install
pnpm run dev:backend      # or dev:fullstack
```

## Before opening a PR

```bash
pnpm run typecheck   # tsc --noEmit across every workspace
pnpm run lint         # eslint across the repo
pnpm run build        # build:backend + build:fullstack, must both succeed independently
```

## Branch & commit conventions

- Branch names: `feat/<short-description>`, `fix/<short-description>`, `chore/<short-description>`
- Commits: short, imperative subject line (e.g. `Add achievements section to ui package`); explain *why* in the body when the change isn't self-evident

## Adding a new resume section

The data → presentation → composition layering must stay intact:

1. **`packages/data/src/types.ts`** — add/extend the type describing the new content (e.g. a `Project` interface).
2. **`packages/ui/src/components/<NewComponent>/`** — add a presentational component that takes the typed data as props and renders it. It must not import from an app's `data/resume.data.ts` or otherwise assume which resume it's rendering. Export it from `packages/ui/src/index.ts`.
3. **`apps/<app>/src/data/resume.data.ts`** — add the actual content for that app, typed against the interface from step 1.
4. **`apps/<app>/src/App.tsx`** — wire the new data into the new component, wrapped in a `<Section>`.
5. Repeat step 3–4 for the other app if the section applies to both.

Never let `packages/ui` import from `apps/*` — dependencies flow one direction only: `apps` → `packages/ui` → `packages/data`.

## Component guidelines

- Presentational components in `packages/ui` take typed props in, render JSX out — no data fetching, no app-specific knowledge, no side effects beyond local UI state (e.g. a `Drawer`'s open/close).
- Prefer MUI layout primitives (`Box`, `Stack`, `Grid`, `Container`) and the shared theme (`createPortfolioTheme`) over one-off inline styles, so both apps keep a consistent, responsive look.
- One component per file/folder; keep components focused on a single responsibility.

## Pull request checklist

- [ ] `pnpm run typecheck` passes
- [ ] `pnpm run lint` passes
- [ ] `pnpm run build` succeeds for both apps
- [ ] Verified in the browser at mobile, tablet, and desktop widths
- [ ] No content/data leaked into `packages/ui`; no UI markup duplicated between apps that belongs in `packages/ui` instead
