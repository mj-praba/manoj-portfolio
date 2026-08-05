import { Skeleton, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTimezoneOverlap } from '../../hooks/useTimezoneOverlap';

export interface TimezoneOverlapWidgetProps {
  readonly baseTimezone: string;
  readonly baseLabel: string;
  readonly fallbackNote: string;
}

export function TimezoneOverlapWidget({ baseTimezone, baseLabel, fallbackNote }: TimezoneOverlapWidgetProps) {
  const { t } = useTranslation();
  const state = useTimezoneOverlap(baseTimezone);

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
        {t('workWithMe.timezoneOverlap')}
      </Typography>

      {state.status === 'loading' && <Skeleton variant="text" width="80%" />}

      {state.status === 'success' && (
        <Typography variant="body2" color="text.secondary">
          {state.overlapSummary} {t('workWithMe.basedInSuffix', { location: baseLabel })}
        </Typography>
      )}

      {state.status === 'error' && (
        <Typography variant="body2" color="text.secondary">
          {fallbackNote}
        </Typography>
      )}

      <Typography variant="caption" color="text.secondary">
        {t('workWithMe.ipEstimateNote')}
      </Typography>
    </Stack>
  );
}
