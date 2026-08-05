import { Box, Grid, Stack, Typography } from '@mui/material';
import type { WorkWithMeInfo } from '@manoj-portfolio/data';
import { TimezoneOverlapWidget } from './TimezoneOverlapWidget';

export interface WorkWithMeSectionProps {
  readonly info: WorkWithMeInfo;
}

export function WorkWithMeSection({ info }: WorkWithMeSectionProps) {
  return (
    // Grid must be a block-level child, not a flex item (Stack) — MUI's legacy Grid negative-margin
    // spacing math breaks inside a flex container, overflowing the viewport on narrow screens.
    <Box>
      <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 4 }}>
        {info.headline}
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Stack spacing={2.5}>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Based in
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.baseLocation}
              </Typography>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Availability
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.remoteAvailability}
              </Typography>
            </Stack>
            <Stack spacing={0.5}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Engagement
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {info.preferredEngagements.join(' · ')}
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TimezoneOverlapWidget
            baseTimezone={info.baseTimezone}
            baseLabel={info.baseLocation}
            fallbackNote={info.fallbackTimezoneNote}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
