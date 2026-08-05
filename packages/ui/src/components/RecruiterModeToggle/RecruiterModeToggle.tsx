import { Button, Tooltip } from '@mui/material';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

export interface RecruiterModeToggleProps {
  readonly pressed: boolean;
  readonly onToggle: () => void;
  readonly label: string;
  readonly description?: string;
}

export function RecruiterModeToggle({ pressed, onToggle, label, description }: RecruiterModeToggleProps) {
  const button = (
    <Button
      variant={pressed ? 'contained' : 'outlined'}
      color="primary"
      size="small"
      startIcon={<PersonSearchOutlinedIcon fontSize="small" />}
      aria-pressed={pressed}
      aria-label={label}
      onClick={onToggle}
      sx={{ whiteSpace: 'nowrap' }}
    >
      {label}
    </Button>
  );

  return description ? <Tooltip title={description}>{button}</Tooltip> : button;
}
