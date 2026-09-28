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
  highlight: ConferenceStat;
  summary: string;
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
        src: "/images/conferences/women-ceo-summit-2025-badge.jpg",
        width: 900,
        height: 1125,
        alt: "Tasnem Moura's attendee badge at the WO.men CEO Summit 2025",
        caption: "WO.men CEO Summit 2025 · Attendee",
      },
      {
        src: "/images/conferences/women-ceo-summit-panel.jpg",
        width: 1200,
        height: 675,
        alt: "Panel of women leaders on stage at the WO.men CEO Summit",
        caption: "WO.men CEO Summit 2025 · Panel: women in hi-tech leadership",
      },
    ],
  },
  highlight: { value: "50+", label: "Industry conferences since 2021" },
  summary:
    "Beyond the summit, I have been a regular at industry conferences since 2021 — in person and online — hosted by leading hardware, semiconductor and software companies, keeping close to where the field is heading.",
  fields: ["Hardware", "Software", "Formal verification", "Physical design", "AI & Cloud"],
};
