import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineOppositeContentClasses,
} from '@mui/lab';
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import type { ExperienceEntry } from '@manoj-portfolio/data';

export interface ExperienceTimelineProps {
  readonly entries: readonly ExperienceEntry[];
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <Timeline
      sx={{
        px: 0,
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: { xs: 0, sm: 0.3 },
          display: { xs: 'none', sm: 'block' },
        },
      }}
    >
      {entries.map((entry, index) => (
        <TimelineItem key={`${entry.company}-${entry.period}`}>
          <TimelineOppositeContent color="text.secondary">{entry.period}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < entries.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent sx={{ pb: 5 }}>
            <Stack spacing={0.5}>
              <Typography variant="h6" component="h3">
                {entry.role}
              </Typography>
              <Typography variant="subtitle1" color="primary.main" sx={{ fontWeight: 600 }}>
                {entry.company}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                {entry.period}
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
