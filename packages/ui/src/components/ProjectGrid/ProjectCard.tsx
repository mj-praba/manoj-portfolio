import { Box, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material';
import type { Project } from '@manoj-portfolio/data';

export interface ProjectCardProps {
  readonly project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.isPlaceholder) {
    return (
      <Card
        variant="outlined"
        sx={{
          height: '100%',
          borderStyle: 'dashed',
          borderWidth: 2,
          borderColor: 'divider',
          bgcolor: 'transparent',
        }}
      >
        <CardContent>
          <Stack spacing={1.5}>
            <Chip label="Case study coming soon" color="warning" size="small" sx={{ alignSelf: 'flex-start' }} />
            <Typography variant="h6" component="h3">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.placeholderNote ?? project.tagline}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6" component="h3">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.tagline}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Problem
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.businessProblem}
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              Solution
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.solution}
            </Typography>
          </Box>

          {project.myContribution.length > 0 && (
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                My contribution
              </Typography>
              <Stack component="ul" spacing={0.5} sx={{ pl: 2.5, m: 0 }}>
                {project.myContribution.map((item) => (
                  <Typography key={item} component="li" variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}

          {project.technologies.length > 0 && (
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {project.technologies.map((tech) => (
                <Chip key={tech} label={tech} variant="outlined" size="small" />
              ))}
            </Stack>
          )}

          {project.links.length > 0 && (
            <Stack direction="row" flexWrap="wrap" spacing={2}>
              {project.links.map((link) => (
                <Link key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" underline="hover">
                  {link.label}
                </Link>
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
