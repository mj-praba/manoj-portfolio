import { Grid } from '@mui/material';
import type { Project } from '@manoj-portfolio/data';
import { ProjectCard } from './ProjectCard';

export interface ProjectGridProps {
  readonly projects: readonly Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} sm={6} lg={4} key={project.id}>
          <ProjectCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}
