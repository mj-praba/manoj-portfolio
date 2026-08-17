import type { ReactNode } from 'react';
import { Button } from '@mui/material';
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
  Section,
  SkillGroup,
  ThemeModeToggle,
  useLocale,
} from '@manoj-portfolio/ui';
import { resumeDataByLocale } from './data/resume.data';
import { languageOptions, navItems } from './data/portfolio.config';

interface SectionDescriptor {
  readonly id: string;
  readonly title: string;
  readonly content: ReactNode;
}

export function App() {
  const { t } = useTranslation();
  const { locale, setLocale } = useLocale();
  const resumeData = resumeDataByLocale[locale];

  const navLinks = navItems.map((item) => ({ id: item.id, label: t(item.labelKey, item.label) }));

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sections: readonly SectionDescriptor[] = [
    { id: 'experience', title: t('nav.experience'), content: <ExperienceTimeline entries={resumeData.experience} /> },
    { id: 'projects', title: t('nav.projects'), content: <ProjectGrid projects={resumeData.projects} /> },
    { id: 'skills', title: t('nav.skills'), content: <SkillGroup categories={resumeData.skillCategories} /> },
    { id: 'achievements', title: t('section.achievements'), content: <AchievementList achievements={resumeData.achievements} /> },
    { id: 'education', title: t('section.education'), content: <EducationList entries={resumeData.education} /> },
    { id: 'contact', title: t('nav.contact'), content: <ContactLinks contact={resumeData.contact} /> },
  ];

  return (
    <>
      <NavBar
        brand={resumeData.name}
        links={navLinks}
        utilities={
          <>
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
          <Button variant="contained" size="large" onClick={scrollToContact}>
            {t('hero.getInTouch')}
          </Button>
        }
      />

      {sections.map((section, index) => (
        <Section key={section.id} id={section.id} title={section.title} tone={index % 2 === 1 ? 'paper' : 'default'}>
          {section.content}
        </Section>
      ))}

      <Footer name={resumeData.name} />
    </>
  );
}
