import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface FooterProps {
  readonly name: string;
}

export function Footer({ name }: FooterProps) {
  const { t } = useTranslation();
  return (
    <Box component="footer" sx={{ py: 4, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container>
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} {name}. {t('footer.builtWith')}
        </Typography>
      </Container>
    </Box>
  );
}
