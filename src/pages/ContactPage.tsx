import React, { useState } from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle2, Upload, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components/common/AnimatedSection';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'Weddings',
    preferredDate: '',
    guestCount: '100 - 250 Guests',
    location: 'Dubai, UAE',
    budgetRange: 'AED 300,000 - AED 600,000',
    vision: '',
    fileName: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
  };

  return (
    <div className="pt-24 pb-28 bg-[#FAF8F6] text-[#262822] overflow-hidden">
      
      {/* ── PAGE HERO SECTION WITH HERO IMAGE ── */}
      <section className="relative max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-8 pb-12 space-y-10">
        <div className="absolute top-10 right-10 w-96 h-96 bg-[#7A8864]/10 rounded-full filter blur-3xl pointer-events-none" />

        <AnimatedSection direction="up">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full bg-[#7A8864]/10 border border-[#7A8864]/25 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#7A8864]" />
              <span className="micro-label text-[#7A8864] tracking-[0.3em]">
                GET IN TOUCH · ATELIER COMMISSION
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-[#262822] leading-[1.15] tracking-tight">
              Tell Us About Your <br />
              <span className="italic text-[#7A8864]">Celebration.</span>
            </h1>
            
            <p className="text-base sm:text-xl text-[#262822]/80 max-w-3xl font-serif leading-relaxed border-l-2 border-[#7A8864]/40 pl-6 py-1">
              We accept a strictly limited number of wedding and event commissions each year to ensure uncompromising artistic direction and personal producer care.
            </p>
          </div>
        </AnimatedSection>

        {/* Hero Image Banner */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="w-full aspect-21/9 rounded-3xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl relative group bg-[#1A1C18]">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero_contact_atelier.png"
              alt="Love Details Dubai Atelier Consultation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#946B00] flex items-center space-x-2 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A8864] animate-pulse" />
              <span>CONFIDENTIAL CONSULTATION</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-white gap-2 text-xs font-serif italic">
              <span className="bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20">
                Jumeira Bay & Downtown Atelier Office, Dubai
              </span>
              <span className="text-[#E5D5BC] bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                Global Video Consultation Available
              </span>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── MAIN GRID: LEFT INFO & RIGHT QUESTIONNAIRE FORM ── */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Atelier Contact Details Card - 4 cols */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#C8C0B5]/60 p-8 space-y-8 shadow-xl lg:sticky lg:top-32">
            <div className="space-y-2">
              <span className="micro-label text-[#7A8864] tracking-[0.2em] font-bold">DUBAI ATELIER HEADQUARTERS</span>
              <h2 className="font-serif text-3xl font-light text-[#262822]">
                Love Details
              </h2>
              <p className="text-xs text-[#262822]/75 leading-relaxed font-sans">
                Private appointments available at our Dubai office and via video conference for international clients worldwide.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#C8C0B5]/40 text-xs text-[#262822]/85 font-sans">
              <div className="flex items-start space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#C8C0B5]/30">
                <MapPin className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#262822]">Location</span>
                  <span>Jumeira Bay & Downtown Atelier, Dubai, UAE</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#C8C0B5]/30">
                <Mail className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#262822]">Direct Email</span>
                  <span>enquiries@lovedetails.ae</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-[#FAF7F2] p-3 rounded-xl border border-[#C8C0B5]/30">
                <Phone className="w-4 h-4 text-[#7A8864] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-[#262822]">Telephone / Concierge</span>
                  <span>+971 4 000 0000</span>
                </div>
              </div>
            </div>

            {/* Fast WhatsApp Direct Card */}
            <div className="bg-gradient-to-br from-[#7A8864] to-[#5C674A] text-white p-6 rounded-2xl space-y-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-[#E5D5BC]" />
                <span className="micro-label text-[#E5D5BC] tracking-[0.2em] font-bold">WHATSAPP DIRECT CONCIERGE</span>
              </div>
              <p className="text-xs text-white/90 leading-relaxed font-sans">
                Need an immediate response regarding UAE venue availability or urgent date hold?
              </p>
              <a
                href="https://wa.me/971500000000?text=Hello%20Love%20Details,%20I%20would%20like%20to%20enquire%20about%20event%20planning."
                target="_blank"
                rel="noreferrer"
                className="button-editorial px-5 py-3 bg-white text-[#262822] hover:bg-[#FAF7F2] transition-colors rounded-full font-bold text-xs inline-block text-center w-full shadow-md"
              >
                CHAT ON WHATSAPP NOW
              </a>
            </div>

            {/* Non-Disclosure Guarantee */}
            <div className="flex items-center space-x-2 text-[11px] text-[#262822]/60 font-serif italic pt-2">
              <ShieldCheck className="w-4 h-4 text-[#7A8864]" />
              <span>Full Privacy & Non-Disclosure Compliant</span>
            </div>
          </div>

          {/* Form - 8 cols */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#C8C0B5]/60 p-8 md:p-12 shadow-xl">
            {submitted ? (
              <div className="py-20 text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 bg-[#7A8864]/10 text-[#7A8864] rounded-full flex items-center justify-center mx-auto border border-[#7A8864]/30 shadow-md">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <span className="micro-label text-[#7A8864] tracking-[0.3em] font-bold">ENQUIRY RECEIVED</span>
                <h2 className="font-serif text-4xl text-[#262822] font-light">
                  Thank You, {formData.name || 'Valued Client'}.
                </h2>
                <p className="font-serif text-lg text-[#262822]/85 max-w-lg mx-auto italic leading-relaxed">
                  “Our Atelier Producer will review your submission and connect with you within 24 hours to schedule your private consultation.”
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="button-editorial px-8 py-3.5 bg-[#7A8864] text-white rounded-full text-xs font-bold shadow-md"
                  >
                    SUBMIT ANOTHER QUESTIONNAIRE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-[#C8C0B5]/40 pb-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#262822]">
                    Bespoke Consultation Questionnaire
                  </h2>
                  <p className="text-xs text-[#262822]/70 font-sans mt-1">
                    Please provide initial details regarding your celebration.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Victoria Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20 font-serif"
                    />
                  </div>

                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="victoria@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20"
                    />
                  </div>

                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">EVENT CATEGORY</label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20 font-sans"
                    >
                      <option value="Weddings">Weddings</option>
                      <option value="Destination Weddings">Destination Wedding UAE</option>
                      <option value="Corporate Events">Corporate Gala / Brand Atelier</option>
                      <option value="Private Events">Private Celebration</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">PREFERRED DATE</label>
                    <input
                      type="text"
                      placeholder="e.g. November 2026"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20"
                    />
                  </div>

                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">ESTIMATED GUESTS</label>
                    <select
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20 font-sans"
                    >
                      <option value="Under 50 Guests">Under 50 Guests</option>
                      <option value="50 - 150 Guests">50 - 150 Guests</option>
                      <option value="150 - 300 Guests">150 - 300 Guests</option>
                      <option value="300+ Guests">300+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="micro-label text-[#262822]/80 block mb-2 font-bold">ESTIMATED BUDGET</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20 font-sans"
                    >
                      <option value="AED 150,000 - 300,000">AED 150k - 300k</option>
                      <option value="AED 300,000 - 600,000">AED 300k - 600k</option>
                      <option value="AED 600,000 - 1,200,000">AED 600k - 1.2M</option>
                      <option value="AED 1.2M+ Ultra-Luxe">AED 1.2M+ Ultra-Luxe</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2 font-bold font-serif">TELL US ABOUT YOUR VISION</label>
                  <textarea
                    rows={5}
                    placeholder="Share preferred aesthetics, venue desires, or specific guest requirements..."
                    value={formData.vision}
                    onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                    className="w-full bg-[#FAF7F2] border border-[#C8C0B5] rounded-xl p-4 text-sm focus:outline-none focus:border-[#7A8864] focus:ring-2 focus:ring-[#7A8864]/20 font-serif"
                  />
                </div>

                <div>
                  <label className="micro-label text-[#262822]/80 block mb-2 font-bold font-serif">
                    MOODBOARD / INSPIRATION ATTACHMENT (OPTIONAL)
                  </label>
                  <div className="border border-dashed border-[#C8C0B5] rounded-2xl p-6 text-center cursor-pointer hover:border-[#7A8864] transition-colors relative bg-[#FAF7F2]">
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center space-x-2 text-xs text-[#262822]/80 font-sans">
                      <Upload className="w-5 h-5 text-[#7A8864]" />
                      <span>
                        {formData.fileName
                          ? `Attached: ${formData.fileName}`
                          : 'Click or drop moodboard file (PDF / JPG / PNG)'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#C8C0B5]/40">
                  <p className="text-[11px] text-[#262822]/60 italic font-serif">
                    Strict privacy assured under Love Details Atelier standards.
                  </p>
                  <button
                    type="submit"
                    className="w-full md:w-auto button-editorial px-9 py-4 bg-[#7A8864] text-white hover:bg-[#5C674A] transition-all rounded-full flex items-center justify-center space-x-3 font-bold text-xs shadow-lg cursor-pointer hover:scale-[1.02]"
                  >
                    <span>SEND CONSULTATION QUESTIONNAIRE</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
