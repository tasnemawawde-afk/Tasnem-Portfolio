export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  graduationYear: number;
}

export const education: EducationEntry[] = [
  {
    id: "huji-bsc",
    institution: "The Hebrew University of Jerusalem",
    degree: "B.Sc. in Electrical and Computer Engineering",
    fieldOfStudy: "Microelectronics, VLSI Design, and Digital Systems",
    graduationYear: 2024,
  },
];
