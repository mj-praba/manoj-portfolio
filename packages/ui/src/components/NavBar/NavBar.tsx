import { useState, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export interface NavLink {
  readonly id: string;
  readonly label: string;
}

export interface NavBarProps {
  readonly brand: string;
  readonly links: readonly NavLink[];
  /** Extra controls (theme toggle, language switcher, etc.) rendered alongside the nav links. */
  readonly utilities?: ReactNode;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function NavBar({ brand, links, utilities }: NavBarProps) {
  const { t } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            {brand}
          </Typography>

          <Stack direction="row" alignItems="center" spacing={1}>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {links.map((link) => (
                <Button key={link.id} onClick={() => scrollTo(link.id)} color="inherit">
                  {link.label}
                </Button>
              ))}
            </Box>

            {utilities && (
              <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>{utilities}</Box>
            )}

            <IconButton
              aria-label={t('nav.openMenu')}
              edge="end"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Stack sx={{ width: 240 }}>
          {utilities && (
            <>
              <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5} sx={{ py: 1.5 }}>
                {utilities}
              </Stack>
              <Divider />
            </>
          )}
          <List>
            {links.map((link) => (
              <ListItemButton key={link.id} onClick={() => scrollTo(link.id)}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Stack>
      </Drawer>
    </>
  );
}
