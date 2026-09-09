import React from 'react';
import { Hero } from '../components/sections/Hero';
import { AboutSection } from '../components/sections/AboutSection';
import { FounderStorySection } from '../components/sections/FounderStorySection';
import { PhotoStripSection } from '../components/sections/PhotoStripSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { WeddingGallerySection } from '../components/sections/WeddingGallerySection';
import { Testimonials } from '../components/sections/Testimonials';
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

      {/* 3. Founder Story Section: Architects of Romance (With Video Placeholder & Modal) */}
      <FounderStorySection onOpenEnquiry={onOpenEnquiry} />

      {/* 4. Photo Collage Strip Section */}
      <PhotoStripSection />

      {/* 5. Services Section: Bespoke Planning For Your Special Day */}
      <ServicesSection onSelectService={() => onNavigate('services')} />

      {/* 6. Portfolio Section: Visualizing Your Dreams Into Reality */}
      <PortfolioSection
        onSelectProject={onSelectProject}
        onViewAll={() => onNavigate('portfolio')}
      />

      {/* 7. Wedding Gallery Section: Mosaic of Moments */}
      <WeddingGallerySection onOpenFullGallery={() => onNavigate('gallery')} />

      {/* 8. Feature Icons Grid Section */}
      <FeatureIconsSection />

      {/* 9. Our Commitment Section */}
      <CommitmentSection
        onExplorePackages={() => onNavigate('packages')}
        onOpenEnquiry={onOpenEnquiry}
      />

      {/* 10. Client Testimonials Section: Love Stories & Celebrations */}
      <Testimonials />

      {/* 11. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 12. Dark Container Section: Dubai Palace & Desert Weddings */}
      <DarkPalaceSection onOpenEnquiry={onOpenEnquiry} />

      {/* 13. FAQ Accordion Section */}
      <FAQSection onOpenEnquiry={onOpenEnquiry} />

      {/* 14. Newsletter Strip */}
      <NewsletterSection />
    </main>
  );
};
