import { Chip, Grid, Stack, Typography } from '@mui/material';
import type { SkillCategory } from '@manoj-portfolio/data';

export interface SkillGroupProps {
  readonly categories: readonly SkillCategory[];
}

export function SkillGroup({ categories }: SkillGroupProps) {
  return (
    <Grid container spacing={3}>
      {categories.map((category) => (
        <Grid item xs={12} md={6} key={category.category}>
          <Stack spacing={1.5}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              {category.category}
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1}>
              {category.skills.map((skill) => (
                <Chip key={skill} label={skill} variant="outlined" size="small" />
              ))}
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
