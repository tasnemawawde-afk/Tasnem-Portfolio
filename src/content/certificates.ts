export interface Certificate {
  id: string;
  name: string;
  issuingOrganisation: string;
  completionDate: string;
  completionYear: number;
  credentialUrl?: string;
}

export const certificates: Certificate[] = [
  {
    id: "ai-engineer-accelerator",
    name: "AI Engineer Career Accelerator Program",
    issuingOrganisation: "Led by Mohammad Kabajah, Sr. AI/Cloud Infrastructure Architect at AWS",
    completionDate: "2026",
    completionYear: 2026,
  },
  {
    id: "nvidia-dli-data-science",
    name: "Accelerate Data Science Workflows with Zero Code Changes",
    issuingOrganisation: "NVIDIA Deep Learning Institute (DLI)",
    completionDate: "2025",
    completionYear: 2025,
  },
  {
    id: "nvidia-dli-cuda",
    name: "An Even Easier Introduction to CUDA",
    issuingOrganisation: "NVIDIA Deep Learning Institute (DLI)",
    completionDate: "2025",
    completionYear: 2025,
  },
  {
    id: "tau-business-economics",
    name: "Business Economics",
    issuingOrganisation: "Tel Aviv University",
    completionDate: "2024",
    completionYear: 2024,
  },
  {
    id: "tau-people-systems",
    name: "People and Systems Management (Micro & Macro)",
    issuingOrganisation: "Tel Aviv University",
    completionDate: "2024",
    completionYear: 2024,
  },
  {
    id: "tau-statistical-models",
    name: "Statistical and Analytical Models for Management",
    issuingOrganisation: "Tel Aviv University",
    completionDate: "2024",
    completionYear: 2024,
  },
  {
    id: "bridgz-vlsi-physical-design",
    name: "Industry-Oriented Training in VLSI (Physical Design)",
    issuingOrganisation: "Bridgz Company",
    completionDate: "2023",
    completionYear: 2023,
  },
  {
    id: "bridgz-chip-verification",
    name: "Chip Design Verification",
    issuingOrganisation: "Bridgz Company",
    completionDate: "2023",
    completionYear: 2023,
  },
  {
    id: "bridgz-rtl-gdsii",
    name: "RTL-to-GDSII Flow",
    issuingOrganisation: "Bridgz Company",
    completionDate: "2023",
    completionYear: 2023,
  },
  {
    id: "technion-adpll",
    name: "All-Digital Phase-Locked Loops",
    issuingOrganisation: "Technion – Israel Institute of Technology",
    completionDate: "2022",
    completionYear: 2022,
  },
];
