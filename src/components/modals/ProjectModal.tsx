import React from 'react';
import { X, Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import type { PortfolioProject } from '../../data/portfolioData';


interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenEnquiry
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] text-[#262822] w-full max-w-5xl max-h-[92vh] overflow-y-auto border border-[#C8C0B5] shadow-2xl relative">
        
        {/* Sticky Close Button */}
        <button
          onClick={onClose}
          className="sticky top-6 right-6 ml-auto z-10 p-3 bg-[#FAF7F2] border border-[#C8C0B5] text-[#262822] hover:bg-[#7A8864] hover:text-white transition-colors duration-300 flex items-center justify-center cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="-mt-14 p-6 md:p-12 space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <span className="micro-label text-[#7A8864]">
              {project.category} · {project.location}
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-light text-[#262822] leading-tight">
              {project.title}
            </h2>
            <p className="font-serif text-xl italic text-[#7A8864]">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Specs Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-[#C8C0B5]/40 text-xs">
            <div>
              <span className="micro-label text-[#C8C0B5] block mb-1">LOCATION</span>
              <span className="font-serif text-base text-[#262822] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#7A8864]" />
                {project.details.venue}
              </span>
            </div>
            <div>
              <span className="micro-label text-[#C8C0B5] block mb-1">SCALE</span>
              <span className="font-serif text-base text-[#262822] flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#7A8864]" />
                {project.guestCount}
              </span>
            </div>
            <div>
              <span className="micro-label text-[#C8C0B5] block mb-1">YEAR</span>
              <span className="font-serif text-base text-[#262822] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#7A8864]" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="micro-label text-[#C8C0B5] block mb-1">BOTANICAL DIRECTION</span>
              <span className="text-xs text-[#262822]/80 block">
                {project.details.floralDesign}
              </span>
            </div>
          </div>

          {/* Hero Main Image */}
          <div className="w-full aspect-16/9 overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Editorial Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-1 space-y-4">
              <h3 className="font-serif text-2xl text-[#7A8864] italic">
                The Narrative
              </h3>
              <p className="text-sm text-[#262822]/80 leading-relaxed font-light">
                {project.summary}
              </p>
            </div>
            <div className="md:col-span-2">
              <p className="text-base text-[#262822]/90 leading-relaxed font-serif text-justify">
                {project.storyNarrative}
              </p>
            </div>
          </div>

          {/* Image Sequence / Masonry Gallery */}
          <div className="space-y-8">
            <h3 className="micro-label text-[#7A8864] border-b border-[#C8C0B5]/40 pb-3">
              EDITORIAL GALLERY & ATMOSPHERE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, idx) => (
                <div
                  key={idx}
                  className={`overflow-hidden ${
                    idx % 3 === 0 ? 'md:col-span-2 aspect-21/9' : 'aspect-4/3'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} detail ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps CTA */}
          <div className="bg-[#7A8864] text-[#FAF7F2] p-8 md:p-12 text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-light">
              Desiring a Celebration of Similar Elevation?
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5BC]">
              BESPOKE EVENT PLANNING & ART DIRECTION · DUBAI & WORLDWIDE
            </p>
            <div>
              <button
                onClick={() => {
                  onClose();
                  onOpenEnquiry();
                }}
                className="button-editorial px-8 py-3.5 bg-[#FAF7F2] text-[#262822] hover:bg-[#E5D5BC] transition-colors inline-flex items-center space-x-2"
              >
                <span>BEGIN YOUR CELEBRATION ENQUIRY</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
