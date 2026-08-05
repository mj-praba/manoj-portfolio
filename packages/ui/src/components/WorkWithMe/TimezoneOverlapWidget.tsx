import { Skeleton, Stack, Typography } from '@mui/material';
import { useTimezoneOverlap } from '../../hooks/useTimezoneOverlap';

export interface TimezoneOverlapWidgetProps {
  readonly baseTimezone: string;
  readonly baseLabel: string;
  readonly fallbackNote: string;
}

export function TimezoneOverlapWidget({ baseTimezone, baseLabel, fallbackNote }: TimezoneOverlapWidgetProps) {
  const state = useTimezoneOverlap(baseTimezone);

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        Timezone overlap
      </Typography>

      {state.status === 'loading' && <Skeleton variant="text" width="80%" />}

      {state.status === 'success' && (
        <Typography variant="body2" color="text.secondary">
          {state.overlapSummary} (I&apos;m based in {baseLabel}.)
        </Typography>
      )}

      {state.status === 'error' && (
        <Typography variant="body2" color="text.secondary">
          {fallbackNote}
        </Typography>
      )}

      <Typography variant="caption" color="text.secondary">
        Estimated from your IP address — no location permission requested.
      </Typography>
    </Stack>
  );
}
