import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';
import { OWNER_CONTACT } from '../data/store';

interface FloatingMobileBarProps {
  onBookClick: () => void;
}

export const FloatingMobileBar: React.FC<FloatingMobileBarProps> = ({ onBookClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#061812]/95 backdrop-blur-md border-t border-amber-500/30 p-2.5 sm:hidden shadow-2xl flex items-center gap-2">
      <a
        href={`https://wa.me/${OWNER_CONTACT.rawPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wide flex items-center justify-center gap-1.5 transition-colors border border-emerald-500/40"
      >
        <MessageCircle className="w-4 h-4" />
        <span>WhatsApp</span>
      </a>

      <button
        onClick={onBookClick}
        className="flex-[1.8] py-2.5 px-3 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-1.5 border border-amber-300"
      >
        <Calendar className="w-4 h-4 text-black" />
        <span>Book Appointment</span>
      </button>
    </div>
  );
};
