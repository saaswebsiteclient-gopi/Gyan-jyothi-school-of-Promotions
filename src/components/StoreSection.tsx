import React from 'react';
import {
  Sun,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Activity,
  Smartphone,
  Lock,
  MessageCircle,
  ExternalLink,
  Shield
} from 'lucide-react';
import { STORE_PRODUCTS, OWNER_CONTACT, buildWhatsAppStoreLink } from '../data/store';
import { StoreProduct } from '../types';

const ICON_MAP: Record<string, React.FC<{ className?: string }>> = {
  Sun,
  Sparkles,
  BookOpen,
  ShieldCheck,
  Activity,
  Smartphone,
  Lock
};

export const StoreSection: React.FC = () => {
  return (
    <section id="store" className="py-16 sm:py-24 bg-[#05110c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider font-cinzel">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Sacred Remedial Tools</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Institute Store & Sacred Artifacts
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 font-light leading-relaxed">
            Authentic, energized spiritual remedies personally blessed by Gopinath D S. All purchases are discussed and arranged manually via WhatsApp.
          </p>
        </div>

        {/* Clear Manual Arrangement Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-xl bg-[#092219] border border-amber-500/30 flex items-start sm:items-center gap-3">
          <Shield className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <strong className="text-amber-300">Direct Purchase Enquiry:</strong> There is no automated checkout or payment gateway on this website. Click <span className="text-emerald-400 font-semibold">&ldquo;Enquire on WhatsApp&rdquo;</span> on any item to connect directly with <strong className="text-white">{OWNER_CONTACT.name}</strong> for availability, custom energization, and delivery arrangement.
          </p>
        </div>

        {/* 7 Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORE_PRODUCTS.map((product, index) => {
            const IconComponent = ICON_MAP[product.iconName] || Sparkles;
            const waLink = buildWhatsAppStoreLink(product);

            return (
              <div
                key={product.id}
                className={`bg-[#0b241c] rounded-2xl border border-emerald-800/60 p-6 flex flex-col justify-between hover:border-amber-400/60 transition-all duration-300 group shadow-lg ${
                  index === 0 ? 'ring-1 ring-amber-400/30' : ''
                }`}
              >
                <div>
                  {/* Top Category & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-medium text-amber-300/80 uppercase tracking-wider bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                      {product.category}
                    </span>
                    <span className="text-[10px] font-bold text-black bg-gradient-to-r from-amber-400 to-amber-300 px-2.5 py-0.5 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-emerald-900/60 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-cinzel text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-cinzel text-2xl font-black text-amber-400">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-slate-500 line-through">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                    <span className="text-[11px] text-emerald-400 font-medium">
                      (Vedic Energized)
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-3 border-t border-emerald-900/40 space-y-1.5">
                    {product.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquire on WhatsApp Button */}
                <div className="mt-6 pt-4 border-t border-emerald-900/40">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-emerald-500/40 flex items-center justify-center gap-2 shadow-md group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-emerald-500"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Enquire on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-emerald-200" />
                  </a>

                  <p className="text-[10px] text-center text-slate-400 mt-2">
                    Direct conversation with Gopinath D S
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
