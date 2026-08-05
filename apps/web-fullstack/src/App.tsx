import type { ReactNode } from 'react';
import { Button, Tooltip } from '@mui/material';
import {
  AchievementList,
  ComingSoonLocaleBanner,
  ContactLinks,
  EducationList,
  ExperienceTimeline,
  Footer,
  Hero,
  LanguageSwitcher,
  NavBar,
  ProjectGrid,
  RecruiterModeToggle,
  Section,
  SkillGroup,
  ThemeModeToggle,
  useLocale,
  useRecruiterMode,
  WorkWithMeSection,
} from '@manoj-portfolio/ui';
import { resumeData } from './data/resume.data';
import { languageOptions, recruiterMode } from './data/portfolio.config';

const NAV_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'workwithme', label: 'Work With Me' },
  { id: 'contact', label: 'Contact' },
] as const;

interface SectionDescriptor {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

export function App() {
  const { locale, setLocale } = useLocale();
  const activeLanguage = languageOptions.find((option) => option.code === locale);
  const { isRecruiterMode, toggle: toggleRecruiterMode } = useRecruiterMode();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Recruiter Mode shows only finished case studies — placeholder cards add noise for a time-pressed reviewer.
  const visibleProjects = isRecruiterMode
    ? resumeData.projects.filter((project) => !project.isPlaceholder)
    : resumeData.projects;

  const allSections: readonly SectionDescriptor[] = [
    { id: 'experience', title: 'Experience', content: <ExperienceTimeline entries={resumeData.experience} /> },
    { id: 'projects', title: 'Projects', content: <ProjectGrid projects={visibleProjects} /> },
    { id: 'skills', title: 'Skills', content: <SkillGroup categories={resumeData.skillCategories} /> },
    { id: 'achievements', title: 'Achievements', content: <AchievementList achievements={resumeData.achievements} /> },
    { id: 'education', title: 'Education', content: <EducationList entries={resumeData.education} /> },
    { id: 'workwithme', title: 'Work With Me', content: <WorkWithMeSection info={resumeData.workWithMe} /> },
    { id: 'contact', title: 'Contact', content: <ContactLinks contact={resumeData.contact} /> },
  ];

  // Drop 'projects' from the condensed view entirely when there are no finished case studies to show —
  // an empty heading with nothing beneath it reads as broken, not as "nothing here yet".
  const condensedSectionIds =
    isRecruiterMode && visibleProjects.length === 0
      ? recruiterMode.condensedSectionIds.filter((id) => id !== 'projects')
      : recruiterMode.condensedSectionIds;

  const visibleSections = isRecruiterMode
    ? condensedSectionIds
        .map((id) => allSections.find((section) => section.id === id))
        .filter((section): section is SectionDescriptor => Boolean(section))
    : allSections;

  return (
    <>
      <NavBar
        brand={resumeData.name}
        links={NAV_LINKS}
        utilities={
          <>
            <RecruiterModeToggle
              pressed={isRecruiterMode}
              onToggle={toggleRecruiterMode}
              label={recruiterMode.label}
              description={recruiterMode.description}
            />
            <LanguageSwitcher options={languageOptions} currentLocale={locale} onLocaleChange={setLocale} />
            <ThemeModeToggle />
          </>
        }
      />

      {activeLanguage && !activeLanguage.available && (
        <ComingSoonLocaleBanner language={activeLanguage} onSwitchBack={() => setLocale('en')} />
      )}

      <Hero
        name={resumeData.name}
        title={resumeData.title}
        tagline={resumeData.tagline}
        summary={resumeData.summary}
        actions={
          <>
            <Button variant="contained" size="large" onClick={scrollToContact}>
              Get in touch
            </Button>
            {resumeData.cvUrl ? (
              <Button variant="outlined" size="large" href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                Download CV
              </Button>
            ) : (
              <Tooltip title="CV coming soon">
                <span>
                  <Button variant="outlined" size="large" disabled>
                    Download CV
                  </Button>
                </span>
              </Tooltip>
            )}
          </>
        }
      />

      {visibleSections.map((section, index) => (
        <Section key={section.id} id={section.id} title={section.title} tone={index % 2 === 1 ? 'paper' : 'default'}>
          {section.content}
        </Section>
      ))}

      <Footer name={resumeData.name} />
    </>
  );
}
