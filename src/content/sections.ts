/** The subject pages linked from the home page and the navigation bar. */
export interface SitePage {
  href: string;
  label: string; // short label for the navigation bar
  title: string; // card title on the home page
  description: string;
}

export const SITE_PAGES: SitePage[] = [
  { href: '/about',       label: 'About',       title: 'About Me',              description: 'Who I am, what drives me, and the engineering I love.' },
  { href: '/projects',    label: 'Projects',    title: 'Engineering Projects',  description: 'AI-assisted formal verification of asynchronous controllers, time-domain ADC design, a MEMS-based optical system and an AI recruitment platform.' },
  { href: '/skills',      label: 'Skills',      title: 'Technical Skills',      description: 'Design & verification, VLSI, programming and lab tools.' },
  { href: '/background',  label: 'Background',  title: 'Education & Experience', description: 'B.Sc. at the Hebrew University, teaching and work experience.' },
  { href: '/courses',     label: 'Courses',     title: 'Courses & Certificates', description: 'AI engineering, NVIDIA DLI, VLSI and chip-design training.' },
  { href: '/conferences', label: 'Conferences', title: 'Conferences & Events',  description: '50+ industry conferences since 2021, including WO.men CEO Summit.' },
  { href: '/cv',          label: 'CV',          title: 'CV',                    description: 'Download my up-to-date one-page CV.' },
  { href: '/contact',     label: 'Contact',     title: 'Contact',               description: 'Email, LinkedIn and GitHub — let’s talk.' },
];
