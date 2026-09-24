export interface ExperienceEntry {
  id: string;
  jobTitle: string;
  organisation: string;
  startYear: number;
  startMonth: number;
  endYear?: number;
  endMonth?: number;
  period: string;
  description: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: "tutor-huji",
    jobTitle: "Tutor",
    organisation: "The Hebrew University of Jerusalem",
    startYear: 2020,
    startMonth: 1,
    endYear: 2023,
    endMonth: 12,
    period: "2020 – 2023",
    description: "Tutored classical mechanics, analog electronics, and digital electronics.",
  },
  {
    id: "shift-manager-bloomfield",
    jobTitle: "Shift Manager",
    organisation: "Bloomfield Science Museum",
    startYear: 2020,
    startMonth: 1,
    endYear: 2022,
    endMonth: 12,
    period: "2020 – 2022",
    description:
      "Delivered interactive science workshops, explained scientific concepts through museum exhibits, trained museum guides, and supervised daily shift operations.",
  },
];
