import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, Star, HelpCircle } from 'lucide-react';

interface DriverCalculatorProps {
  onSelectNumberForBooking: (dobString: string, driverNumber: number) => void;
}

interface PlanetProfile {
  name: string;
  ruler: string;
  element: string;
  gem: string;
  luckyDays: string;
  traits: string;
}

const PLANETS: Record<number, PlanetProfile> = {
  1: {
    name: 'Surya (The Sun)',
    ruler: 'Leadership, Authority & Vitality',
    element: 'Fire',
    gem: 'Ruby (Manikya)',
    luckyDays: 'Sunday & Monday',
    traits: 'Natural born leader, visionary, ambitious, and authoritative. Thrives in entrepreneurship and executive roles.'
  },
  2: {
    name: 'Chandra (The Moon)',
    ruler: 'Intuition, Emotion & Harmony',
    element: 'Water',
    gem: 'Pearl (Moti)',
    luckyDays: 'Monday & Sunday',
    traits: 'Imaginative, diplomatic, deeply intuitive, and artistic. Best in counseling, creative arts, and partnerships.'
  },
  3: {
    name: 'Guru (Jupiter)',
    ruler: 'Wisdom, Knowledge & Expansion',
    element: 'Ether / Fire',
    gem: 'Yellow Sapphire (Pukhraj)',
    luckyDays: 'Thursday & Tuesday',
    traits: 'Philosophical, mentor spirit, optimistic, and spiritual seeker. Flourishes in education, finance, and advisory.'
  },
  4: {
    name: 'Rahu (North Node)',
    ruler: 'Unconventional Wisdom & Modern Tech',
    element: 'Air',
    gem: 'Hessonite (Gomed)',
    luckyDays: 'Saturday & Wednesday',
    traits: 'Revolutionary thinker, practical, tech-oriented, and resilient against sudden shifts. Loves innovation.'
  },
  5: {
    name: 'Budha (Mercury)',
    ruler: 'Communication, Commerce & Adaptability',
    element: 'Earth',
    gem: 'Emerald (Panna)',
    luckyDays: 'Wednesday & Friday',
    traits: 'Quick-witted, versatile, excellent communicator, and business savvy. Dominates trade, media, and marketing.'
  },
  6: {
    name: 'Shukra (Venus)',
    ruler: 'Luxury, Aesthetics, Love & Prosperity',
    element: 'Water / Earth',
    gem: 'Diamond / White Zircon',
    luckyDays: 'Friday & Tuesday',
    traits: 'Magnetic charisma, appreciation for fine arts, luxury, and family bliss. Successful in hospitality, design, and luxury goods.'
  },
  7: {
    name: 'Ketu (South Node)',
    ruler: 'Spiritual Research, Occult & Deep Mysticism',
    element: 'Water / Fire',
    gem: "Cat's Eye (Lehsunia)",
    luckyDays: 'Tuesday & Thursday',
    traits: 'Deep researcher, mystical intuition, independent thinker, and spiritual healer. Excels in analysis, occult, and philosophy.'
  },
  8: {
    name: 'Shani (Saturn)',
    ruler: 'Karma, Discipline, Endurance & Real Estate',
    element: 'Air / Earth',
    gem: 'Blue Sapphire (Neelam)',
    luckyDays: 'Saturday & Wednesday',
    traits: 'Tenacious, patient, strong sense of justice, and built for massive long-term empires. Thrives in industry, law, and land.'
  },
  9: {
    name: 'Mangal (Mars)',
    ruler: 'Courage, Energy, Drive & Humanitarianism',
    element: 'Fire',
    gem: 'Red Coral (Moonga)',
    luckyDays: 'Tuesday & Sunday',
    traits: 'Dynamic, courageous, high stamina, protective, and passionate about righteous causes. Thrives in sports, defense, and management.'
  }
};

function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = num
      .toString()
      .split('')
      .reduce((sum, d) => sum + parseInt(d, 10), 0);
  }
  return num;
}

export const DriverCalculator: React.FC<DriverCalculatorProps> = ({ onSelectNumberForBooking }) => {
  const [day, setDay] = useState<string>('15');
  const [month, setMonth] = useState<string>('8');
  const [year, setYear] = useState<string>('1990');
  const [calculated, setCalculated] = useState<boolean>(true);

  // Calculate Driver (Moolank) and Conductor (Bhagyank)
  const dayNum = parseInt(day, 10) || 1;
  const monthNum = parseInt(month, 10) || 1;
  const yearNum = parseInt(year, 10) || 2000;

  const driverNumber = reduceToSingleDigit(dayNum);
  
  // Full date sum
  const fullSum = dayNum + monthNum + yearNum;
  const conductorNumber = reduceToSingleDigit(fullSum);

  const profile = PLANETS[driverNumber] || PLANETS[1];

  const handleBookWithNumbers = () => {
    const formattedDob = `${year.padStart(4, '2000')}-${month.padStart(2, '01')}-${day.padStart(2, '01')}`;
    onSelectNumberForBooking(formattedDob, driverNumber);
  };

  return (
    <section className="py-12 bg-[#061812] border-y border-amber-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0a271e] via-[#0c3125] to-[#0a271e] rounded-2xl border border-amber-500/30 p-6 sm:p-8 shadow-xl">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs uppercase font-cinzel text-amber-400 font-bold tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Interactive Vedic Numerology Tool
            </span>
            <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white mt-2">
              Discover Your Driver (Moolank) & Conductor (Bhagyank) Numbers
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
              Select your birth details below to reveal your primary ruling planet and cosmic vibrational code.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Selectors */}
            <div className="lg:col-span-5 space-y-4 bg-[#061610] p-5 rounded-xl border border-emerald-800/40">
              <h3 className="text-xs font-semibold uppercase text-amber-300 tracking-wider flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Enter Your Birth Date</span>
              </h3>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Day</label>
                  <select
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="w-full bg-[#0b261c] border border-amber-500/30 rounded-lg px-2.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Month</label>
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full bg-[#0b261c] border border-amber-500/30 rounded-lg px-2.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {[
                      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                    ].map((m, i) => (
                      <option key={i + 1} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Year</label>
                  <select
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full bg-[#0b261c] border border-amber-500/30 rounded-lg px-2.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    {Array.from({ length: 80 }, (_, i) => 2026 - i).map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number Badges Result */}
              <div className="grid grid-cols-2 gap-3 pt-3">
                <div className="bg-gradient-to-br from-[#0c3125] to-[#061812] p-3 rounded-lg border border-amber-500/40 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    Driver (Moolank)
                  </div>
                  <div className="font-cinzel text-3xl font-extrabold text-amber-400 mt-0.5">
                    {driverNumber}
                  </div>
                  <div className="text-[10px] text-amber-300/80 font-medium mt-0.5">
                    Day Vibration
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#0c3125] to-[#061812] p-3 rounded-lg border border-emerald-500/40 text-center">
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                    Conductor (Bhagyank)
                  </div>
                  <div className="font-cinzel text-3xl font-extrabold text-emerald-400 mt-0.5">
                    {conductorNumber}
                  </div>
                  <div className="text-[10px] text-emerald-300/80 font-medium mt-0.5">
                    Destiny Vibration
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-black/30 p-2.5 rounded-lg border border-emerald-900/30 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  The Driver represents your innate personality, while the Conductor represents your ultimate destiny path in life.
                </span>
              </div>
            </div>

            {/* Planetary Insight & Consultation CTA */}
            <div className="lg:col-span-7 bg-[#071d15] p-6 rounded-xl border border-amber-500/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                <div>
                  <div className="text-[11px] text-amber-400 font-semibold uppercase tracking-wider">
                    Governing Vedic Deity & Planet
                  </div>
                  <h4 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    {profile.name}
                  </h4>
                </div>
                <div className="px-3 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
                  Element: {profile.element}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {profile.traits}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="bg-[#05140e] p-2.5 rounded border border-emerald-900/40">
                  <span className="block text-[10px] text-slate-400 uppercase">Cosmic Domain</span>
                  <span className="font-medium text-slate-200">{profile.ruler}</span>
                </div>
                <div className="bg-[#05140e] p-2.5 rounded border border-emerald-900/40">
                  <span className="block text-[10px] text-slate-400 uppercase">Auspicious Gem</span>
                  <span className="font-medium text-amber-300">{profile.gem}</span>
                </div>
                <div className="bg-[#05140e] p-2.5 rounded border border-emerald-900/40 col-span-2 sm:col-span-1">
                  <span className="block text-[10px] text-slate-400 uppercase">Lucky Days</span>
                  <span className="font-medium text-emerald-300">{profile.luckyDays}</span>
                </div>
              </div>

              {/* Book Appointment CTA linking into form */}
              <div className="pt-2">
                <button
                  onClick={handleBookWithNumbers}
                  className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 text-black font-extrabold text-xs tracking-wider uppercase shadow-md hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Book Consultation for Number {driverNumber} with Gopinath D S</span>
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
