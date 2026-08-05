export interface ContactInfo {
  readonly email: string;
  readonly phone: string;
  readonly location: string;
  readonly linkedinUrl: string;
}

export interface ExperienceEntry {
  readonly company: string;
  readonly role: string;
  readonly period: string;
  readonly highlights: readonly string[];
}

export interface SkillCategory {
  readonly category: string;
  readonly skills: readonly string[];
}

export interface Achievement {
  readonly description: string;
}

export interface EducationEntry {
  readonly institution: string;
  readonly credential: string;
  readonly year: string;
}

export interface ProjectLink {
  readonly label: string;
  readonly url: string;
}

export interface Project {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly businessProblem: string;
  readonly solution: string;
  readonly myContribution: readonly string[];
  readonly technologies: readonly string[];
  readonly links: readonly ProjectLink[];
  readonly isPlaceholder: boolean;
  readonly placeholderNote?: string;
}

export interface WorkWithMeInfo {
  readonly headline: string;
  readonly baseLocation: string;
  /** IANA timezone id, e.g. "Asia/Kolkata" */
  readonly baseTimezone: string;
  readonly remoteAvailability: string;
  readonly preferredEngagements: readonly string[];
  readonly fallbackTimezoneNote: string;
}

export interface NavItem {
  readonly id: string;
  readonly labelKey: string;
  readonly label: string;
}

export interface RecruiterModeConfig {
  readonly label: string;
  readonly description: string;
  readonly condensedSectionIds: readonly string[];
}

export type LocaleCode = 'en' | 'ta' | 'hi' | 'de' | 'fr' | 'ja';

export interface LanguageOption {
  readonly code: LocaleCode;
  readonly nativeLabel: string;
  readonly englishLabel: string;
  readonly available: boolean;
}

export interface ResumeData {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: string;
  readonly contact: ContactInfo;
  readonly experience: readonly ExperienceEntry[];
  readonly skillCategories: readonly SkillCategory[];
  readonly achievements: readonly Achievement[];
  readonly education: readonly EducationEntry[];
  readonly projects: readonly Project[];
  readonly workWithMe: WorkWithMeInfo;
  readonly cvUrl?: string;
}
