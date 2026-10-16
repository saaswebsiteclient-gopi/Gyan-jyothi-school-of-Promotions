import React from 'react';
import { Send, PhoneCall, Sparkles, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

export const WorkflowSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Appointment Request',
      actor: 'Visitor / Client',
      icon: Send,
      description: 'You fill out the consultation booking form with your contact details, preferred timing, and consultation topic.',
      highlight: 'No payment needed at this stage'
    },
    {
      step: '02',
      title: 'Owner Receives Enquiry',
      actor: 'Direct WhatsApp Delivery',
      icon: MessageCircle,
      description: `Your appointment request delivers directly to founder GOPINATH D S at +91 9180275136 via prefilled WhatsApp click-to-chat.`,
      highlight: 'Instant, private direct message'
    },
    {
      step: '03',
      title: 'Owner Contacts Customer',
      actor: 'Gopinath D S Team',
      icon: PhoneCall,
      description: 'Our institute team reviews your birth matrix and connects with you to mutually confirm your appointment slot and consultation mode.',
      highlight: 'Personal confirmation call / chat'
    },
    {
      step: '04',
      title: '1-on-1 Consultation Session',
      actor: 'Deep Analysis & Guidance',
      icon: Sparkles,
      description: 'Engage in a thorough, confidential consultation session with Gopinath D S to receive precise planetary diagnosis, remedies, and direction.',
      highlight: 'Optional sacred remedies discussed'
    }
  ];

  return (
    <section className="py-16 bg-[#061812] border-y border-emerald-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-cinzel text-amber-400 font-bold tracking-widest bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
            Transparent Workflow
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3">
            How Your Appointment Enquiry Works
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 font-light">
            Simple, personal, and reliable. No automatic bots or mysterious algorithms.
          </p>
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#09241a] rounded-2xl p-6 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-cinzel text-2xl font-black text-amber-400/40">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">
                    {item.actor}
                  </span>

                  <h3 className="font-cinzel text-base font-bold text-white mt-1">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-900/50">
                  <span className="text-[10px] text-amber-300/80 font-medium bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 inline-block">
                    ✓ {item.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Subsequent Follow-up Notice */}
        <div className="mt-10 p-4 rounded-xl bg-[#081e15] border border-amber-500/30 max-w-3xl mx-auto text-center space-y-1">
          <p className="text-xs sm:text-sm text-slate-200">
            <strong className="text-amber-300">Consultation Discussion → Optional Store Purchase Enquiry:</strong>
          </p>
          <p className="text-xs text-slate-400">
            During your consultation, should you require energized yantras, custom destiny chart reports, or sacred rudrakshas, they can be discussed directly with Gopinath D S. Store purchases are arranged manually with zero automated checkout pressure.
          </p>
        </div>

      </div>
    </section>
  );
};
