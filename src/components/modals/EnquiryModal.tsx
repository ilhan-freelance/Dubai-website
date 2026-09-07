import React, { useState } from 'react';
import { X, Send, CheckCircle2, Upload, MessageCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEventType?: string;
}

const AESTHETIC_STYLES = [
  { id: 'desert', label: 'Organic Desert Solstice', palette: ['#7A8864', '#E5D5BC', '#FAF7F2'] },
  { id: 'palace', label: 'Arabian Palace Heritage', palette: ['#E5BCA9', '#C8C0B5', '#FAF7F2'] },
  { id: 'waterfront', label: 'Modern Waterfront Minimal', palette: ['#C8C0B5', '#7A8864', '#262822'] },
  { id: 'couture', label: 'High Fashion Atelier Gala', palette: ['#262822', '#7A8864', '#E5D5BC'] }
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultEventType = 'Weddings'
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedAesthetic, setSelectedAesthetic] = useState(AESTHETIC_STYLES[0].id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: defaultEventType,
    preferredDate: '',
    guestCount: '100 - 250 Guests',
    location: 'Dubai, UAE',
    budgetRange: 'AED 300,000 - AED 600,000',
    vision: '',
    fileName: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#FAF7F2] text-[#262822] w-full max-w-3xl border border-[#C8C0B5] shadow-2xl relative p-6 md:p-12 my-auto"
      >
        
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2.5 border border-[#C8C0B5] text-[#262822] hover:bg-[#7A8864] hover:text-white transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-16 text-center space-y-6 animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 bg-[#7A8864]/10 text-[#7A8864] rounded-full flex items-center justify-center mx-auto border border-[#7A8864]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <span className="micro-label text-[#7A8864]">ENQUIRY RECEIVED</span>
            <h2 className="font-serif text-4xl text-[#262822] font-light">
              Thank You, {formData.name || 'Valued Client'}.
            </h2>
            <p className="font-serif text-lg text-[#262822]/80 max-w-lg mx-auto italic">
              “Our Atelier Producer will review your celebration details and connect with you within 24 hours.”
            </p>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={resetAndClose}
                className="button-editorial px-8 py-3.5 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-colors"
              >
                RETURN TO WEBSITE
              </button>
              <a
                href="https://wa.me/971500000000?text=Hello%20Love%20Details,%20I%20just%20submitted%20an%20enquiry."
                target="_blank"
                rel="noreferrer"
                className="button-editorial px-6 py-3.5 border border-[#C8C0B5] text-[#262822] hover:border-[#7A8864] inline-flex items-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#7A8864]" />
                <span>FAST-TRACK ON WHATSAPP</span>
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-2 max-w-xl">
              <span className="micro-label text-[#7A8864]">LOVE DETAILS ATELIER · DUBAI</span>
              <h2 className="font-serif text-3xl md:text-4xl font-light text-[#262822]">
                Tell Us About Your Celebration
              </h2>
              <p className="text-xs text-[#262822]/80 leading-relaxed font-light">
                Share key details regarding your event vision and target date. Our atelier producer will connect with you to curate a proposal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Interactive Aesthetic Style Selector */}
              <div className="space-y-3 bg-[#7A8864]/5 border border-[#7A8864]/30 p-4">
                <div className="flex items-center justify-between">
                  <span className="micro-label text-[#7A8864] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    CHOOSE YOUR DESIRED ATMOSPHERE & PALETTE
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {AESTHETIC_STYLES.map((style) => {
                    const isSelected = selectedAesthetic === style.id;
                    return (
                      <button
                        type="button"
                        key={style.id}
                        onClick={() => setSelectedAesthetic(style.id)}
                        className={`p-2.5 text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#FAF7F2] border-[#7A8864] shadow-xs'
                            : 'bg-transparent border-[#C8C0B5]/40 hover:border-[#7A8864]/60'
                        }`}
                      >
                        <span className="text-[11px] font-serif block leading-tight text-[#262822]">
                          {style.label}
                        </span>
                        <div className="flex space-x-1 mt-2">
                          {style.palette.map((c, i) => (
                            <span key={i} className="w-3 h-3 rounded-full border border-black/20" style={{ backgroundColor: c }} />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lady Victoria Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864] font-serif"
                  />
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="victoria@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">PHONE / WHATSAPP *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  />
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">EVENT CATEGORY</label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  >
                    <option value="Weddings">Wedding Celebration</option>
                    <option value="Destination Weddings">Destination Wedding UAE</option>
                    <option value="Corporate Events">Corporate Gala / Atelier</option>
                    <option value="Private Events">Private Soiree / Anniversary</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">PREFERRED DATE</label>
                  <input
                    type="text"
                    placeholder="e.g. October 2026"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  />
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">ESTIMATED GUESTS</label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  >
                    <option value="Under 50 Guests">Under 50 Guests (Intimate)</option>
                    <option value="50 - 150 Guests">50 - 150 Guests</option>
                    <option value="150 - 300 Guests">150 - 300 Guests</option>
                    <option value="300+ Guests">300+ Guests (Grand Gala)</option>
                  </select>
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2">TARGET BUDGET RANGE</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] px-4 py-3 text-sm focus:outline-none focus:border-[#7A8864]"
                  >
                    <option value="AED 150,000 - 300,000">AED 150k - 300k</option>
                    <option value="AED 300,000 - 600,000">AED 300k - 600k</option>
                    <option value="AED 600,000 - 1,200,000">AED 600k - 1.2M</option>
                    <option value="AED 1.2M+ Ultra-Luxury">AED 1.2M+ Ultra-Luxe</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="micro-label text-[#262822]/80 block mb-2">TELL US ABOUT YOUR VISION</label>
                <textarea
                  rows={4}
                  placeholder="Share details regarding your preferred venue, multi-day guest requirements, or aesthetic desires..."
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  className="w-full bg-[#FAF7F2] border border-[#C8C0B5] p-4 text-sm focus:outline-none focus:border-[#7A8864] font-serif"
                />
              </div>

              {/* Moodboard Attachment */}
              <div>
                <label className="micro-label text-[#262822]/80 block mb-2">
                  MOODBOARD / INSPIRATION ATTACHMENT (OPTIONAL)
                </label>
                <div className="border border-dashed border-[#C8C0B5] p-4 text-center cursor-pointer hover:border-[#7A8864] transition-colors relative bg-white/40">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <div className="flex items-center justify-center space-x-2 text-xs text-[#262822]/70">
                    <Upload className="w-4 h-4 text-[#7A8864]" />
                    <span>
                      {formData.fileName
                        ? `Attached: ${formData.fileName}`
                        : 'Click or drop moodboard PDF / image here'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-[#262822]/60 italic font-serif">
                  * Confidentiality assured under Love Details Atelier standards.
                </p>
                <button
                  type="submit"
                  className="w-full md:w-auto button-editorial px-8 py-4 bg-[#7A8864] text-[#FAF7F2] hover:bg-[#5C674A] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow-md"
                >
                  <span>SUBMIT BESPOKE ENQUIRY</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

      </motion.div>
    </div>
  );
};
