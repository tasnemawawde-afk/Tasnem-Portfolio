import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { EducationSection } from '../components/EducationSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TrainingSection } from '../components/TrainingSection';
import { ConferencesSection } from '../components/ConferencesSection';
import { CVSection } from '../components/CVSection';
import { ContactSection } from '../components/ContactSection';

import { hero } from '../content/hero';
import { about } from '../content/about';
import { education } from '../content/education';
import { skills } from '../content/skills';
import { projects } from '../content/projects';
import { experience } from '../content/experience';
import { certificates } from '../content/certificates';
import { contact } from '../content/contact';
import { conferences } from '../content/conferences';

// Reverse-chronological sort — education by graduationYear descending
const sortedEducation = [...education].sort((a, b) => b.graduationYear - a.graduationYear);

// Reverse-chronological sort — experience by startYear desc, then startMonth desc
const sortedExperience = [...experience].sort((a, b) =>
  b.startYear !== a.startYear
    ? b.startYear - a.startYear
    : b.startMonth - a.startMonth
);

export default function Home() {
  return (
    <>
      <HeroSection
        name={hero.name}
        title={hero.title}
        tagline={hero.tagline}
        cvPath={hero.cvPath}
        contactHref="#contact"
        profileImage={about.profileImage}
      />
      <AboutSection biography={about.biography} />
      <ProjectsSection projects={projects} />
      <SkillsSection categories={skills} />
      <EducationSection entries={sortedEducation} experience={sortedExperience} />
      <TrainingSection certificates={certificates} />
      <ConferencesSection content={conferences} />
      <CVSection cvPath={hero.cvPath} />
      <ContactSection
        linkedInUrl={contact.linkedInUrl}
        githubUrl={contact.githubUrl}
        email={contact.email}
      />
    </>
  );
}
