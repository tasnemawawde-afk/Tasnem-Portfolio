export interface HeroContent {
  name: string;
  title: string;
  tagline: string; // ≤30 words
  cvPath: string;
}

export const hero: HeroContent = {
  name: 'Tasnem Moura',
  title: 'Electrical & Computer Engineer',
  tagline:
    'Electrical and Computer Engineering graduate specialising in VLSI, microelectronics, digital systems, and hardware engineering, with hands-on experience in circuit design, simulation, and validation.',
  cvPath: '/resume/TasnemMoura_CV.pdf',
};
