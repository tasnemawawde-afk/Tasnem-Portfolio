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

export interface ProjectHighlight {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  domain: string;
  highlights?: ProjectHighlight[];
  externalLink?: ExternalLink;
  image?: ProjectImage;
}

export const projects: Project[] = [
  {
    id: "asyncproof",
    title: "AsyncProof – AI-Assisted Formal Verification of Asynchronous Controllers (in progress)",
    description:
      "Building an open-source tool that converts timing diagrams of asynchronous controllers (for example the bit-cycle control of an asynchronous SAR ADC) into Signal Transition Graphs, verifies them formally with Workcraft (consistency, deadlock freedom, output persistency, complete state coding) and synthesises the control logic. Built an independent Python STG checker with counterexample traces and behavioural equivalence, cross-validated against Workcraft, with 247 automated tests including integration tests in Docker. A feasibility study showed that a single misread causal arrow passes every formal check yet yields a different circuit, which led to a human confirmation step and an extraction-accuracy benchmark. Developed spec-first with an AI coding agent, reviewing its output through testing.",
    technologies: [
      "Python",
      "Workcraft",
      "Formal verification",
      "Signal Transition Graphs",
      "Docker",
      "LLM agents",
    ],
    domain: "Formal Verification / Asynchronous Design",
    highlights: [
      { value: "5", label: "Formal properties" },
      { value: "247", label: "Automated tests" },
      { value: "2", label: "Independent checkers" },
    ],
  },
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
    highlights: [
      { value: "1.25 GS/s", label: "Throughput" },
      { value: "7.4 mW", label: "Power" },
      { value: "50 dB", label: "SNDR" },
      { value: "14 nm", label: "CMOS node" },
    ],
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
    highlights: [
      { value: "±10°", label: "Tilt angle" },
      { value: ">100 kHz", label: "Resonance" },
      { value: "<10 µs", label: "Response time" },
    ],
  },
];
