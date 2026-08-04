import { Button } from '@mui/material';
import {
  AchievementList,
  ContactLinks,
  EducationList,
  ExperienceTimeline,
  Footer,
  Hero,
  NavBar,
  Section,
  SkillGroup,
} from '@manoj-portfolio/ui';
import { resumeData } from './data/resume.data';

const NAV_LINKS = [
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const;

export function App() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NavBar brand={resumeData.name} links={NAV_LINKS} />

      <Hero
        name={resumeData.name}
        title={resumeData.title}
        tagline={resumeData.tagline}
        summary={resumeData.summary}
        actions={
          <Button variant="contained" size="large" onClick={scrollToContact}>
            Get in touch
          </Button>
        }
      />

      <Section id="experience" title="Experience">
        <ExperienceTimeline entries={resumeData.experience} />
      </Section>

      <Section id="skills" title="Skills" tone="paper">
        <SkillGroup categories={resumeData.skillCategories} />
      </Section>

      <Section id="achievements" title="Achievements">
        <AchievementList achievements={resumeData.achievements} />
      </Section>

      <Section id="education" title="Education" tone="paper">
        <EducationList entries={resumeData.education} />
      </Section>

      <Section id="contact" title="Contact">
        <ContactLinks contact={resumeData.contact} />
      </Section>

      <Footer name={resumeData.name} />
    </>
  );
}
