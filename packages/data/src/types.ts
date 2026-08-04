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
}
