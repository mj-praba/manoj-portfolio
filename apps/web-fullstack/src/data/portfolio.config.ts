import type { LanguageOption, NavItem } from '@manoj-portfolio/data';

export const navItems: readonly NavItem[] = [
  { id: 'experience', labelKey: 'nav.experience', label: 'Experience' },
  { id: 'projects', labelKey: 'nav.projects', label: 'Projects' },
  { id: 'skills', labelKey: 'nav.skills', label: 'Skills' },
  { id: 'contact', labelKey: 'nav.contact', label: 'Contact' },
];

export const languageOptions: readonly LanguageOption[] = [
  { code: 'en', nativeLabel: 'English' },
  { code: 'de', nativeLabel: 'Deutsch' },
  { code: 'fr', nativeLabel: 'Français' },
];
