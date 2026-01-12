import {
  Service,
  ConsultingService,
  RdCardFeatureItem,
  RdCardTypeInfo,
  Testimonial,
  FAQItem,
  TeamMember,
} from '@/types';
import {
  ServiceType,
  ConsultingServiceType,
  RdCardFeature,
  RdCardType,
} from '@/types/enums';

/**
 * Services principaux d'Acoriss
 */
export const SERVICES: Service[] = [
  {
    id: 'encaissement',
    type: ServiceType.ENCAISSEMENT,
    title: 'Encaissements pour entreprises',
    description:
      'Solutions d\'encaissement sécurisées et efficaces pour votre entreprise. Gérez vos transactions en toute confiance.',
    icon: 'wallet',
    features: [
      'Encaissement multi-canaux',
      'Rapports en temps réel',
      'Sécurité maximale',
      'Support 24/7',
    ],
  },
  {
    id: 'paiement',
    type: ServiceType.PAIEMENT,
    title: 'Paiements de factures',
    description:
      'Payez vos factures facilement : eau, électricité, internet, et plus encore. Simple, rapide et sécurisé.',
    icon: 'credit-card',
    features: [
      'Paiement instantané',
      'Historique des transactions',
      'Notifications automatiques',
      'Multi-fournisseurs',
    ],
  },
  {
    id: 'change',
    type: ServiceType.CHANGE,
    title: 'Change & Retraits',
    description:
      'Services de change de devises et retraits bancaires aux meilleurs taux. Transactions sécurisées et transparentes.',
    icon: 'banknote',
    features: [
      'Taux compétitifs',
      'Devises multiples',
      'Retraits rapides',
      'Traçabilité complète',
    ],
  },
  {
    id: 'organisation',
    type: ServiceType.ORGANISATION,
    title: 'Organisation de l\'Entreprise',
    description:
      'Diagnostic, optimisation et restructuration de vos processus d\'entreprise pour une efficacité maximale.',
    icon: 'building',
    features: [
      'Diagnostic 360° et recommandations',
      'Optimisation des processus',
      'Conduite du changement',
      'Gestion des performances',
    ],
  },
  {
    id: 'developpement',
    type: ServiceType.DEVELOPPEMENT,
    title: 'Développement de l\'Entreprise',
    description:
      'Accompagnement dans vos projets de transformation digitale et solutions de paiement innovantes.',
    icon: 'trending-up',
    features: [
      'Gestion de projet en sous-traitance',
      'Transformation digitale',
      'Plateformes électroniques',
      'Solutions monétiques',
    ],
  },
    {
    id: 'rdcard',
    type: ServiceType.RDCARD,
    title: 'RdCard - Carte Intelligente',
    description:
      'Notre carte intelligente multifonctionnelle pour une expérience de paiement sans contact et sécurisée.',
    icon: 'credit-card',
    features: [
      'Paiement sans contact',
      'Sécurité avancée',
      'Recharge instantanée',
      'Historique des transactions',
    ],
  },
  {
    id: 'numerique',
    type: ServiceType.NUMERIQUE,
    title: 'Solutions Numériques',
    description:
      'Développement de solutions numériques innovantes pour digitaliser votre entreprise et optimiser vos processus.',
    icon: 'smartphone',
    features: [
      'Applications web et mobile',
      'Plateformes e-commerce',
      'Systèmes de gestion intégrés',
      'Solutions cloud',
    ],
  },
  {
    id: 'fintech',
    type: ServiceType.FINTECH,
    title: 'Services Fintech',
    description:
      'Solutions financières technologiques avancées pour moderniser vos opérations bancaires et de paiement.',
    icon: 'trending-up',
    features: [
      'Paiements digitaux',
      'Portefeuilles électroniques',
      'API bancaires',
      'Solutions blockchain',
    ],
  },
];

/**
 * Services de conseil détaillés
 */
export const CONSULTING_SERVICES: ConsultingService[] = [
  // Organisation de l'Entreprise
  {
    id: 'diagnostic',
    type: ConsultingServiceType.DIAGNOSTIC,
    title: 'Diagnostic des pratiques existantes',
    description: 'Analyse approfondie de vos pratiques actuelles',
    icon: 'search',
    category: 'organisation',
  },
  {
    id: 'diagnostic-360',
    type: ConsultingServiceType.DIAGNOSTIC_360,
    title: 'Diagnostic 360° avec recommandations',
    description: 'Diagnostic complet avec pistes de solutions adaptées',
    icon: 'compass',
    category: 'organisation',
  },
  {
    id: 'procedures',
    type: ConsultingServiceType.PROCEDURES,
    title: 'Écriture des procédures et instructions',
    description: 'Rédaction de procédures, instructions et notes internes',
    icon: 'file-text',
    category: 'organisation',
  },
  {
    id: 'changement',
    type: ConsultingServiceType.CHANGEMENT,
    title: 'Accompagnement dans la politique du changement',
    description: 'Support dans la gestion et l\'implémentation du changement',
    icon: 'refresh-cw',
    category: 'organisation',
  },
  {
    id: 'reunions',
    type: ConsultingServiceType.REUNIONS,
    title: 'Revue et recommandations sur les réunions',
    description: 'Optimisation des réunions de services et comités inter entités',
    icon: 'users',
    category: 'organisation',
  },
  {
    id: 'process',
    type: ConsultingServiceType.PROCESS,
    title: 'Amélioration et optimisation des process',
    description: 'Optimisation des processus opérationnels, techniques et de communication',
    icon: 'settings',
    category: 'organisation',
  },
  {
    id: 'cahiers-charge',
    type: ConsultingServiceType.CAHIERS_CHARGE,
    title: 'Écriture des cahiers de charge',
    description: 'Rédaction de cahiers de charge détaillés et professionnels',
    icon: 'clipboard',
    category: 'organisation',
  },
  {
    id: 'conduite-changement',
    type: ConsultingServiceType.CONDUITE_CHANGEMENT,
    title: 'Organisation et développement de la Conduite du changement',
    description: 'Mise en place et développement de stratégies de conduite du changement',
    icon: 'arrow-right-circle',
    category: 'organisation',
  },
  {
    id: 'demandes-specifiques',
    type: ConsultingServiceType.DEMANDES_SPECIFIQUES,
    title: 'Prise en charge de demandes spécifiques',
    description: 'Solutions personnalisées pour vos besoins particuliers',
    icon: 'star',
    category: 'organisation',
  },
  {
    id: 'formation',
    type: ConsultingServiceType.FORMATION,
    title: 'Formation intégration - produits et outils',
    description: 'Formation sur les produits, politique commerciale et outils de gestion',
    icon: 'book-open',
    category: 'organisation',
  },
  {
    id: 'reorganisation',
    type: ConsultingServiceType.REORGANISATION,
    title: 'Réorganisation et restructuration',
    description: 'Restructuration complète de votre organisation',
    icon: 'git-branch',
    category: 'organisation',
  },
  {
    id: 'performances',
    type: ConsultingServiceType.PERFORMANCES,
    title: 'Supports de gestion des performances',
    description: 'Mise en place de supports de gestion, suivi et évaluation',
    icon: 'bar-chart',
    category: 'organisation',
  },
  {
    id: 'objectifs',
    type: ConsultingServiceType.OBJECTIFS,
    title: 'Identification et instauration d\'objectifs',
    description: 'Définition d\'objectifs par poste et par service',
    icon: 'target',
    category: 'organisation',
  },
  {
    id: 'risques',
    type: ConsultingServiceType.RISQUES,
    title: 'Dispositifs de gestion des risques',
    description: 'Mise en place de systèmes de gestion des risques',
    icon: 'shield',
    category: 'organisation',
  },
  {
    id: 'chartes',
    type: ConsultingServiceType.CHARTES,
    title: 'Définition de chartes d\'entreprise',
    description: 'Création de chartes et politique d\'esprit d\'entreprise',
    icon: 'award',
    category: 'organisation',
  },
  {
    id: 'communication',
    type: ConsultingServiceType.COMMUNICATION,
    title: 'Dispositifs de communication efficace',
    description: 'Mise en place de communication efficace inter services',
    icon: 'message-circle',
    category: 'organisation',
  },
  {
    id: 'charges',
    type: ConsultingServiceType.CHARGES,
    title: 'Conseils sur la maîtrise des charges',
    description: 'Recommandations sur la maîtrise des charges de fonctionnement',
    icon: 'dollar-sign',
    category: 'organisation',
  },
  {
    id: 'gouvernance-si',
    type: ConsultingServiceType.GOUVERNANCE_SI,
    title: 'Revue et refonte de la Gouvernance SI',
    description: 'Recommandations en matière de Gouvernance des Systèmes d\'Information',
    icon: 'server',
    category: 'organisation',
  },
  {
    id: 'outils-gestion',
    type: ConsultingServiceType.OUTILS_GESTION,
    title: 'Optimisation des outils de gestion',
    description: 'Amélioration de l\'utilisation des outils de gestion',
    icon: 'wrench',
    category: 'organisation',
  },
  {
    id: 'qualite',
    type: ConsultingServiceType.QUALITE,
    title: 'Conseil en gestion Qualité',
    description: 'Accompagnement dans la mise en place de systèmes qualité',
    icon: 'check-circle',
    category: 'organisation',
  },
  // Développement de l'Entreprise
  {
    id: 'sous-traitance',
    type: ConsultingServiceType.SOUS_TRAITANCE,
    title: 'Prise en charge en sous-traitance de gestion de projet',
    description: 'Gestion complète de vos projets en sous-traitance',
    icon: 'briefcase',
    category: 'developpement',
  },
  {
    id: 'transformation-digitale',
    type: ConsultingServiceType.TRANSFORMATION_DIGITALE,
    title: 'Accompagnement aux projets de transformation digitale',
    description: 'Collaboration et accompagnement dans la transformation digitale, plateformes électroniques et solutions monétiques',
    icon: 'zap',
    category: 'developpement',
  },
];

/**
 * Fonctionnalités RdCard
 */
export const RDCARD_FEATURES: RdCardFeatureItem[] = [
  {
    id: 'paiement',
    type: RdCardFeature.PAIEMENT_PREPAYE,
    title: 'Paiements Sécurisés',
    description:
      'Rechargez votre carte et payez en toute sécurité chez nos partenaires. Transactions instantanées et traçables.',
    icon: 'credit-card',
  },
  {
    id: 'recharge',
    type: RdCardFeature.PAIEMENT_PREPAYE,
    title: 'Rechargement Instantané',
    description:
      'Rechargez votre RdCard à tout moment via notre application mobile ou chez nos agents agréés.',
    icon: 'zap',
  },
  {
    id: 'suivi',
    type: RdCardFeature.PAIEMENT_PREPAYE,
    title: 'Suivi en Temps Réel',
    description:
      'Consultez l\'historique de vos transactions et suivez vos dépenses en temps réel via l\'application.',
    icon: 'clock',
  }
];

/**
 * Types de cartes RdCard
 */
export const RDCARD_TYPES: RdCardTypeInfo[] = [
  {
    id: 'prestige',
    type: RdCardType.PRESTIGE,
    name: 'RdCard Prestige',
    description: 'Destinée aux utilisateurs privilégiés avec des plafonds adaptés aux besoins quotidiens.',
    dailyLimit: 500,
    features: [
      'Plafond journalier de 500 USD',
      'Paiements et retraits sécurisés',
      'Recharge instantanée',
      'Support prioritaire',
      'Transactions traçables'
    ],
    color: 'from-purple-500 to-indigo-600',
    icon: 'star'
  },
  {
    id: 'gold',
    type: RdCardType.GOLD,
    name: 'RdCard Gold',
    description: 'Conçue pour les utilisateurs réguliers nécessitant des plafonds plus élevés.',
    dailyLimit: 2000,
    features: [
      'Plafond journalier de 2 000 USD',
      'Idéale pour usage professionnel',
      'Cashback sur transactions',
      'Assurance incluse',
      'Accès aux services premium'
    ],
    color: 'from-yellow-500 to-orange-500',
    icon: 'award',
    recommended: true
  },
  {
    id: 'enterprise',
    type: RdCardType.ENTERPRISE,
    name: 'RdCard Enterprise',
    description: 'Carte destinée aux entreprises pour alimenter les cartes de leurs employés.',
    dailyLimit: 0, // Illimité
    features: [
      'Gestion centralisée des employés',
      'Alimentation des cartes Associate',
      'Tableau de bord entreprise',
      'Rapports détaillés',
      'API d\'intégration'
    ],
    color: 'from-blue-600 to-cyan-600',
    icon: 'building'
  },
  {
    id: 'associate',
    type: RdCardType.ASSOCIATE,
    name: 'RdCard Associate',
    description: 'Carte affiliée à une RdCard Enterprise, utilisée par les employés.',
    dailyLimit: 500,
    features: [
      'Liée à une carte Enterprise',
      'Réception de salaire',
      'Dépenses personnelles',
      'Plafond configurable',
      'Historique des transactions'
    ],
    color: 'from-green-500 to-teal-500',
    icon: 'users'
  },
  {
    id: 'business',
    type: RdCardType.BUSINESS,
    name: 'RdCard Business',
    description: 'Spécialement conçue pour les marchands avec gestion des flux financiers.',
    dailyLimit: 5000,
    features: [
      'Plafond journalier de 5 000 USD',
      'Application marchande dédiée',
      'Gestion des encaissements',
      'Statistiques en temps réel',
      'Intégration comptable'
    ],
    color: 'from-red-500 to-pink-500',
    icon: 'briefcase'
  }
];

/**
 * Témoignages clients
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Kalala',
    role: 'Directrice Financière',
    company: 'Entreprise ABC',
    content:
      'Acoriss a transformé notre gestion des paiements. La RdCard est un outil indispensable pour notre entreprise.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Jean Mukendi',
    role: 'Entrepreneur',
    company: 'StartUp XYZ',
    content:
      'Service impeccable et support réactif. Je recommande vivement Acoriss pour tous vos besoins de paiement.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Grace Nzuzi',
    role: 'Gérante',
    company: 'Commerce GHI',
    content:
      'La simplicité et la sécurité des services Acoriss nous ont convaincus. Un partenaire de confiance.',
    rating: 5,
  },
];

/**
 * FAQ RdCard
 */
export const RDCARD_FAQ: FAQItem[] = [
  {
    id: '1',
    question: 'Qu\'est-ce que la RdCard ?',
    answer:
      'La RdCard est une carte prépayée multifonction qui combine paiement, identification et pointage de présence. C\'est la solution tout-en-un pour simplifier votre quotidien.',
    category: 'Général',
  },
  {
    id: '2',
    question: 'Comment obtenir une RdCard ?',
    answer:
      'Vous pouvez demander votre RdCard en remplissant le formulaire de contact ou en vous rendant dans nos bureaux à Kinshasa. L\'activation est rapide et simple.',
    category: 'Général',
  },
  {
    id: '3',
    question: 'Où puis-je utiliser ma RdCard ?',
    answer:
      'La RdCard est acceptée chez tous nos partenaires à Kinshasa et dans toute la RDC. La liste des points d\'acceptation est en constante expansion.',
    category: 'Utilisation',
  },
  {
    id: '4',
    question: 'Comment recharger ma RdCard ?',
    answer:
      'Vous pouvez recharger votre RdCard via notre application mobile, dans nos agences, ou chez nos partenaires agréés. Le rechargement est instantané.',
    category: 'Utilisation',
  },
  {
    id: '5',
    question: 'La RdCard est-elle sécurisée ?',
    answer:
      'Absolument ! La RdCard utilise les dernières technologies de sécurité : cryptage des données, authentification biométrique et protection contre la fraude.',
    category: 'Sécurité',
  },
  {
    id: '6',
    question: 'Quel est le coût de la RdCard ?',
    answer:
      'Le coût d\'acquisition de la RdCard est de 10 000 FC. Aucun frais mensuel. Seuls les frais de transaction s\'appliquent selon votre utilisation.',
    category: 'Tarification',
  },
];

/**
 * Équipe Acoriss
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Claudine Wenzi',
    role: 'Directrice Générale',
    bio: 'Experte en fintech avec plus de 15 ans d\'expérience dans le secteur financier.',
    avatar: '/images/team/claudine.png',
  },
  {
    id: '2',
    name: 'Sébastien Namèche',
    role: 'Consultant Senior',
    bio: 'Spécialiste en innovation digitale et systèmes de paiement.',
    avatar: '/images/team/sebastien.jpeg',
  },
  {
    id: '3',
    name: 'Jean-pierre Wenzi',
    role: 'Directeur Commercial',
    bio: 'Passionné par le développement des solutions adaptées aux besoins locaux.',
    avatar: '/images/team/jean-pierre.jpg',
  },
];

