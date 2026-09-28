export interface ConferencePhoto {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface FeaturedConference {
  name: string;
  organisers: string;
  years: string[];
  description: string;
  facts: string[];
  photos: ConferencePhoto[];
}

export interface ConferenceStat {
  value: string;
  label: string;
}

export interface ConferencesContent {
  featured: FeaturedConference;
  summary: string;
  stats: ConferenceStat[];
  fields: string[];
}

export const conferences: ConferencesContent = {
  featured: {
    name: "WO.men CEO Summit",
    organisers: "Israeli High-Tech Association & Manufacturers Association of Israel",
    years: ["2025", "2026"],
    description:
      "Attended twice. The summit brings together senior women leaders from Israel's hi-tech and industrial sectors for panels on leadership, innovation and impact, with a strong focus on networking and business opportunities.",
    facts: ["500+ participants", "20+ senior speakers", "Hi-tech & industry leadership"],
    photos: [
      {
        src: "/images/conferences/women-ceo-summit-2026.jpg",
        width: 900,
        height: 1125,
        alt: "Tasnem Moura at the WO.men CEO Summit 2026, Bloomfield Stadium",
        caption: "WO.men CEO Summit 2026 · Bloomfield Stadium",
      },
      {
        src: "/images/conferences/women-ceo-summit-panel.jpg",
        width: 1200,
        height: 675,
        alt: "Panel of women leaders on stage at the WO.men CEO Summit",
        caption: "Panel: women in hi-tech leadership — challenges, successes and what's next",
      },
    ],
  },
  summary:
    "Beyond the summit, I have attended industry conferences consistently since 2021 — around nine a year, in person and online — hosted by leading hardware and software companies.",
  stats: [
    { value: "2021", label: "Since" },
    { value: "~9 / year", label: "Conferences" },
  ],
  fields: ["Hardware", "Software", "Formal verification", "Physical design", "AI & Cloud"],
};
