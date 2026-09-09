import { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { WhatsAppWidget } from './components/layout/WhatsAppWidget';
import { CustomCursor } from './components/common/CustomCursor';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PackagesPage } from './pages/PackagesPage';
import { VenuesPage } from './pages/VenuesPage';
import { JournalPage } from './pages/JournalPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { ContactPage } from './pages/ContactPage';
import { GalleryPage } from './pages/GalleryPage';

import { ProjectModal } from './components/modals/ProjectModal';
import { ArticleModal } from './components/modals/ArticleModal';

import type { PortfolioProject } from './data/portfolioData';
import type { JournalArticle } from './data/journalData';
import { TopAnnouncementBar } from './components/layout/TopAnnouncementBar';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (_category: string = 'Weddings') => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-white text-[#212529] selection:bg-[#C9A96E]/30 selection:text-[#1F382B] relative font-sans flex flex-col justify-between overflow-x-hidden">
      {/* Luxury Custom Interactive Cursor */}
      <CustomCursor />

      {/* Top Announcement Bar */}
      <TopAnnouncementBar />

      {/* Global Navigation Header */}
      <Navigation
        currentTab={currentTab}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <div className="grow">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage onOpenEnquiry={() => handleOpenEnquiry('Weddings')} />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onOpenEnquiry={(category) => handleOpenEnquiry(category || 'Weddings')}
          />
        )}

        {currentTab === 'portfolio' && (
          <PortfolioPage
            onSelectProject={(project) => setSelectedProject(project)}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryPage
            onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentTab === 'packages' && (
          <PackagesPage onOpenEnquiry={() => handleOpenEnquiry('Full Service')} />
        )}

        {currentTab === 'venues' && (
          <VenuesPage onOpenEnquiry={() => handleOpenEnquiry('Venues')} />
        )}

        {currentTab === 'journal' && (
          <JournalPage
            onSelectArticle={(article) => setSelectedArticle(article)}
          />
        )}

        {currentTab === 'testimonials' && (
          <TestimonialsPage onOpenEnquiry={() => handleOpenEnquiry('Weddings')} />
        )}

        {currentTab === 'contact' && <ContactPage />}
      </div>

      {/* Global Minimal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
      />

      {/* Fixed WhatsApp Concierge Widget */}
      <WhatsAppWidget />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
      />
    </div>
  );
}

export default App;
