import { Box, Container, Typography } from '@mui/material';

export interface FooterProps {
  readonly name: string;
}

export function Footer({ name }: FooterProps) {
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {name}. Built with React, TypeScript &amp; MUI.
        </Typography>
      </Container>
    </Box>
  );
}
