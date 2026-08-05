import { IconButton, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeModeContext } from '../../theme/ThemeModeContext';

export function ThemeModeToggle() {
  const { t } = useTranslation();
  const { mode, setMode } = useThemeModeContext();
  const isDark = mode === 'dark';
  const label = isDark ? t('theme.switchToLight') : t('theme.switchToDark');

  return (
    <Tooltip title={label}>
      <IconButton aria-label={label} color="inherit" onClick={() => setMode(isDark ? 'light' : 'dark')}>
        {isDark ? <LightModeOutlinedIcon fontSize="small" /> : <DarkModeOutlinedIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
