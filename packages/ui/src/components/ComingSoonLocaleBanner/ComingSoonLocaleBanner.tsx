import { Alert, Button, Container } from '@mui/material';
import type { LanguageOption } from '@manoj-portfolio/data';

export interface ComingSoonLocaleBannerProps {
  readonly language: LanguageOption;
  readonly onSwitchBack: () => void;
}

export function ComingSoonLocaleBanner({ language, onSwitchBack }: ComingSoonLocaleBannerProps) {
  return (
    <Container sx={{ pt: 2 }}>
      <Alert
        severity="info"
        action={
          <Button color="inherit" size="small" onClick={onSwitchBack}>
            Switch back to English
          </Button>
        }
      >
        This site isn&apos;t translated into {language.englishLabel} yet — you&apos;re seeing the English version.
      </Alert>
    </Container>
  );
}
