# Worked example: adding a "Projects" section

Say you want to add a projects showcase to both portfolios.

## 1. Add the type — `packages/data/src/types.ts`

```ts
export interface Project {
  readonly name: string;
  readonly description: string;
  readonly url?: string;
  readonly tags: readonly string[];
}
```

Add it to `ResumeData`:

```ts
export interface ResumeData {
  // ...existing fields
  readonly projects: readonly Project[];
}
```

## 2. Add the component — `packages/ui/src/components/ProjectGrid/ProjectGrid.tsx`

```tsx
import { Card, CardContent, Chip, Grid, Stack, Typography, Link } from '@mui/material';
import type { Project } from '@manoj-portfolio/data';

export interface ProjectGridProps {
  readonly projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} key={project.name}>
          <Card variant="outlined">
            <CardContent>
              <Stack spacing={1}>
                <Typography variant="h6">
                  {project.url ? (
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      {project.name}
                    </Link>
                  ) : (
                    project.name
                  )}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.5}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" />
                  ))}
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
```

Export it from `packages/ui/src/index.ts`.

## 3. Add content — `apps/web-backend/src/data/resume.data.ts` (and the fullstack equivalent)

```ts
projects: [
  { name: 'Telemetry Pipeline', description: '...', tags: ['NestJS', 'Redis', 'AWS'] },
],
```

## 4. Wire it up — `apps/web-backend/src/App.tsx`

```tsx
<Section id="projects" title="Projects">
  <ProjectGrid projects={resumeData.projects} />
</Section>
```

Add `{ id: 'projects', label: 'Projects' }` to `NAV_LINKS` if it should appear in the nav.

That's the whole loop: type → component → content → composition, repeated per app.
