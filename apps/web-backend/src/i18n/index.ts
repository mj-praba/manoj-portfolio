import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { uiTranslations } from '@manoj-portfolio/ui';

const appTranslations = {
  en: {
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.workwithme': 'Work With Me',
    'nav.contact': 'Contact',
    'section.achievements': 'Achievements',
    'section.education': 'Education',
    'hero.getInTouch': 'Get in touch',
    'hero.downloadCV': 'Download CV',
    'hero.cvComingSoon': 'CV coming soon',
    'recruiterMode.label': 'Recruiter Mode',
    'recruiterMode.description': 'Condense this page to experience, key projects, tech stack, availability, and contact.',
  },
  de: {
    'nav.experience': 'Berufserfahrung',
    'nav.projects': 'Projekte',
    'nav.skills': 'Kenntnisse',
    'nav.workwithme': 'Mit mir arbeiten',
    'nav.contact': 'Kontakt',
    'section.achievements': 'Erfolge',
    'section.education': 'Ausbildung',
    'hero.getInTouch': 'Kontakt aufnehmen',
    'hero.downloadCV': 'Lebenslauf herunterladen',
    'hero.cvComingSoon': 'Lebenslauf folgt in Kürze',
    'recruiterMode.label': 'Recruiter-Modus',
    'recruiterMode.description': 'Diese Seite auf Berufserfahrung, Kernprojekte, Tech-Stack, Verfügbarkeit und Kontakt verdichten.',
  },
  fr: {
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.workwithme': 'Travailler avec moi',
    'nav.contact': 'Contact',
    'section.achievements': 'Réalisations',
    'section.education': 'Formation',
    'hero.getInTouch': 'Me contacter',
    'hero.downloadCV': 'Télécharger le CV',
    'hero.cvComingSoon': 'CV à venir',
    'recruiterMode.label': 'Mode recruteur',
    'recruiterMode.description': "Condenser cette page à l'expérience, aux projets clés, à la pile technique, à la disponibilité et au contact.",
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
