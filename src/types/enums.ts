/**
 * Énumérations pour le site Acoriss
 */

export enum ServiceType {
  ENCAISSEMENT = 'encaissement',
  PAIEMENT = 'paiement',
  CHANGE = 'change',
  ORGANISATION = 'organisation',
  DEVELOPPEMENT = 'developpement',
  RDCARD = 'rdcard',
  NUMERIQUE = 'numerique',
  FINTECH = 'fintech',
}

export enum ConsultingServiceType {
  // Organisation de l'Entreprise
  DIAGNOSTIC = 'diagnostic',
  DIAGNOSTIC_360 = 'diagnostic_360',
  PROCEDURES = 'procedures',
  CHANGEMENT = 'changement',
  REUNIONS = 'reunions',
  PROCESS = 'process',
  CAHIERS_CHARGE = 'cahiers_charge',
  CONDUITE_CHANGEMENT = 'conduite_changement',
  DEMANDES_SPECIFIQUES = 'demandes_specifiques',
  FORMATION = 'formation',
  REORGANISATION = 'reorganisation',
  PERFORMANCES = 'performances',
  OBJECTIFS = 'objectifs',
  RISQUES = 'risques',
  CHARTES = 'chartes',
  COMMUNICATION = 'communication',
  CHARGES = 'charges',
  GOUVERNANCE_SI = 'gouvernance_si',
  OUTILS_GESTION = 'outils_gestion',
  QUALITE = 'qualite',
  // Développement de l'Entreprise
  SOUS_TRAITANCE = 'sous_traitance',
  TRANSFORMATION_DIGITALE = 'transformation_digitale',
}

export enum RdCardFeature {
  PAIEMENT_PREPAYE = 'paiement_prepaye',
  PIECE_IDENTITE = 'piece_identite',
  POINTAGE_PRESENCE = 'pointage_presence',
  INTEGRATION_ERP = 'integration_erp',
}

export enum RdCardType {
  PRESTIGE = 'prestige',
  GOLD = 'gold',
  ENTERPRISE = 'enterprise',
  ASSOCIATE = 'associate',
  BUSINESS = 'business',
}

export enum Language {
  FR = 'fr',
  EN = 'en',
}

export enum PageRoute {
  HOME = '/',
  ABOUT = '/a-propos',
  SERVICES = '/services',
  RDCARD = '/rdcard',
  CONTACT = '/contact',
}

export enum AnimationType {
  FADE_IN = 'fadeIn',
  SLIDE_UP = 'slideUp',
  SLIDE_LEFT = 'slideLeft',
  SLIDE_RIGHT = 'slideRight',
  SCALE = 'scale',
  BOUNCE = 'bounce',
}

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  GHOST = 'ghost',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

