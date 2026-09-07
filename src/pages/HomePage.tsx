import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { PhotoStripSection } from '../components/sections/PhotoStripSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { FeatureIconsSection } from '../components/sections/FeatureIconsSection';
import { CommitmentSection } from '../components/sections/CommitmentSection';
import { WhyChooseUsSection } from '../components/sections/WhyChooseUsSection';
import { DarkPalaceSection } from '../components/sections/DarkPalaceSection';
import { FAQSection } from '../components/sections/FAQSection';
import { NewsletterSection } from '../components/sections/NewsletterSection';
import type { PortfolioProject } from '../data/portfolioData';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  onOpenEnquiry: () => void;
  onSelectProject: (project: PortfolioProject) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  onSelectProject
}) => {
  return (
    <main className="w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <Hero
        onOpenEnquiry={onOpenEnquiry}
        onExploreWork={() => onNavigate('portfolio')}
      />

      {/* 2. About Section: The Minds Behind Your Perfect Day */}
      <AboutSection onLearnMore={() => onNavigate('about')} />

      {/* 3. Photo Collage Strip Section */}
      <PhotoStripSection />

      {/* 4. Services Section: Bespoke Planning For Your Special Day (Circular Badges 1, 2, 3) */}
      <ServicesSection onSelectService={() => onNavigate('services')} />

      {/* 5. Portfolio Section: Visualizing Your Dreams Into Reality */}
      <PortfolioSection
        onSelectProject={onSelectProject}
        onViewAll={() => onNavigate('portfolio')}
      />

      {/* 6. Feature Icons Grid Section: And more! */}
      <FeatureIconsSection />

      {/* 7. Our Commitment Section: Your Vision, Our Flawless Execution */}
      <CommitmentSection onLearnMore={() => onNavigate('about')} />

      {/* 8. Why Choose Us Section: Floating Photo Bubbles & Circular Feature Cards */}
      <WhyChooseUsSection />

      {/* 9. Dark Container Section: Dubai Palace & Desert Weddings */}
      <DarkPalaceSection onOpenEnquiry={onOpenEnquiry} />

      {/* 10. FAQ Accordion Section: You may be wondering... */}
      <FAQSection onOpenEnquiry={onOpenEnquiry} />

      {/* 11. Newsletter Strip: Get on the list */}
      <NewsletterSection />
    </main>
  );
};
