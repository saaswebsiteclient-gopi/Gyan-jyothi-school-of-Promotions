import React from 'react';
import { Calendar, Compass, ShieldCheck, Star, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-radial-vignette">
      {/* Background Sacred Geometric Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-15 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Message & Calls to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Vedic Institute Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-amber-400/30 text-amber-300 text-xs font-medium shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Gyan Jyothi School of Occult Science</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="text-slate-300">Vedic Numerology & Vastu</span>
            </div>

            {/* MANDATORY HEADLINE */}
            <h1 className="font-cinzel text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight leading-[1.15] text-white">
              Discover Your Numbers.{' '}
              <span className="text-gold-gradient block mt-1">
                Book Your Numerology Consultation.
              </span>
            </h1>

            {/* Subtitle explaining the depth & personal guidance of Gopinath D S */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Your date of birth, name, and phone number carry sacred frequencies shaping your career, finances, relationships, and destiny. Gain direct, 1-on-1 personalized guidance with founder and certified numerologist{' '}
              <strong className="text-amber-300 font-semibold">Gopinath D S</strong>.
            </p>

            {/* MANDATORY BUTTONS:
                Primary Button: BOOK APPOINTMENT
                Secondary Button: EXPLORE OUR SERVICES */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onBookClick}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-amber-300 flex items-center justify-center gap-3 ring-4 ring-amber-400/20"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>

              <button
                onClick={onExploreClick}
                className="px-6 py-4 rounded-xl bg-emerald-950/80 hover:bg-emerald-900/80 text-amber-200 hover:text-white font-bold text-sm tracking-wider uppercase border border-amber-500/40 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2 shadow-md"
              >
                <Compass className="w-4 h-4 text-amber-400" />
                <span>EXPLORE OUR SERVICES</span>
              </button>
            </div>

            {/* Direct WhatsApp Quick-Connect & Trust Row */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-emerald-900/40">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Confidential Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Direct 1-on-1 with Gopinath D S</span>
              </div>
              <a
                href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quick WhatsApp: +91 9180275136</span>
              </a>
            </div>

          </div>

          {/* Right Column: Founder & Institute Profile Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow Border */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/30 via-emerald-500/30 to-amber-400/40 rounded-2xl blur-lg opacity-70"></div>
              
              <div className="relative bg-[#0b241c] border border-amber-400/40 rounded-2xl p-6 sm:p-7 shadow-2xl overflow-hidden">
                
                {/* Spiritual Header Pill */}
                <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
                    <span className="text-xs uppercase tracking-widest text-amber-300 font-bold font-cinzel">
                      Certified Master Numerologist
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    Bangalore, India
                  </span>
                </div>

                {/* Profile Portrait Presentation */}
                <div className="mt-5 space-y-4">
                  <div className="relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0f382c] to-[#061a14] p-4 border border-amber-500/30">
                    
                    {/* Visual Emblem of the Founder Gopinath D S */}
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-amber-400/80 bg-gradient-to-br from-amber-400/30 via-[#0a2920] to-emerald-900 p-1 flex-shrink-0 shadow-lg relative">
                        <div className="w-full h-full rounded-full bg-[#082017] flex flex-col items-center justify-center text-center p-1">
                          <span className="font-cinzel font-bold text-amber-300 text-lg leading-tight">ॐ</span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-300 font-medium">GOPINATH</span>
                          <span className="text-[8px] text-amber-400 font-bold">NUMEROLOGY</span>
                        </div>
                        {/* Verified badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-xs shadow">
                          ✓
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                          Institute Founder & Guide
                        </div>
                        <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
                          GOPINATH D S
                        </h3>
                        <p className="text-xs text-slate-300">
                          Occult Scientist • Vedic Numerology • Vastu Specialist
                        </p>
                      </div>
                    </div>

                    {/* Vedic Numerology Matrix (1 to 9 Planets) */}
                    <div className="mt-4 pt-3 border-t border-amber-500/20">
                      <div className="text-[11px] text-amber-300/90 font-medium mb-2 flex items-center justify-between">
                        <span>Vedic Planetary Numbers Grid</span>
                        <span className="text-[10px] text-slate-400">Sun (1) to Mars (9)</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 text-center font-cinzel text-xs font-bold">
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          3 <span className="block text-[8px] font-sans font-normal text-slate-400">Guru</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          1 <span className="block text-[8px] font-sans font-normal text-slate-400">Surya</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          9 <span className="block text-[8px] font-sans font-normal text-slate-400">Mangal</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          6 <span className="block text-[8px] font-sans font-normal text-slate-400">Shukra</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-400/60 bg-amber-500/10 text-amber-200">
                          5 <span className="block text-[8px] font-sans font-normal text-amber-400">Budha</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          7 <span className="block text-[8px] font-sans font-normal text-slate-400">Ketu</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          2 <span className="block text-[8px] font-sans font-normal text-slate-400">Chandra</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          8 <span className="block text-[8px] font-sans font-normal text-slate-400">Shani</span>
                        </div>
                        <div className="bg-[#071711] py-1.5 rounded border border-amber-500/20 text-amber-300 hover:border-amber-400 transition-colors">
                          4 <span className="block text-[8px] font-sans font-normal text-slate-400">Rahu</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Motto Quote from User Image: Align Your Numbers, Align Your Life */}
                  <div className="bg-emerald-950/60 rounded-xl p-3.5 border border-emerald-700/40 text-center">
                    <p className="font-cinzel text-amber-300 text-xs sm:text-sm font-semibold tracking-wider">
                      &ldquo;Align Your Numbers, Align Your Life&rdquo;
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Personal Consultations • Name Tuning • Career & Business Strategy
                    </p>
                  </div>

                  {/* Immediate Action inside Card */}
                  <button
                    onClick={onBookClick}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-xs tracking-wider uppercase shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Your Consultation Slot</span>
                  </button>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
