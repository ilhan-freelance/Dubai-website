import { useState, useEffect } from 'react';
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

const VALID_TABS = ['home', 'about', 'services', 'portfolio', 'gallery', 'packages', 'venues', 'journal', 'testimonials', 'contact'];

function getTabFromHash(): string {
  const hash = window.location.hash.replace('#', '').trim().toLowerCase();
  return VALID_TABS.includes(hash) ? hash : 'home';
}

export function App() {
  const [currentTab, setCurrentTab] = useState<string>(getTabFromHash);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  // Sync state with browser History & Back/Forward buttons
  useEffect(() => {
    // Replace initial state so initial entry has history state
    const initialTab = getTabFromHash();
    window.history.replaceState({ tab: initialTab }, '', `#${initialTab}`);

    const handlePopState = (event: PopStateEvent) => {
      // Close open modals on back button if any
      setSelectedProject(null);
      setSelectedArticle(null);

      // Determine target tab from popstate or hash
      const targetTab = event.state?.tab || getTabFromHash();
      setCurrentTab(targetTab);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (tab: string) => {
    if (tab !== currentTab) {
      window.history.pushState({ tab }, '', `#${tab}`);
      setCurrentTab(tab);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProject = (project: PortfolioProject | null) => {
    if (project) {
      window.history.pushState({ modal: 'project', tab: currentTab }, '');
    }
    setSelectedProject(project);
  };

  const handleSelectArticle = (article: JournalArticle | null) => {
    if (article) {
      window.history.pushState({ modal: 'article', tab: currentTab }, '');
    }
    setSelectedArticle(article);
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
            onSelectProject={handleSelectProject}
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
            onSelectProject={handleSelectProject}
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
            onSelectArticle={handleSelectArticle}
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
        onClose={() => {
          setSelectedProject(null);
        }}
        onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => {
          setSelectedArticle(null);
        }}
        onOpenEnquiry={() => handleOpenEnquiry('Weddings')}
      />
    </div>
  );
}

export default App;
