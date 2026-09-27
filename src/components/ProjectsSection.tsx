import React from 'react';
import { ProjectCard } from './ProjectCard';
import styles from './ProjectsSection.module.css';

interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  highlights?: { value: string; label: string }[];
  externalLink?: { href: string; label: string };
  image?: ProjectImage;
}

interface ProjectsSectionProps {
  projects: ProjectProps[];
}

export function ProjectsSection(props: ProjectsSectionProps): React.JSX.Element {
  return (
    <section id="projects" aria-labelledby="projects-heading" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <p className={styles.kicker}>Selected Work</p>
          <h2 id="projects-heading" className={styles.heading}>Engineering Projects</h2>
        </header>
        <div className={styles.list}>
          {props.projects.map((project, index) => (
            <ProjectCard key={project.title} index={index + 1} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
