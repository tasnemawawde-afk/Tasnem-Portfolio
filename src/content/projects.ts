export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ExternalLink {
  href: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  externalLink?: ExternalLink;
  image?: ProjectImage;
}

export const projects: Project[] = [
  {
    id: "adc-two-step",
    title: "Two-Step Time-Domain ADC with Delay-Tracking SAR TDC",
    description:
      "Designed and simulated a 6-bit Time-Domain ADC in 14nm CMOS using Cadence Virtuoso. Implemented Sample & Hold, VTC, and Delay-Tracking SAR TDC blocks. Performed transient and corner simulations to investigate timing behaviour and validate performance against design specifications. Achieved 1.25 GS/s throughput, 7.4 mW power consumption, and 50 dB SNDR.",
    technologies: [
      "Cadence Virtuoso",
      "14nm CMOS",
      "Circuit simulation",
      "ADC",
      "VTC",
      "TDC",
    ],
    domain: "VLSI / Mixed-Signal IC Design",
  },
  {
    id: "mems-optical",
    title: "MEMS-Based Optical System",
    description:
      "Designed and analysed an electromagnetically actuated MEMS micromirror for high-speed beam steering. Developed electro-mechanical models using COMSOL and MATLAB, and validated simulation results against analytical calculations. Achieved ±10° tilt, >100 kHz resonance frequency, and <10 µs response time.",
    technologies: [
      "COMSOL Multiphysics",
      "MATLAB",
      "MEMS",
      "Electromagnetic actuation",
    ],
    domain: "MEMS / Optical Systems",
  },
];
