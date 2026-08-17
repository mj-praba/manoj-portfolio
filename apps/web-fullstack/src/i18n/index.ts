import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { uiTranslations } from '@manoj-portfolio/ui';

const appTranslations = {
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'section.achievements': 'Achievements',
    'section.education': 'Education',
    'hero.getInTouch': 'Get in touch',
  },
  de: {
    'nav.experience': 'Berufserfahrung',
    'nav.projects': 'Projekte',
    'nav.skills': 'Kenntnisse',
    'nav.contact': 'Kontakt',
    'section.achievements': 'Erfolge',
    'section.education': 'Ausbildung',
    'hero.getInTouch': 'Kontakt aufnehmen',
  },
  fr: {
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    'section.achievements': 'Réalisations',
    'section.education': 'Formation',
    'hero.getInTouch': 'Me contacter',
  },
} as const;

void i18next.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: { ...uiTranslations.en, ...appTranslations.en } },
    de: { translation: { ...uiTranslations.de, ...appTranslations.de } },
    fr: { translation: { ...uiTranslations.fr, ...appTranslations.fr } },
  },
  interpolation: { escapeValue: false },
});
