import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { FounderStorySection } from '../components/sections/FounderStorySection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { WeddingGallerySection } from '../components/sections/WeddingGallerySection';
import { Testimonials } from '../components/sections/Testimonials';
import { FeatureIconsSection } from '../components/sections/FeatureIconsSection';
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
        onExploreWork={() => onNavigate('gallery')}
      />

      {/* 2. About Section: The Minds Behind Your Perfect Day */}
      <AboutSection onLearnMore={() => onNavigate('about')} />

      {/* 3. Founder Story Section: Architects of Romance */}
      <FounderStorySection onOpenEnquiry={onOpenEnquiry} />

      {/* 5. Services Section: Bespoke Planning For Your Special Day */}
      <ServicesSection onSelectService={() => onNavigate('services')} />

      {/* 6. Portfolio Section: Visualizing Your Dreams Into Reality */}
      <PortfolioSection
        onSelectProject={onSelectProject}
        onViewAll={() => onNavigate('gallery')}
      />

      {/* 7. Wedding Gallery Section: Mosaic of Moments */}
      <WeddingGallerySection onOpenFullGallery={() => onNavigate('gallery')} />

      {/* 8. Feature Icons Grid Section */}
      <FeatureIconsSection />

      {/* 9. Client Testimonials Section: Love Stories & Celebrations */}
      <Testimonials />

      {/* 10. Destination Elegance Section: Palaces, Islands & Desert Sanctuaries */}
      <DarkPalaceSection
        onNavigateVenues={() => onNavigate('venues')}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 13. FAQ Accordion Section */}
      <FAQSection onOpenEnquiry={onOpenEnquiry} />

      {/* 14. Newsletter Strip */}
      <NewsletterSection />
    </main>
  );
};
