import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { MapSection } from '@/components/contact/MapSection';

export const metadata: Metadata = {
  title: 'Contact | Acoriss - Contactez-nous pour vos besoins',
  description:
    'Contactez Acoriss pour toutes vos questions sur nos services de paiement, la RdCard et nos solutions automobiles. Notre équipe est à votre écoute 24/7.',
  keywords: [
    'contact acoriss',
    'support acoriss',
    'service client',
    'kinshasa',
    'gombe',
    'RDC',
    'téléphone',
    'email',
  ],
  openGraph: {
    title: 'Contact | Acoriss',
    description:
      'Contactez-nous pour toutes vos questions. Notre équipe est à votre écoute 24/7.',
    type: 'website',
    url: 'https://www.acoriss.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      
      {/* Form and Info Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form - 2 columns */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info - 1 column */}
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      <MapSection />
    </main>
  );
}

