import type { LocaleCode } from '@manoj-portfolio/data';

/**
 * Translation keys shared by every presentational component in this package (chrome text
 * that isn't resume content — toggles, aria-labels, section sub-headings). Host apps merge
 * this into their own i18next resources alongside app-specific keys (nav labels, hero CTAs).
 */
export const uiTranslations: Record<LocaleCode, Record<string, string>> = {
  en: {
    'theme.switchToLight': 'Switch to light theme',
    'theme.switchToDark': 'Switch to dark theme',
    'nav.openMenu': 'Open navigation menu',
    'language.change': 'Change language',
    'project.caseStudyComingSoon': 'Case study coming soon',
    'project.problem': 'Problem',
    'project.solution': 'Solution',
    'project.myContribution': 'My contribution',
    'project.flipHint': 'Hover or click for the full case study',
    'project.flipBack': 'Click to flip back',
    'footer.builtWith': 'Built with React, TypeScript & MUI.',
  },
  de: {
    'theme.switchToLight': 'Zu hellem Design wechseln',
    'theme.switchToDark': 'Zu dunklem Design wechseln',
    'nav.openMenu': 'Navigationsmenü öffnen',
    'language.change': 'Sprache ändern',
    'project.caseStudyComingSoon': 'Fallstudie folgt in Kürze',
    'project.problem': 'Problem',
    'project.solution': 'Lösung',
    'project.myContribution': 'Mein Beitrag',
    'project.flipHint': 'Für die vollständige Fallstudie klicken oder darüberfahren',
    'project.flipBack': 'Klicken, um zurückzuklappen',
    'footer.builtWith': 'Erstellt mit React, TypeScript & MUI.',
  },
  fr: {
    'theme.switchToLight': 'Passer au thème clair',
    'theme.switchToDark': 'Passer au thème sombre',
    'nav.openMenu': 'Ouvrir le menu de navigation',
    'language.change': 'Changer de langue',
    'project.caseStudyComingSoon': 'Étude de cas à venir',
    'project.problem': 'Problème',
    'project.solution': 'Solution',
    'project.myContribution': 'Ma contribution',
    'project.flipHint': "Survolez ou cliquez pour l'étude de cas complète",
    'project.flipBack': 'Cliquez pour revenir',
    'footer.builtWith': 'Créé avec React, TypeScript et MUI.',
  },
};
