import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  timelineItemClasses,
} from '@mui/lab';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import type { ExperienceEntry } from '@manoj-portfolio/data';

export interface ExperienceTimelineProps {
  readonly entries: readonly ExperienceEntry[];
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    // No opposite content (dates move inline above each role instead) — without this override,
    // MuiTimelineItem still reserves its opposite-content spacer via a ::before pseudo-element,
    // which reads as a large, unexplained gap before the dot.
    <Timeline sx={{ px: 0, m: 0, [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 } }}>
      {entries.map((entry, index) => (
        <TimelineItem key={`${entry.company}-${entry.period}`}>
          <TimelineSeparator>
            <TimelineDot color="primary" sx={{ mt: 0.5 }} />
            {index < entries.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ pt: 0, pb: 5 }}>
            <Stack spacing={0.5}>
              <Typography variant="overline" color="text.secondary" sx={{ letterSpacing: 1 }}>
                {entry.period}
              </Typography>
              <Typography variant="h6" component="h3">
                {entry.role}
              </Typography>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600 }}>
                {entry.company}
              </Typography>
              <List dense disablePadding sx={{ mt: 1 }}>
                {entry.highlights.map((highlight) => (
                  <ListItem key={highlight} sx={{ display: 'list-item', listStyleType: 'disc', pl: 0.5, ml: 2.5 }} disablePadding>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </Stack>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
