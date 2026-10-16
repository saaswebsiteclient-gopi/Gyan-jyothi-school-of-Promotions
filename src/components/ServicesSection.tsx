import React from 'react';
import {
  Compass,
  Sparkles,
  PenTool,
  Smartphone,
  Award,
  Activity,
  Home,
  HelpCircle,
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { CONSULTATION_SERVICES } from '../data/services';
import { ConsultationType } from '../types';

interface ServicesSectionProps {
  onSelectServiceForBooking: (type: ConsultationType) => void;
}

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Compass,
  Sparkles,
  PenTool,
  Smartphone,
  Award,
  Activity,
  Home,
  HelpCircle
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking
}) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#071711] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider font-cinzel">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Consultation Disciplines</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Our Numerology & Occult Services
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Choose from specialized consultation categories conducted directly with founder Gopinath D S. Select any service to request your appointment slot.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONSULTATION_SERVICES.map((service) => {
            const IconComponent = ICON_MAP[service.iconName] || Sparkles;

            return (
              <div
                key={service.id}
                className="bg-[#0b261c] rounded-2xl border border-emerald-800/60 p-6 flex flex-col justify-between hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 group"
              >
                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-emerald-900/50 border border-amber-400/40 flex items-center justify-center text-amber-300 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-700/50">
                      1-on-1 Guidance
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-amber-300/80 font-medium mt-1">
                    {service.subtitle}
                  </p>

                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Benefits */}
                  <div className="mt-4 pt-3 border-t border-emerald-900/50 space-y-1.5">
                    {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Info & Action */}
                <div className="mt-6 pt-4 border-t border-emerald-900/40">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      {service.duration}
                    </span>
                    <span className="text-slate-400">Direct Session</span>
                  </div>

                  <button
                    onClick={() => onSelectServiceForBooking(service.type)}
                    className="w-full py-2.5 rounded-lg bg-emerald-900/60 hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-400 hover:text-black text-amber-300 font-bold text-xs uppercase tracking-wider border border-amber-500/30 hover:border-amber-300 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Consultation Note */}
        <div className="mt-12 text-center bg-[#05140e] p-6 rounded-2xl border border-amber-500/20 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-cinzel text-base font-bold text-white">
              Need advice on which consultation is right for you?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Select &ldquo;General Enquiry&rdquo; in the appointment form to discuss your questions directly with Gopinath D S.
            </p>
          </div>
          <button
            onClick={() => onSelectServiceForBooking('General Enquiry')}
            className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider transition-colors flex-shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-black" />
            <span>Select General Enquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
};
