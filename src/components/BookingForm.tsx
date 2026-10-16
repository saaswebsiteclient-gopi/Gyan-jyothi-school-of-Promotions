import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Send,
  ExternalLink,
  Lock,
  Sparkles
} from 'lucide-react';
import { ConsultationType, BookingFormData } from '../types';
import { OWNER_CONTACT, buildWhatsAppBookingLink } from '../data/store';

interface BookingFormProps {
  initialType?: ConsultationType;
  initialDob?: string;
}

const CONSULTATION_OPTIONS: ConsultationType[] = [
  'Numerology Consultation',
  'Vedic Numerology',
  'Name Numerology',
  'Mobile Numerology',
  'Signature Analysis',
  'Health Numerology',
  'Vastu Consultation',
  'General Enquiry'
];

export const BookingForm: React.FC<BookingFormProps> = ({
  initialType = 'Numerology Consultation',
  initialDob = ''
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    dateOfBirth: initialDob || '',
    consultationType: initialType,
    preferredDate: '',
    preferredTime: 'Morning Slot (10:00 AM - 1:00 PM)',
    additionalMessage: '',
    consent: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preparedEnquiry, setPreparedEnquiry] = useState<{
    whatsappUrl: string;
    mailToUrl: string;
  } | null>(null);

  // Sync if initial prop changes
  React.useEffect(() => {
    if (initialType) {
      setFormData((prev) => ({ ...prev, consultationType: initialType }));
    }
    if (initialDob) {
      setFormData((prev) => ({ ...prev, dateOfBirth: initialDob }));
    }
  }, [initialType, initialDob]);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = 'Please provide a valid mobile or WhatsApp number.';
    }

    if (!formData.consultationType) {
      newErrors.consultationType = 'Please select a consultation type.';
    }

    if (!formData.consent) {
      newErrors.consent = 'Your consent to be contacted is required to proceed with an appointment enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build the WhatsApp message (excluding DOB from URL parameters for privacy protection)
    const whatsappUrl = buildWhatsAppBookingLink({
      fullName: formData.fullName.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim() || undefined,
      consultationType: formData.consultationType,
      preferredDate: formData.preferredDate || undefined,
      preferredTime: formData.preferredTime || undefined,
      additionalMessage: formData.additionalMessage.trim() || undefined
    });

    // Build Mailto link fallback
    const emailSubject = encodeURIComponent(
      `Appointment Request: ${formData.consultationType} - ${formData.fullName}`
    );
    const emailBody = encodeURIComponent(
      `Respected Gopinath Sir,\n\nI would like to request an appointment for ${formData.consultationType}.\n\nFull Name: ${formData.fullName}\nMobile/WhatsApp: ${formData.phone}\nEmail: ${formData.email || 'Not provided'}\nPreferred Date: ${formData.preferredDate || 'Flexible'}\nPreferred Time: ${formData.preferredTime}\nMessage: ${formData.additionalMessage || 'N/A'}\n\nThank you,\n${formData.fullName}`
    );
    const mailToUrl = `mailto:${OWNER_CONTACT.email}?subject=${emailSubject}&body=${emailBody}`;

    setPreparedEnquiry({
      whatsappUrl,
      mailToUrl
    });

    // Auto open WhatsApp on user interaction if supported
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book-appointment" className="py-16 sm:py-20 bg-[#07130e] relative scroll-mt-20">
      
      {/* Decorative Aura Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wider uppercase font-cinzel">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Primary Institute Service</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Book Your Numerology Consultation
          </h2>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Direct 1-on-1 personalized consultation session with founder{' '}
            <strong className="text-amber-300 font-semibold">{OWNER_CONTACT.name}</strong>.
            Fill out your details below to send an appointment request directly to the owner.
          </p>
        </div>

        {/* Main Appointment Card */}
        <div className="bg-[#0b261c] border-2 border-amber-400/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Mandatory Clear Statement Notice */}
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 border border-amber-400/40 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-slate-200 space-y-1">
              <p className="font-bold text-amber-300">
                Submitting this form is an appointment request. Your appointment will be confirmed after our team contacts you.
              </p>
              <p className="text-xs text-slate-400">
                We do not use automatic slot booking. Each consultation is personally reviewed by Gopinath D S to ensure sufficient preparation for your unique birth matrix.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Grid 1: Full Name & Mobile / WhatsApp Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    className={`w-full bg-[#061812] border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.fullName ? 'border-red-400 focus:ring-red-400' : 'border-emerald-800/60 focus:border-amber-400'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  Mobile / WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9876543210"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    className={`w-full bg-[#061812] border rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all ${
                      errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-emerald-800/60 focus:border-amber-400'
                    }`}
                  />
                </div>
                {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                <p className="text-[11px] text-slate-400 mt-1">Our team contacts you on this number for mutual timing.</p>
              </div>
            </div>

            {/* Grid 2: Email Address & Date of Birth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    placeholder="e.g. yourname@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#061812] border border-emerald-800/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                  <span>Date of Birth <span className="text-slate-400 font-normal lowercase">(optional)</span></span>
                  <span className="text-[10px] text-emerald-400 font-normal flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Private & Confidential
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full bg-[#061812] border border-emerald-800/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Helps calculate your Vedic grid in advance.</p>
              </div>
            </div>

            {/* Consultation Type (Required) */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                Consultation Type <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {CONSULTATION_OPTIONS.map((type) => {
                  const isSelected = formData.consultationType === type;
                  return (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, consultationType: type })}
                      className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-400 text-black border-amber-300 shadow-md ring-2 ring-amber-400/40'
                          : 'bg-[#061812] text-slate-300 border-emerald-800/60 hover:border-amber-500/50 hover:text-white'
                      }`}
                    >
                      <span>{type}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-black flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
              {errors.consultationType && (
                <p className="text-xs text-red-400 mt-1">{errors.consultationType}</p>
              )}
            </div>

            {/* Preferred Appointment Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  Preferred Appointment Date
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-[#061812] border border-emerald-800/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Suggested target date for your session.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                  Preferred Appointment Time
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#061812] border border-emerald-800/60 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-all"
                  >
                    <option value="Morning Slot (10:00 AM - 1:00 PM)">Morning Slot (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon Slot (2:00 PM - 5:00 PM)">Afternoon Slot (2:00 PM - 5:00 PM)</option>
                    <option value="Evening Slot (6:00 PM - 8:30 PM)">Evening Slot (6:00 PM - 8:30 PM)</option>
                    <option value="Anytime / Mutually Flexible">Anytime / Mutually Flexible</option>
                  </select>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Final slot is mutually agreed when owner contacts you.</p>
              </div>
            </div>

            {/* Additional Message (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                Additional Message / Specific Questions <span className="text-slate-400 font-normal lowercase">(optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Mention any specific concerns (e.g. career change, health, business name correction, marriage matching, etc.)."
                value={formData.additionalMessage}
                onChange={(e) => setFormData({ ...formData, additionalMessage: e.target.value })}
                className="w-full bg-[#061812] border border-emerald-800/60 rounded-xl p-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-all"
              ></textarea>
            </div>

            {/* Consent Checkbox (Required) */}
            <div className="bg-[#061812] p-4 rounded-xl border border-emerald-800/50">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.consent}
                  onChange={(e) => {
                    setFormData({ ...formData, consent: e.target.checked });
                    if (errors.consent) setErrors({ ...errors, consent: '' });
                  }}
                  className="mt-1 w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-emerald-700 bg-[#0b261c] accent-amber-500"
                />
                <span className="text-xs text-slate-300 leading-relaxed">
                  I agree to be contacted by{' '}
                  <strong className="text-amber-300 font-medium">Gopinath D S</strong> and the Gyan Jyothi School team via WhatsApp, phone, or email regarding this appointment enquiry.
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-400 mt-2">{errors.consent}</p>}
            </div>

            {/* Enquiry Submission CTA Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-black font-extrabold text-sm sm:text-base tracking-wider uppercase shadow-xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 border border-amber-300 flex items-center justify-center gap-3 ring-4 ring-amber-400/20"
              >
                <MessageCircle className="w-5 h-5 text-black" />
                <span>Submit Appointment Request via WhatsApp</span>
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>

            <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Delivers directly to Owner Gopinath D S (+91 9180275136)</span>
            </div>

          </form>

          {/* Delivery Flow Modal / Prepared State */}
          {preparedEnquiry && (
            <div className="mt-8 pt-6 border-t border-amber-500/30 animate-in fade-in duration-300 bg-[#05140e] p-5 sm:p-6 rounded-xl border border-emerald-600/40">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-white">
                    Your Appointment Enquiry is Prepared!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    To deliver your details to institute owner{' '}
                    <strong className="text-amber-300 font-semibold">{OWNER_CONTACT.name}</strong>, please click the button below. You must click <span className="text-amber-400 font-semibold">Send</span> in WhatsApp to complete your enquiry.
                  </p>

                  <div className="p-3 bg-black/40 rounded-lg border border-emerald-900/50 text-xs text-slate-300 space-y-1">
                    <div><strong>Recipient:</strong> {OWNER_CONTACT.name} ({OWNER_CONTACT.phone})</div>
                    <div><strong>Consultation:</strong> {formData.consultationType}</div>
                    <div><strong>Customer:</strong> {formData.fullName} ({formData.phone})</div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <a
                      href={preparedEnquiry.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Open WhatsApp & Send to Owner</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={preparedEnquiry.mailToUrl}
                      className="px-5 py-3 rounded-lg bg-[#0c3125] hover:bg-[#124636] border border-amber-500/40 text-amber-300 hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Or Send via Email Draft</span>
                    </a>
                  </div>

                  <p className="text-[11px] text-amber-300/80 pt-1">
                    * Reminder: Your appointment will be confirmed after our team contacts you.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
