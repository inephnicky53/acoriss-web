import {
  Wallet,
  DollarSign,
  Car,
  CreditCard,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Building2,
  Receipt,
  Banknote,
  PiggyBank,
  Fuel,
  Wrench,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const mainServices = [
    {
      icon: Wallet,
      title: 'Encaissements & Paiements',
      description: 'Solutions complètes pour gérer vos transactions professionnelles',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Encaissement pour entreprises',
        'Paiement de factures',
        'Transactions sécurisées',
        'Rapports détaillés',
        'Multi-devises',
        'API intégration'
      ],
      benefits: [
        'Réduction des délais de traitement',
        'Sécurité maximale',
        'Suivi en temps réel'
      ]
    },
    {
      icon: DollarSign,
      title: 'Change & Retraits Bancaires',
      description: 'Services de change et retraits rapides et fiables',
      color: 'from-blue-500 to-indigo-600',
      features: [
        'Change de devises',
        'Retraits bancaires',
        'Taux compétitifs',
        'Service express',
        'Sans frais cachés',
        'Points de service multiples'
      ],
      benefits: [
        'Meilleurs taux du marché',
        'Disponibilité immédiate',
        'Transparence totale'
      ]
    },
    {
      icon: Car,
      title: 'Services Automobiles',
      description: 'Tout pour l\'entretien et la gestion de votre véhicule',
      color: 'from-secondary-500 to-red-600',
      features: [
        'Lavage professionnel',
        'Transport & location',
        'Garage & réparations',
        'Entretien préventif',
        'Assistance routière',
        'Gestion de flotte'
      ],
      benefits: [
        'Qualité professionnelle',
        'Prix compétitifs',
        'Service rapide'
      ]
    },
    {
      icon: CreditCard,
      title: 'RdCard - Innovation Digitale',
      description: 'La carte intelligente qui révolutionne vos opérations',
      color: 'from-emerald-500 to-teal-600',
      features: [
        'Paiement prépayé',
        'Pièce d\'identité',
        'Pointage de présence',
        'Intégration ERP Kimia',
        'App mobile',
        'Gestion centralisée'
      ],
      benefits: [
        'Tout-en-un pratique',
        'Technologie de pointe',
        'Économies de gestion'
      ]
    }
  ];

  const detailedServices = {
    payment: [
      { icon: Building2, title: 'Encaissement entreprise', description: 'Solutions adaptées aux PME et grandes entreprises' },
      { icon: Receipt, title: 'Paiement de factures', description: 'Eau, électricité, télécoms et plus' },
      { icon: TrendingUp, title: 'Gestion de trésorerie', description: 'Optimisez vos flux financiers' }
    ],
    exchange: [
      { icon: Banknote, title: 'Change multi-devises', description: 'USD, EUR, CDF et autres monnaies' },
      { icon: PiggyBank, title: 'Retraits sans carte', description: 'Accédez à votre argent facilement' },
      { icon: Shield, title: 'Sécurité garantie', description: 'Transactions protégées et traçables' }
    ],
    auto: [
      { icon: Car, title: 'Lavage premium', description: 'Intérieur et extérieur complets' },
      { icon: Fuel, title: 'Services carburant', description: 'Partenariats avec stations-service' },
      { icon: Wrench, title: 'Réparations', description: 'Garage équipé et mécaniciens certifiés' }
    ]
  };

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'Analysons vos besoins spécifiques ensemble',
      icon: Users
    },
    {
      number: '02',
      title: 'Solution sur mesure',
      description: 'Nous concevons la solution parfaite pour vous',
      icon: TrendingUp
    },
    {
      number: '03',
      title: 'Mise en place',
      description: 'Déploiement rapide et formation incluse',
      icon: Clock
    },
    {
      number: '04',
      title: 'Support continu',
      description: 'Assistance 24/7 pour votre tranquillité',
      icon: Shield
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Des solutions complètes et innovantes pour répondre à tous vos besoins en matière de paiements, change et services automobiles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6`}>
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className={`bg-gradient-to-r ${service.color} p-1 rounded-full`}>
                          <ArrowRight className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all`}>
                    En savoir plus
                  </button>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="bg-gray-50 rounded-3xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      Fonctionnalités clés
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow"
                        >
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${service.color} mb-2`}></div>
                          <p className="text-sm font-medium text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Services Détaillés
            </h2>
            <p className="text-xl text-gray-600">
              Explorez l'ensemble de notre offre
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wallet className="h-6 w-6 text-cyan-600 mr-3" />
                Paiements
              </h3>
              <div className="space-y-4">
                {detailedServices.payment.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cyan-100 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-6 w-6 text-blue-600 mr-3" />
                Change
              </h3>
              <div className="space-y-4">
                {detailedServices.exchange.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="h-6 w-6 text-secondary-600 mr-3" />
                Automobile
              </h3>
              <div className="space-y-4">
                {detailedServices.auto.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                        <item.icon className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600">
              Comment nous travaillons avec vous
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white border-4 border-cyan-500 w-12 h-12 rounded-full flex items-center justify-center font-bold text-cyan-600 shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-12 text-white text-center">
            <MapPin className="h-16 w-16 mx-auto mb-6 text-cyan-200" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nos Bureaux à Kinshasa
            </h2>
            <p className="text-xl mb-6 text-blue-100 max-w-2xl mx-auto">
              35, Avenue Kalemie, Gombe - Kinshasa<br />
              Ouvert du lundi au vendredi : 8h30 - 16h30<br />
              Samedi : 8h30 - 13h00
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-2xl transition-all">
                Prendre rendez-vous
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
