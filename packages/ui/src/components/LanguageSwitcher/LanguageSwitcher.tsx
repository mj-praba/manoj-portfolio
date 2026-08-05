import { useState } from 'react';
import { Chip, IconButton, ListItemText, Menu, MenuItem, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import type { LanguageOption, LocaleCode } from '@manoj-portfolio/data';

export interface LanguageSwitcherProps {
  readonly options: readonly LanguageOption[];
  readonly currentLocale: LocaleCode;
  readonly onLocaleChange: (code: LocaleCode) => void;
}

export function LanguageSwitcher({ options, currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleSelect = (code: LocaleCode) => {
    onLocaleChange(code);
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Change language">
        <IconButton
          aria-label="Change language"
          aria-haspopup="menu"
          aria-expanded={open}
          color="inherit"
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <TranslateIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
        {options.map((option) => (
          <MenuItem key={option.code} selected={option.code === currentLocale} onClick={() => handleSelect(option.code)}>
            <ListItemText
              primary={option.code === 'en' ? option.nativeLabel : `${option.nativeLabel} (${option.englishLabel})`}
            />
            {!option.available && <Chip label="Coming soon" size="small" sx={{ ml: 1.5 }} />}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
