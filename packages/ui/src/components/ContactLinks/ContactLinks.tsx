import { Stack, Link, Typography } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import type { ContactInfo } from '@manoj-portfolio/data';

export interface ContactLinksProps {
  readonly contact: ContactInfo;
}

export function ContactLinks({ contact }: ContactLinksProps) {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <EmailOutlinedIcon color="primary" fontSize="small" />
        <Link href={`mailto:${contact.email}`} underline="hover" color="inherit">
          {contact.email}
        </Link>
      </Stack>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <PhoneOutlinedIcon color="primary" fontSize="small" />
        <Link href={`tel:${contact.phone}`} underline="hover" color="inherit">
          {contact.phone}
        </Link>
      </Stack>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <LinkedInIcon color="primary" fontSize="small" />
        <Link href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit">
          {contact.linkedinUrl.replace(/^https?:\/\//, '')}
        </Link>
      </Stack>
      <Stack direction="row" spacing={1.5} alignItems="center">
        <PlaceOutlinedIcon color="primary" fontSize="small" />
        <Typography color="text.secondary">{contact.location}</Typography>
      </Stack>
    </Stack>
  );
}
