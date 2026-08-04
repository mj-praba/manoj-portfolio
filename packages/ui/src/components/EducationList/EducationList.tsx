import { Stack, Typography } from '@mui/material';
import type { EducationEntry } from '@manoj-portfolio/data';

export interface EducationListProps {
  readonly entries: readonly EducationEntry[];
}

export function EducationList({ entries }: EducationListProps) {
  return (
    <Stack spacing={2}>
      {entries.map((entry) => (
        <Stack key={entry.institution} direction="row" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Stack>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              {entry.institution}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {entry.credential}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {entry.year}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}
