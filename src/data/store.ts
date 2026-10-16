import { StoreProduct } from '../types';

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: 'sri-yantra-plate',
    name: 'Sri Yantra Blessed Cosmic Energy Plate',
    category: 'Sacred Yantras',
    price: 2100,
    originalPrice: 2800,
    description: 'Precision etched sacred geometric Sri Yantra on heavy pure brass with 24K gold foil finish. Energized with Vedic mantras for prosperity, auspicious aura, and planetary harmony in home or office altar.',
    benefits: [
      'Draws positive cosmic prana and financial stability',
      'Neutralizes negative electromagnetic radiation and vastu doshas',
      'Blessed and energized directly at Gyan Jyothi sanctum',
      'Dimensions: 6 x 6 inches, heavy gauge solid brass'
    ],
    tag: 'Bestseller',
    iconName: 'Sun'
  },
  {
    id: 'rudraksha-mala',
    name: 'Authentic 5-Mukhi Indonesian Rudraksha Mala',
    category: 'Spiritual Beads',
    price: 1500,
    originalPrice: 1950,
    description: 'Hand-strung traditional 108+1 beads authentic Indonesian 5-Mukhi Rudraksha, sacred to Lord Shiva (Brihaspati/Jupiter planetary ruler). Ideal for daily japa meditation, mental tranquility, and blood pressure equilibrium.',
    benefits: [
      'Promotes deep mental clarity, memory retention & inner peace',
      'Shields user aura from negative vibrations and anxiety',
      'Strung with durable sacred silk thread & traditional tassel',
      'Accompanied by authentication certificate & energization guide'
    ],
    tag: 'Spiritual Classic',
    iconName: 'Sparkles'
  },
  {
    id: 'personalized-destiny-report',
    name: 'Personalized Numerology Name & Destiny Chart Report',
    category: 'Custom Reports',
    price: 3500,
    originalPrice: 4500,
    description: 'A comprehensive, hand-calculated 30+ page custom dossier prepared personally by Gopinath D S. Analyzes your complete birth chart, Chaldean name resonance, 9-year personal year forecast, and lucky numbers.',
    benefits: [
      'Hand-crafted calculation by Gopinath D S (not automated AI slop)',
      'Detailed year-by-year predictive numerological timeline',
      'Lucky dates, colors, business partners, and directional alignments',
      'Delivered in premium spiral-bound format or high-res PDF'
    ],
    tag: 'Most In-Demand',
    iconName: 'BookOpen'
  },
  {
    id: 'crystal-pyramid',
    name: 'Natural Clear Quartz Crystal Vastu Pyramid',
    category: 'Vastu & Crystals',
    price: 1850,
    originalPrice: 2400,
    description: 'Handcrafted authentic 100% natural clear quartz crystal pyramid. Amplifies cosmic vibrations and balances fire, water, and ether elements across living rooms, workstations, or study tables.',
    benefits: [
      'Harmonizes Brahmasthan and Northeast corners of buildings',
      'Absorbs geo-pathic stress and improves mental concentration',
      'Pre-cleansed with Himalayan rock salt and Vedic smoke',
      'Size: 2.5 inch base, optically clear faceted prism cuts'
    ],
    tag: 'Vastu Remedy',
    iconName: 'ShieldCheck'
  },
  {
    id: 'chakra-bracelet',
    name: 'Natural 7 Chakra Balancing Gemstone Bracelet',
    category: 'Energy Jewelry',
    price: 999,
    originalPrice: 1400,
    description: 'Genuine multi-stone healing bracelet featuring natural Amethyst, Sodalite, Turquoise, Green Aventurine, Tiger Eye, Carnelian, and Red Jasper stones coupled with porous volcanic lava beads.',
    benefits: [
      'Balances Root to Crown energy vortexes throughout the day',
      'Acts as natural diffuser for grounding essential oils',
      'Reinforced stretch cord fitting comfortable on all wrist sizes',
      'Ideal companion during meditation or high-stress business work'
    ],
    tag: 'Popular',
    iconName: 'Activity'
  },
  {
    id: 'mobile-resonance-audit',
    name: 'Lucky Mobile Number & Brand Resonance Audit',
    category: 'Commercial Numerology',
    price: 2500,
    originalPrice: 3200,
    description: 'Deep analytical report comparing your primary phone number, brand name, bank account numbers, or vehicle registration against your core Driver & Conductor numbers to remove financial blockages.',
    benefits: [
      'Identifies hidden anti-number clashes causing deal delays',
      'Provides 3 exact lucky number patterns to acquire from telecom',
      'Brand name syllable breakdown for maximum consumer trust',
      'Comprehensive digital report delivered within 48 hours'
    ],
    tag: 'Business Success',
    iconName: 'Smartphone'
  },
  {
    id: 'vastu-swastik-shield',
    name: 'Pure Copper Swastik & Pyra-Card Aura Shield',
    category: 'Protection Shields',
    price: 1200,
    originalPrice: 1650,
    description: 'Ancient Vedic sacred protection tool engineered from pure copper with micro-pyramid energy grids. Fixes onto main entrance doors or cash lockers to safeguard against evil eye (Drishti) and energy drainage.',
    benefits: [
      'Consecrated with Lord Ganesha & Gayatri protection mantras',
      'Protects business entrances, thresholds, and commercial tills',
      'Weather-resistant pure copper with engraved protective runes',
      'Comes with easy mounting tape and exact installation instructions'
    ],
    tag: 'Protection',
    iconName: 'Lock'
  }
];

export const OWNER_CONTACT = {
  name: 'GOPINATH D S',
  role: 'Founder & Certified Numerologist',
  school: 'GYAN JYOTHI SCHOOL OF OCCULT SCIENCE',
  phone: '+91 9180275136',
  rawPhone: '919180275136',
  email: 'ixglobalgopi@gmail.com',
  workingHours: 'Mon - Sun: 9:00 AM - 8:00 PM IST',
  location: 'Bangalore, Karnataka, India'
};

export function buildWhatsAppStoreLink(product: StoreProduct): string {
  const message = `Hello Gopinath Sir,\n\nI visited the Gyan Jyothi School of Occult Science website and would like to enquire about purchasing:\n\n*Product:* ${product.name}\n*Price:* ₹${product.price.toLocaleString('en-IN')}\n*Category:* ${product.category}\n\nPlease share availability, customization options, and delivery details. Thank you!`;
  return `https://wa.me/${OWNER_CONTACT.rawPhone}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppBookingLink(details: {
  fullName: string;
  phone: string;
  email?: string;
  consultationType: string;
  preferredDate?: string;
  preferredTime?: string;
  additionalMessage?: string;
}): string {
  const parts = [
    `*APPOINTMENT ENQUIRY — GYAN JYOTHI SCHOOL OF OCCULT SCIENCE*`,
    ``,
    `Respected Gopinath Sir,`,
    `I would like to request a consultation appointment with you. Below are my details:`,
    ``,
    `👤 *Full Name:* ${details.fullName}`,
    `📱 *Mobile/WhatsApp:* ${details.phone}`,
    details.email ? `✉️ *Email:* ${details.email}` : null,
    `🔮 *Consultation Type:* ${details.consultationType}`,
    details.preferredDate ? `📅 *Preferred Date:* ${details.preferredDate}` : null,
    details.preferredTime ? `⏰ *Preferred Time:* ${details.preferredTime}` : null,
    details.additionalMessage ? `📝 *Message / Specific Focus:* ${details.additionalMessage}` : null,
    ``,
    `*Note:* I understand this is an appointment request and look forward to your team confirming my slot.`
  ].filter(line => line !== null);

  return `https://wa.me/${OWNER_CONTACT.rawPhone}?text=${encodeURIComponent(parts.join('\n'))}`;
}
