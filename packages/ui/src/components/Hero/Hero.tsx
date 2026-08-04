import { Box, Container, Stack, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export interface HeroProps {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly actions?: ReactNode;
}

export function Hero({ name, title, tagline, summary, actions }: HeroProps) {
  return (
    <Box
      component="header"
      id="top"
      sx={{
        bgcolor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container>
        <Stack spacing={2} sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: 1.5 }}>
            {tagline}
          </Typography>
          <Typography variant="h2" component="h1">
            {name}
          </Typography>
          <Typography variant="h5" component="p" color="text.secondary">
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 720, fontSize: { xs: '1rem', md: '1.1rem' } }}
          >
            {summary}
          </Typography>
          {actions && (
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              {actions}
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
