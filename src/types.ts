export type ConsultationType =
  | 'Numerology Consultation'
  | 'Vedic Numerology'
  | 'Name Numerology'
  | 'Mobile Numerology'
  | 'Signature Analysis'
  | 'Health Numerology'
  | 'Vastu Consultation'
  | 'General Enquiry';

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  dateOfBirth: string;
  consultationType: ConsultationType;
  preferredDate: string;
  preferredTime: string;
  additionalMessage: string;
  consent: boolean;
}

export interface StoreProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  benefits: string[];
  tag: string;
  iconName: string;
}

export interface ConsultationService {
  id: string;
  type: ConsultationType;
  title: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  duration: string;
  mode: string;
  iconName: string;
}
