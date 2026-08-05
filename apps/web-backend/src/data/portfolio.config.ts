import type { LanguageOption, NavItem, RecruiterModeConfig } from '@manoj-portfolio/data';

export const navItems: readonly NavItem[] = [
  { id: 'experience', labelKey: 'nav.experience', label: 'Experience' },
  { id: 'projects', labelKey: 'nav.projects', label: 'Projects' },
  { id: 'skills', labelKey: 'nav.skills', label: 'Skills' },
  { id: 'workwithme', labelKey: 'nav.workwithme', label: 'Work With Me' },
  { id: 'contact', labelKey: 'nav.contact', label: 'Contact' },
];

export const recruiterMode: RecruiterModeConfig = {
  label: 'Recruiter Mode',
  description: 'Condense this page to experience, key projects, tech stack, availability, and contact.',
  condensedSectionIds: ['experience', 'projects', 'skills', 'workwithme', 'contact'],
};

export const languageOptions: readonly LanguageOption[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English', available: true },
  { code: 'ta', nativeLabel: 'தமிழ்', englishLabel: 'Tamil', available: false },
  { code: 'hi', nativeLabel: 'हिन्दी', englishLabel: 'Hindi', available: false },
  { code: 'de', nativeLabel: 'Deutsch', englishLabel: 'German', available: false },
  { code: 'fr', nativeLabel: 'Français', englishLabel: 'French', available: false },
  { code: 'ja', nativeLabel: '日本語', englishLabel: 'Japanese', available: false },
];
