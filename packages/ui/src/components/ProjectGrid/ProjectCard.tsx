import { useState } from 'react';
import { Box, Card, CardContent, Chip, Link, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Project } from '@manoj-portfolio/data';

export interface ProjectCardProps {
  readonly project: Project;
}

const FLIP_CARD_HEIGHT = 380;

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false);

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
            <Chip
              label={t('project.caseStudyComingSoon')}
              color="warning"
              size="small"
              sx={{ alignSelf: 'flex-start' }}
            />
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

  // Case studies carry far more content than a static card can show alongside placeholder
  // cards without dwarfing them — flip to reveal detail on demand instead.
  return (
    <Box sx={{ height: FLIP_CARD_HEIGHT, perspective: 1200 }}>
      <Box
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={project.name}
        onClick={() => setFlipped((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setFlipped((value) => !value);
          }
        }}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          cursor: 'pointer',
          outline: 'none',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          transform: flipped ? 'rotateY(180deg)' : 'none',
          '@media (hover: hover)': {
            '&:hover': { transform: 'rotateY(180deg)' },
          },
          '&:focus-visible': { boxShadow: (theme) => `0 0 0 2px ${theme.palette.primary.main}` },
        }}
      >
        {/* Front */}
        <Card
          variant="outlined"
          sx={{ position: 'absolute', inset: 0, backfaceVisibility: 'hidden', display: 'flex' }}
        >
          <CardContent sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h3">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.tagline}
              </Typography>
              {project.technologies.length > 0 && (
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <Chip key={tech} label={tech} variant="outlined" size="small" />
                  ))}
                </Stack>
              )}
            </Stack>
            <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic', pt: 1.5 }}>
              {t('project.flipHint')}
            </Typography>
          </CardContent>
        </Card>

        {/* Back */}
        <Card
          variant="outlined"
          sx={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            overflowY: 'auto',
          }}
        >
          <CardContent>
            <Stack spacing={1.5}>
              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {t('project.problem')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.businessProblem}
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  {t('project.solution')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.solution}
                </Typography>
              </Box>

              {project.myContribution.length > 0 && (
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {t('project.myContribution')}
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

              <Typography variant="caption" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                {t('project.flipBack')}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
