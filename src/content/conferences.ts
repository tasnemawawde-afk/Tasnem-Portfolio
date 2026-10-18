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

/** One line in the conference log. Keep it short: name, who ran it, year, field. */
export interface ConferenceEvent {
  name: string;
  organiser: string;
  year: string;
  field: string;
  note?: string;
}

export interface ConferencesContent {
  featured: FeaturedConference;
  /** Other notable conferences, newest first. Add one object per conference. */
  events: ConferenceEvent[];
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
  events: [
    { year: "2026", name: "Hasoub Annual Conference – One Ecosystem", organiser: "Hasoub · Ar'ara", field: "Tech ecosystem" },
    { year: "2026", name: "Israeli Hi-Tech Week – Launch Event", organiser: "Israeli High-Tech Association", field: "Tech ecosystem" },
    { year: "2026", name: "Crack the Code to Your Tech Career", organiser: "NVIDIA", field: "Tech careers" },
    { year: "2026", name: "Tech Innovation & Networking @ Annapurna Labs", organiser: "Annapurna Labs (AWS)", field: "Hardware", note: "September" },
    { year: "2026", name: "Tech Interview 360°", organiser: "Mindspace Haifa", field: "Tech careers" },
    { year: "2026", name: "START @Google – Physical Design Bootcamp", organiser: "Google", field: "Physical design" },
    { year: "2026", name: "From Models to Hardware: Optimizing AI at Scale", organiser: "8200 Alumni Association · Tech&Talk MATAM", field: "AI & Hardware" },
    { year: "2026", name: "Tech Innovation & Networking @ Annapurna Labs", organiser: "Annapurna Labs (AWS)", field: "Hardware", note: "March" },
    { year: "2025", name: "HERizon AI Workshop", organiser: "Women in Tech Israel · powered by Google Cloud", field: "AI" },
    { year: "2025", name: "Starting a Year of Empowerment", organiser: "Women in Tech Israel · Tech&Talk MATAM", field: "Leadership" },
    { year: "2025", name: "AWS Experience – Northern Israel", organiser: "Amazon Web Services", field: "Cloud & AI" },
    { year: "2024", name: "Hasoub Annual Conference", organiser: "Hasoub", field: "Tech ecosystem" },
    { year: "2024", name: "InspireHER – Women Hi-Tech Conference", organiser: "Tsofen · Haifa", field: "Women in tech" },
    { year: "2024", name: "FV-Israel – Formal Verification Conference", organiser: "Intel · Tech&Talk MATAM", field: "Formal verification" },
    { year: "2024", name: "Code Name: Woman", organiser: "Microsoft Israel", field: "Women in tech" },
    { year: "2023", name: "Accelerate AI Workloads with InfiniBand", organiser: "NVIDIA · online", field: "AI infrastructure" },
    { year: "2022", name: "Hasoub Annual Conference & Garage Grand Opening", organiser: "Hasoub · Ar'ara", field: "Tech ecosystem" },
  ],
  highlight: { value: "50+", label: "Industry conferences since 2021" },
  summary:
    "Beyond the summit, I have been a regular at industry conferences since 2021 — in person and online — hosted by leading hardware, semiconductor and software companies, keeping close to where the field is heading.",
  fields: ["Hardware", "Software", "Formal verification", "Physical design", "AI & Cloud"],
};
