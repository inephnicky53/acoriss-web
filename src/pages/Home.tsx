import {
  CreditCard,
  Wallet,
  DollarSign,
  Car,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Wallet,
      title: 'Encaissements & Paiements',
      description: 'Solutions complètes pour gérer vos transactions en toute sécurité',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Change & Retraits',
      description: 'Services de change et retraits bancaires rapides et fiables',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Car,
      title: 'Services Automobiles',
      description: 'Lavage, transport, location et garage - tout pour votre véhicule',
      color: 'from-secondary-500 to-red-600'
    },
    {
      icon: Sparkles,
      title: 'Innovation Digitale',
      description: 'Technologie de pointe pour simplifier votre quotidien',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const features = [
    'Paiement prépayé sécurisé',
    'Pièce d\'identité intégrée',
  ];

  const testimonials = [
    {
      name: 'Jean Kabongo',
      role: 'Directeur Commercial',
      company: 'TechCongo',
      quote: 'RdCard a transformé notre gestion des paiements. Simple, rapide et fiable!'
    },
    {
      name: 'Marie Tshala',
      role: 'Gérante',
      company: 'Restaurant Le Palmier',
      quote: 'Acoriss nous accompagne avec professionnalisme. Un service exceptionnel.'
    },
    {
      name: 'Patrick Ilunga',
      role: 'DRH',
      company: 'Entreprise Moderne SA',
      quote: 'Le système de pointage intégré à RdCard simplifie nos processus RH.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-sm font-medium">Innovation Made in Congo</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Simplifiez vos paiements avec{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-secondary-400">
                  RdCard
                </span>
              </h1>

              <p className="text-xl text-blue-100 leading-relaxed">
                La carte tout-en-un qui révolutionne l'encaissement, le paiement, le change et les services automobiles en RDC.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all flex items-center space-x-2">
                  <span>Découvrir RdCard</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                  Demander une démo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur-3xl opacity-50"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <div className="bg-gradient-to-br from-yellow-400 via-secondary-500 to-red-600 rounded-2xl p-8 aspect-[1.6/1] flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <CreditCard className="h-20 w-20 text-white mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">RdCard</h3>
                    <p className="text-white/90 text-sm">La carte intelligente</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl inline-block mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full mb-6">
                <Zap className="h-5 w-5" />
                <span className="text-sm font-medium">Innovation Technologique</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Découvrez RdCard, la carte intelligente
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                RdCard combine paiement, identification et pointage dans une seule carte. Solution tout-en-un pour simplifier la gestion de votre entreprise au quotidien.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sécurité maximale</h4>
                    <p className="text-gray-600">Protection avancée de vos données et transactions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Rapidité</h4>
                    <p className="text-gray-600">Transactions instantanées sans friction</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Traçabilité</h4>
                    <p className="text-gray-600">Suivi complet de toutes vos opérations</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center space-x-2">
                <span>En savoir plus sur RdCard</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="bg-cyan-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                      <CreditCard className="h-6 w-6 text-cyan-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Paiement</h4>
                    <p className="text-sm text-gray-600">Prépayé sécurisé</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="bg-blue-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Identité</h4>
                    <p className="text-sm text-gray-600">Carte d'ID intégrée</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="bg-orange-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-secondary-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">Pointage</h4>
                    <p className="text-sm text-gray-600">Présence automatique</p>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="bg-green-100 rounded-full h-12 w-12 flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">ERP</h4>
                    <p className="text-sm text-gray-600">Intégration Kimia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Des entreprises qui nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-xl">★</div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-cyan-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à révolutionner vos paiements ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez les entreprises qui font confiance à Acoriss et RdCard
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Demander une démo gratuite
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Contactez-nous
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
