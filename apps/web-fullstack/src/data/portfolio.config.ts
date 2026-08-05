import type { LanguageOption, NavItem, RecruiterModeConfig } from '@manoj-portfolio/data';

export const navItems: readonly NavItem[] = [
  { id: 'experience', labelKey: 'nav.experience', label: 'Experience' },
  { id: 'projects', labelKey: 'nav.projects', label: 'Projects' },
  { id: 'skills', labelKey: 'nav.skills', label: 'Skills' },
  { id: 'workwithme', labelKey: 'nav.workwithme', label: 'Work With Me' },
  { id: 'contact', labelKey: 'nav.contact', label: 'Contact' },
];

export const recruiterMode: RecruiterModeConfig = {
  condensedSectionIds: ['experience', 'projects', 'skills', 'workwithme', 'contact'],
};

export const languageOptions: readonly LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English' },
  { code: 'de', nativeLabel: 'Deutsch', englishLabel: 'German' },
  { code: 'fr', nativeLabel: 'Français', englishLabel: 'French' },
];
