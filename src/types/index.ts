import { ServiceType, ConsultingServiceType, RdCardFeature, RdCardType, Language } from './enums';

export interface Service {
  id: string;
  type: ServiceType;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface ConsultingService {
  id: string;
  type: ConsultingServiceType;
  title: string;
  description: string;
  icon: string;
  category: 'organisation' | 'developpement';
}

export interface RdCardFeatureItem {
  id: string;
  type: RdCardFeature;
  title: string;
  description: string;
  icon: string;
}

export interface RdCardTypeInfo {
  id: string;
  type: RdCardType;
  name: string;
  description: string;
  dailyLimit: number;
  features: string[];
  color: string;
  icon: string;
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface Translation {
  locale: Language;
  translations: Record<string, string>;
}

export * from './enums';

