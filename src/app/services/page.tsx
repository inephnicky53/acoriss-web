import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServiceDetailSection } from '@/components/services/ServiceDetailSection';
import { ConsultingServicesSection } from '@/components/services/ConsultingServicesSection';

export const metadata: Metadata = {
  title: 'Nos Services | Acoriss - Solutions de Paiement et Services Automobiles',
  description:
    'Découvrez nos services : encaissement, paiement de factures, change & retraits, et services automobiles complets en RDC.',
  keywords: [
    'services acoriss',
    'encaissement RDC',
    'paiement factures',
    'change devises',
    'services automobiles',
    'lavage auto',
    'transport',
    'location véhicules',
  ],
  openGraph: {
    title: 'Nos Services | Acoriss',
    description:
      'Solutions complètes de paiement, encaissement et services automobiles en RDC',
    type: 'website',
    url: 'https://www.acoriss.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <ServicesHero />
      <ServiceDetailSection />
      <ConsultingServicesSection />
    </main>
  );
}

