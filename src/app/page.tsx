import { HeroSection } from '../components/HeroSection';
import { ExploreSection } from '../components/ExploreSection';
import { hero } from '../content/hero';
import { about } from '../content/about';

export default function Home() {
  return (
    <>
      <HeroSection
        name={hero.name}
        title={hero.title}
        tagline={hero.tagline}
        cvPath={hero.cvPath}
        contactHref="/contact"
        profileImage={about.profileImage}
      />
      <ExploreSection />
    </>
  );
}
