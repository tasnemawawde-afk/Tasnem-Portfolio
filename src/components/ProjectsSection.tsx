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
        <h2 id="projects-heading" className={styles.heading}>Projects</h2>
        <div className={styles.grid}>
          {props.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
