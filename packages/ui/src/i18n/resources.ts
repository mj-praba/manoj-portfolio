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
    'workWithMe.timezoneOverlap': 'Timezone overlap',
    'workWithMe.basedInSuffix': "(I'm based in {{location}}.)",
    'workWithMe.ipEstimateNote': 'Estimated from your IP address — no location permission requested.',
    'workWithMe.basedIn': 'Based in',
    'workWithMe.availability': 'Availability',
    'workWithMe.engagement': 'Engagement',
    'project.caseStudyComingSoon': 'Case study coming soon',
    'project.problem': 'Problem',
    'project.solution': 'Solution',
    'project.myContribution': 'My contribution',
    'footer.builtWith': 'Built with React, TypeScript & MUI.',
  },
  de: {
    'theme.switchToLight': 'Zu hellem Design wechseln',
    'theme.switchToDark': 'Zu dunklem Design wechseln',
    'nav.openMenu': 'Navigationsmenü öffnen',
    'language.change': 'Sprache ändern',
    'workWithMe.timezoneOverlap': 'Zeitzonen-Überschneidung',
    'workWithMe.basedInSuffix': '(Ich bin in {{location}} ansässig.)',
    'workWithMe.ipEstimateNote': 'Geschätzt anhand Ihrer IP-Adresse — es wird keine Standortberechtigung angefordert.',
    'workWithMe.basedIn': 'Ansässig in',
    'workWithMe.availability': 'Verfügbarkeit',
    'workWithMe.engagement': 'Beschäftigungsart',
    'project.caseStudyComingSoon': 'Fallstudie folgt in Kürze',
    'project.problem': 'Problem',
    'project.solution': 'Lösung',
    'project.myContribution': 'Mein Beitrag',
    'footer.builtWith': 'Erstellt mit React, TypeScript & MUI.',
  },
  fr: {
    'theme.switchToLight': 'Passer au thème clair',
    'theme.switchToDark': 'Passer au thème sombre',
    'nav.openMenu': 'Ouvrir le menu de navigation',
    'language.change': 'Changer de langue',
    'workWithMe.timezoneOverlap': 'Chevauchement de fuseau horaire',
    'workWithMe.basedInSuffix': '(Je suis basé(e) à {{location}}.)',
    'workWithMe.ipEstimateNote': "Estimé à partir de votre adresse IP — aucune autorisation de localisation n'est demandée.",
    'workWithMe.basedIn': 'Basé(e) à',
    'workWithMe.availability': 'Disponibilité',
    'workWithMe.engagement': "Type d'engagement",
    'project.caseStudyComingSoon': 'Étude de cas à venir',
    'project.problem': 'Problème',
    'project.solution': 'Solution',
    'project.myContribution': 'Ma contribution',
    'footer.builtWith': 'Créé avec React, TypeScript et MUI.',
  },
};
