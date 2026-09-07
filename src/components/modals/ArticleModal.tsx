import React from 'react';
import { X, Calendar, Clock, ArrowLeft } from 'lucide-react';
import type { JournalArticle } from '../../data/journalData';


interface ArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
  onOpenEnquiry: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onOpenEnquiry
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <div className="bg-[#FAF7F2] text-[#262822] w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-[#C8C0B5] shadow-2xl relative p-6 md:p-12 space-y-8">
        
        {/* Header Actions */}
        <div className="flex justify-between items-center border-b border-[#C8C0B5]/40 pb-4">
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-[#7A8864] flex items-center space-x-2 hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO JOURNAL</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 border border-[#C8C0B5] text-[#262822] hover:bg-[#7A8864] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Meta */}
        <div className="space-y-4">
          <span className="micro-label text-[#7A8864]">{article.category}</span>
          <h1 className="font-serif text-3xl md:text-5xl font-light leading-tight text-[#262822]">
            {article.title}
          </h1>
          <div className="flex items-center space-x-6 text-xs text-[#262822]/60">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#7A8864]" />
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#7A8864]" />
              {article.readTime}
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-16/9 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Excerpt */}
        <p className="font-serif text-xl italic text-[#7A8864] leading-relaxed border-l-2 border-[#7A8864] pl-6 py-2">
          “{article.excerpt}”
        </p>

        {/* Body Paragraphs */}
        <div className="space-y-6 text-base text-[#262822]/90 leading-relaxed font-serif">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="pt-8 border-t border-[#C8C0B5]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-lg text-[#262822]">
              Planning an event in the United Arab Emirates?
            </p>
            <p className="text-xs text-[#7A8864] uppercase tracking-wider">
              CONSULT WITH LOVE DETAILS ATELIER
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenEnquiry();
            }}
            className="button-editorial px-6 py-3 bg-[#7A8864] text-white hover:bg-[#5C674A] transition-colors"
          >
            START A CONVERSATION
          </button>
        </div>

      </div>
    </div>
  );
};
