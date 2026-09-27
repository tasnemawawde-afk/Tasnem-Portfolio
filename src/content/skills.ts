export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "design-verification",
    name: "Digital Design & Verification",
    skills: [
      "Verilog",
      "SystemVerilog",
      "RTL simulation",
      "Functional validation",
      "Verification flows",
      "Test scenario development",
      "Waveform analysis",
      "Debugging and root-cause analysis",
    ],
  },
  {
    id: "vlsi-microelectronics",
    name: "VLSI & Microelectronics",
    skills: [
      "ASIC design concepts",
      "RTL-to-GDSII flow",
      "SoC architecture concepts",
      "Power-efficient design",
      "Digital and analog circuit fundamentals",
      "Semiconductor device fundamentals",
      "Mixed-signal IC design",
    ],
  },
  {
    id: "tools-software",
    name: "EDA Tools & Software",
    skills: ["Cadence Virtuoso", "COMSOL Multiphysics", "MATLAB"],
  },
  {
    id: "lab-equipment",
    name: "Lab Equipment",
    skills: [
      "Oscilloscopes",
      "Logic analyzers",
      "Spectrum analyzers",
      "Signal generators",
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    skills: ["Python", "C", "C++", "C#", "MATLAB"],
  },
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    skills: [
      "LLMs",
      "Agentic AI concepts",
      "Document processing",
      "Information retrieval",
      "AI-assisted development",
      "Accelerated data science workflows",
      "CUDA fundamentals",
    ],
  },
];
