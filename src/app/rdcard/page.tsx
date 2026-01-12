import { Metadata } from 'next';
import { RdCardHero } from '@/components/rdcard/RdCardHero';
import { FeaturesSection } from '@/components/rdcard/FeaturesSection';
import { CardTypesSection } from '@/components/rdcard/CardTypesSection';
import { SecuritySection } from '@/components/rdcard/SecuritySection';
import { HowItWorksSection } from '@/components/rdcard/HowItWorksSection';
import { BenefitsSection } from '@/components/rdcard/BenefitsSection';
import { CTASection } from '@/components/rdcard/CTASection';
import { FAQSection } from '@/components/rdcard/FAQSection';

export const metadata: Metadata = {
  title: 'RdCard | Acoriss - Votre solution de paiement intelligente',
  description:
    'RdCard : carte intelligente rechargeable pour tous vos paiements quotidiens. Simple, sécurisée et acceptée chez nos partenaires (restauration, transport, commerce). Disponible en 5 types : Prestige, Gold, Enterprise, Associate et Business. Visitez www.rdcard.net',
  keywords: [
    'rdcard',
    'carte prépayée',
    'paiement mobile',
    'paiement sécurisé',
    'carte rechargeable',
    'carte intelligente',
    'acoriss',
    'RDC',
    'Kinshasa',
    'rdcard prestige',
    'rdcard gold',
    'rdcard business',
    'www.rdcard.net',
    'app.rdcard.net',
  ],
  openGraph: {
    title: 'RdCard | Acoriss - Votre solution de paiement intelligente',
    description:
      'Carte intelligente rechargeable pour paiements sécurisés. Transactions traçables en temps réel. Téléchargez l\'app sur app.rdcard.net',
    type: 'website',
    url: 'https://www.acoriss.com/rdcard',
  },
};

export default function RdCardPage() {
  return (
    <main className="min-h-screen">
      <RdCardHero />
      <FeaturesSection />
      <CardTypesSection />
      <SecuritySection />
      <HowItWorksSection />
      <BenefitsSection />
      <CTASection />
      <FAQSection />
    </main>
  );
}

