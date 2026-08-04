import { Box, Container, Typography } from '@mui/material';
import type { ReactNode } from 'react';

export interface SectionProps {
  readonly id: string;
  readonly title?: string;
  readonly tone?: 'default' | 'paper';
  readonly children: ReactNode;
}

export function Section({ id, title, tone = 'default', children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        py: { xs: 6, md: 10 },
        bgcolor: tone === 'paper' ? 'background.paper' : 'background.default',
        scrollMarginTop: { xs: 64, md: 72 },
      }}
    >
      <Container>
        {title && (
          <Typography variant="h4" component="h2" sx={{ mb: { xs: 3, md: 5 } }}>
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </Box>
  );
}
