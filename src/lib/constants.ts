import { ContactInfo, SocialLinks, NavigationItem } from '@/types';
import { PageRoute } from '@/types/enums';

/**
 * Informations de contact Acoriss
 */
export const CONTACT_INFO: ContactInfo = {
  address: 'Silikin Village, N° 63, Avenue Colonel Mondjiba, Commune de la Gombe, Kinshasa - RDC',
  phone: '+243 8 28 28 0000',
  email: 'info@acoriss.com',
  hours: {
    weekdays: 'Lun – Ven: 08h30 – 16h30',
    saturday: 'Sam: 09h00 - 12h00',
    sunday: 'Fermé',
  },
  coordinates: {
    lat: -4.3276,
    lng: 15.3136,
  },
};

/**
 * Liens des réseaux sociaux
 */
export const SOCIAL_LINKS: SocialLinks = {
  facebook: 'https://facebook.com/acoriss',
  twitter: 'https://twitter.com/acoriss',
  linkedin: 'https://linkedin.com/company/acoriss',
  instagram: 'https://instagram.com/acoriss',
};

/**
 * Navigation principale
 */
export const NAVIGATION: NavigationItem[] = [
  {
    label: 'Accueil',
    href: PageRoute.HOME,
  },
  {
    label: 'À propos',
    href: PageRoute.ABOUT,
  },
  {
    label: 'Services',
    href: PageRoute.SERVICES,
  },
  {
    label: 'RdCard',
    href: PageRoute.RDCARD,
  },
  {
    label: 'Contact',
    href: PageRoute.CONTACT,
  },
];

/**
 * Métadonnées SEO par défaut
 */
export const DEFAULT_SEO = {
  title: 'Acoriss - Solutions de paiement modernes en RDC',
  description:
    'Acoriss Sarl, leader des solutions de paiement, encaissement, change et services automobiles en RDC. Découvrez RdCard, la carte tout-en-un innovante.',
  keywords: [
    'Acoriss',
    'RdCard',
    'paiement',
    'encaissement',
    'change',
    'Kinshasa',
    'RDC',
    'Congo',
    'carte prépayée',
    'services automobiles',
    'innovation',
    'fintech',
  ],
  ogImage: '/images/og-image.jpg',
};

/**
 * Configuration des animations
 */
export const ANIMATION_CONFIG = {
  duration: 0.5,
  ease: 'easeInOut',
  staggerDelay: 0.1,
};

/**
 * Breakpoints responsive
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

