import type { ReactNode } from 'react';
import { Button, Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import {
  AchievementList,
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
import { resumeDataByLocale } from './data/resume.data';
import { languageOptions, navItems, recruiterMode } from './data/portfolio.config';

interface SectionDescriptor {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

export function App() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  const { isRecruiterMode, toggle: toggleRecruiterMode } = useRecruiterMode();
  const resumeData = resumeDataByLocale[locale];

  const navLinks = navItems.map((item) => ({ id: item.id, label: t(item.labelKey, item.label) }));

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Recruiter Mode shows only finished case studies — placeholder cards add noise for a time-pressed reviewer.
  const visibleProjects = isRecruiterMode
    ? resumeData.projects.filter((project) => !project.isPlaceholder)
    : resumeData.projects;

  const allSections: readonly SectionDescriptor[] = [
    { id: 'experience', title: t('nav.experience'), content: <ExperienceTimeline entries={resumeData.experience} /> },
    { id: 'projects', title: t('nav.projects'), content: <ProjectGrid projects={visibleProjects} /> },
    { id: 'skills', title: t('nav.skills'), content: <SkillGroup categories={resumeData.skillCategories} /> },
    { id: 'achievements', title: t('section.achievements'), content: <AchievementList achievements={resumeData.achievements} /> },
    { id: 'education', title: t('section.education'), content: <EducationList entries={resumeData.education} /> },
    { id: 'workwithme', title: t('nav.workwithme'), content: <WorkWithMeSection info={resumeData.workWithMe} /> },
    { id: 'contact', title: t('nav.contact'), content: <ContactLinks contact={resumeData.contact} /> },
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
        links={navLinks}
        utilities={
          <>
            <RecruiterModeToggle
              pressed={isRecruiterMode}
              onToggle={toggleRecruiterMode}
              label={t('recruiterMode.label')}
              description={t('recruiterMode.description')}
            />
            <LanguageSwitcher options={languageOptions} currentLocale={locale} onLocaleChange={setLocale} />
            <ThemeModeToggle />
          </>
        }
      />

      <Hero
        name={resumeData.name}
        title={resumeData.title}
        tagline={resumeData.tagline}
        summary={resumeData.summary}
        actions={
          <>
            <Button variant="contained" size="large" onClick={scrollToContact}>
              {t('hero.getInTouch')}
            </Button>
            {resumeData.cvUrl ? (
              <Button variant="outlined" size="large" href={resumeData.cvUrl} target="_blank" rel="noopener noreferrer">
                {t('hero.downloadCV')}
              </Button>
            ) : (
              <Tooltip title={t('hero.cvComingSoon')}>
                <span>
                  <Button variant="outlined" size="large" disabled>
                    {t('hero.downloadCV')}
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
