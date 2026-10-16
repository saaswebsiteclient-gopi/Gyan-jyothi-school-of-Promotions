import React from 'react';
import { Award, BookOpen, Shield, Users, CheckCircle2, Calendar, Phone, Mail, Sparkles, TrendingUp } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface AboutSectionProps {
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#05110c] relative border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-900/40 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Vedic Lineage & Modern Precision</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            About Gyan Jyothi School of Occult Science
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Bridging ancient Indian Vedic mysticism with real-world practical strategy to empower individuals, entrepreneurs, and families.
          </p>
        </div>

        {/* Founder Spotlight: The Dual Facet of Gopinath D S */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left: The Two Personas Cards (Vedic + Strategic) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Persona 1: Vedic Occult Master */}
            <div className="bg-gradient-to-br from-[#0c2e22] to-[#061812] rounded-2xl p-6 border border-amber-500/40 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-amber-500 text-black font-bold text-[10px] uppercase tracking-wider rounded-bl-xl font-cinzel">
                Vedic Heritage
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-center justify-center text-amber-400 text-3xl font-cinzel flex-shrink-0">
                  ॐ
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    GOPINATH D S
                  </h3>
                  <p className="text-xs text-amber-300 font-medium">
                    Certified Numerologist & Occult Researcher
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    &ldquo;Align Your Numbers, Align Your Life&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Trained in authentic Indian Vedic numerology, Chaldean alphabet harmonics, Loshu grid balancing, and Vastu Shastra. Dedicated to removing life blockages with genuine cosmic remedies.
              </p>
            </div>

            {/* Persona 2: Strategic Business Advisor */}
            <div className="bg-gradient-to-br from-[#0a231b] to-[#071711] rounded-2xl p-6 border border-emerald-600/30 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-wider rounded-bl-xl font-cinzel">
                Strategic Advisor
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-400/40 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-cinzel text-lg font-bold text-white">
                    Corporate & Business Numerology
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">
                    Executive Strategy & Growth Consulting
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    &ldquo;Better Plans, Bigger Dreams&rdquo;
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                Advising startup founders, executives, and commercial business leaders on brand naming, launch dates, partnership compatibility, and lucky phone/account numbers.
              </p>
            </div>

          </div>

          {/* Right: Detailed Institute Philosophy & Founder Message */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                Authentic Consultations Grounded in Truth & Compassion
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                At <strong className="text-amber-300">Gyan Jyothi School of Occult Science</strong>, we reject automated computerized printouts and fear-based predictions. Every consultation is conducted by founder <strong className="text-white">Gopinath D S</strong> through deep mathematical examination of your birth date, name frequencies, and living spaces.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Whether you are seeking clarity regarding career stagnation, marriage compatibility, business expansion, signature redesign, or Vastu energy corrections, our objective is to provide actionable, easy-to-implement remedial guidance that restores your natural planetary equilibrium.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#092219] border border-emerald-800/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider">
                  <Shield className="w-4 h-4 text-amber-400" />
                  <span>100% Confidentiality</span>
                </div>
                <p className="text-xs text-slate-300">
                  Your birth data, private life questions, and family matters remain strictly private.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#092219] border border-emerald-800/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Ethical Practice</span>
                </div>
                <p className="text-xs text-slate-300">
                  No costly superstitious rituals. Practical remedies rooted in sound vibration, colors, and yantras.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#092219] border border-emerald-800/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Personalized 1-on-1</span>
                </div>
                <p className="text-xs text-slate-300">
                  Every session is dedicated time directly with Gopinath D S to address your individual destiny matrix.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#092219] border border-emerald-800/40 space-y-1.5">
                <div className="flex items-center gap-2 text-amber-300 font-semibold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span>Vedic Lineage</span>
                </div>
                <p className="text-xs text-slate-300">
                  Pure adherence to classical Vedic principles combined with modern grapho-numerology.
                </p>
              </div>
            </div>

            {/* Direct Action */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBookClick}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs tracking-wider uppercase shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Appointment with Gopinath D S</span>
              </button>

              <div className="flex items-center gap-4 text-xs text-slate-300 px-2 py-1">
                <span>Direct Contact:</span>
                <a
                  href={`tel:${OWNER_CONTACT.phone}`}
                  className="text-amber-400 hover:underline font-medium"
                >
                  {OWNER_CONTACT.phone}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
