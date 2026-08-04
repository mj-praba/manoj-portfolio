import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
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
}

export function NavBar({ brand, links }: NavBarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <AppBar position="sticky" color="inherit" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component="span" sx={{ fontWeight: 700 }}>
            {brand}
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {links.map((link) => (
              <Button key={link.id} onClick={() => scrollTo(link.id)} color="inherit">
                {link.label}
              </Button>
            ))}
          </Box>

          <IconButton
            aria-label="Open navigation menu"
            edge="end"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List sx={{ width: 220 }}>
          {links.map((link) => (
            <ListItemButton key={link.id} onClick={() => scrollTo(link.id)}>
              <ListItemText primary={link.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}
