import React from 'react';
import { Sparkles, Calendar, MessageCircle, Mail, MapPin } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#040e0a] text-slate-400 text-xs border-t border-amber-500/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-950">
          
          {/* Col 1: Institute Branding */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-400/40 flex items-center justify-center text-amber-400 text-xl font-cinzel">
                ॐ
              </div>
              <div>
                <span className="font-cinzel text-base font-bold text-white tracking-wider block">
                  GYAN JYOTHI
                </span>
                <span className="text-[10px] text-amber-400/90 tracking-widest uppercase block font-medium">
                  School of Occult Science
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light max-w-sm">
              Dedicated to authentic Indian Vedic Numerology, Grapho-Numerology, Name & Mobile Corrections, and Vastu Shastra under the personal direct guidance of founder <strong className="text-white">Gopinath D S</strong>.
            </p>

            <div className="pt-2">
              <span className="font-cinzel text-amber-300/80 text-sm italic block">
                &ldquo;Align Your Numbers, Align Your Life&rdquo;
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider text-amber-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-amber-300 transition-colors"
                >
                  ABOUT US
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-amber-300 transition-colors"
                >
                  SERVICES
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book-appointment')}
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5"
                >
                  <span>BOOK APPOINTMENT</span>
                  <span className="text-[9px] bg-amber-500 text-black px-1.5 py-0.2 rounded font-bold">
                    PRIORITY
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('store')}
                  className="hover:text-amber-300 transition-colors"
                >
                  STORE
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  CONTACT US
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold text-white uppercase tracking-wider text-amber-300">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <p className="text-white font-medium">
                Founder: {OWNER_CONTACT.name}
              </p>
              <a
                href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {OWNER_CONTACT.phone}</span>
              </a>
              <a
                href={`mailto:${OWNER_CONTACT.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Email: {OWNER_CONTACT.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{OWNER_CONTACT.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('book-appointment')}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-black font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment Enquiry</span>
              </button>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-3 text-[11px] text-slate-500 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} {OWNER_CONTACT.school}. All rights reserved.
          </p>
          <p className="max-w-xl text-center sm:text-right">
            Notice: Submitting a form on this website is an appointment enquiry. Your appointment will be confirmed only after our team contacts you. No online payment gateway is used.
          </p>
        </div>

      </div>
    </footer>
  );
};
