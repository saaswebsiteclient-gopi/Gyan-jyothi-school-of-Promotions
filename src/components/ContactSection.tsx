import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Calendar,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Globe
} from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface ContactSectionProps {
  onBookClick: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onBookClick }) => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#07130e] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/40 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Connect Directly</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Contact Institute & Founder
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            All appointment requests and consultation communications are managed directly by founder Gopinath D S. Reach out via WhatsApp or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Owner Profile Card (4 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0c2a20] to-[#071913] rounded-2xl p-6 sm:p-8 border border-amber-500/30 shadow-xl space-y-6">
            
            <div className="border-b border-amber-500/20 pb-5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 font-cinzel">
                Institute Head & Master Consultant
              </span>
              <h3 className="font-cinzel text-2xl font-black text-white mt-1">
                {OWNER_CONTACT.name}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                {OWNER_CONTACT.school}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              
              {/* WhatsApp Card */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061812] border border-emerald-800/50">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                    Official WhatsApp (Primary)
                  </span>
                  <a
                    href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 text-sm sm:text-base transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <span>{OWNER_CONTACT.phone}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                  <span className="block text-[10px] text-emerald-400 font-medium mt-0.5">
                    Recommended for fastest response
                  </span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061812] border border-emerald-800/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${OWNER_CONTACT.email}`}
                    className="font-bold text-white hover:text-amber-300 text-sm sm:text-base transition-colors block mt-0.5"
                  >
                    {OWNER_CONTACT.email}
                  </a>
                  <span className="block text-[10px] text-slate-400 mt-0.5">
                    For detailed documents and dossiers
                  </span>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061812] border border-emerald-800/50">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                    Consultation Hours
                  </span>
                  <span className="font-semibold text-white block mt-0.5">
                    {OWNER_CONTACT.workingHours}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">
                    Prior appointment request required
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#061812] border border-emerald-800/50">
                <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] text-slate-400 uppercase tracking-wider">
                    Location & Service Reach
                  </span>
                  <span className="font-semibold text-white block mt-0.5">
                    {OWNER_CONTACT.location}
                  </span>
                  <span className="block text-[10px] text-slate-400 mt-0.5">
                    In-person sessions in Bangalore & Worldwide online consultations
                  </span>
                </div>
              </div>

            </div>

            {/* Quick Action */}
            <button
              onClick={onBookClick}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Book Appointment Now</span>
            </button>

          </div>

          {/* Consultation Modes & FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="bg-[#0b241c] rounded-2xl p-6 sm:p-8 border border-emerald-800/60 shadow-xl space-y-6">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                How Consultations Are Conducted
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#071913] border border-emerald-700/40 space-y-2">
                  <div className="text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>Online Video / Audio (Worldwide)</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    High-definition private video call or WhatsApp audio session with digital screen-sharing of your birth matrix, Chaldean phonetic calculation, and remedies.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#071913] border border-emerald-700/40 space-y-2">
                  <div className="text-amber-300 font-bold text-xs uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>In-Person Sanctum Session</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Direct meeting in Bangalore with Gopinath D S for personalized chart review, signature blueprinting, and physical examination of floor plans or gems.
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-emerald-900/50 space-y-3">
                <h4 className="font-cinzel text-sm font-bold text-amber-300 uppercase tracking-wider">
                  Important Consultation Policies
                </h4>
                
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">1.</span>
                    <span><strong>Appointment Request Process:</strong> Fill out the booking form on this website or chat directly via WhatsApp.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">2.</span>
                    <span><strong>Confirmation:</strong> Our team connects with you directly to verify your timing preference. No slot is automatically booked.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">3.</span>
                    <span><strong>Privacy:</strong> We never sell, log, or publicly transmit your personal details or birth numbers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">4.</span>
                    <span><strong>Payments:</strong> We do not take automated online checkout payments on this website. All arrangements are finalized directly with the owner.</span>
                  </li>
                </ul>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-emerald-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-white">Have a quick question?</div>
                    <div className="text-[11px] text-slate-400">Owner responds to WhatsApp enquiries during working hours.</div>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${OWNER_CONTACT.rawPhone}?text=${encodeURIComponent('Hello Gopinath Sir, I have a quick question regarding Gyan Jyothi School of Occult Science.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors flex-shrink-0"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
