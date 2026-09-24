export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "hardware-vlsi",
    name: "Hardware & VLSI",
    skills: [
      "Verilog",
      "SystemVerilog",
      "RTL simulation",
      "Debugging and root-cause analysis",
      "Functional validation",
      "Test scenario development",
      "Waveform analysis",
      "Verification flows",
      "ASIC design concepts",
      "RTL-to-GDSII flow",
      "Digital and analog circuit fundamentals",
      "SoC architecture concepts",
      "Power-efficient design considerations",
      "Microelectronics",
      "Semiconductor device fundamentals",
      "Cadence Virtuoso",
      "COMSOL Multiphysics",
      "Oscilloscopes",
      "Logic analyzers",
      "Spectrum analyzers",
      "Signal generators",
    ],
  },
  {
    id: "programming",
    name: "Programming Languages",
    skills: ["Python", "C++", "MATLAB", "C", "C#", "SystemVerilog"],
  },
  {
    id: "tools-software",
    name: "Tools & Software",
    skills: ["Cadence Virtuoso", "COMSOL Multiphysics", "MATLAB"],
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
