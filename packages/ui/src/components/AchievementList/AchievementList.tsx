import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import type { Achievement } from '@manoj-portfolio/data';

export interface AchievementListProps {
  readonly achievements: readonly Achievement[];
}

export function AchievementList({ achievements }: AchievementListProps) {
  return (
    <List>
      {achievements.map((achievement) => (
        <ListItem key={achievement.description} alignItems="flex-start" disableGutters>
          <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>
            <EmojiEventsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={achievement.description} />
        </ListItem>
      ))}
    </List>
  );
}
