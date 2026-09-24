export interface AboutContent {
  biography: string;
  profileImage: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const about: AboutContent = {
  biography:
    "Electrical and Computer Engineering graduate with a strong academic background in VLSI systems, microelectronics, digital design, and hardware development. Hands-on experience in engineering projects involving circuit design, simulation, validation, and system analysis. Strong analytical and problem-solving skills, with a focus on semiconductor technologies and multidisciplinary hardware engineering environments.",
  profileImage: {
    src: "/images/profile.jpg",
    width: 400,
    height: 400,
    alt: "Portrait of Tasnem Moura, Electrical and Computer Engineer",
  },
};
