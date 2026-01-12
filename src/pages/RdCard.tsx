import { useState } from 'react';
import {
  CreditCard,
  Shield,
  Zap,
  Smartphone,
  Users,
  CheckCircle,
  BadgeCheck,
  Lock,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Plus,
  Minus
} from 'lucide-react';

const RdCard = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const features = [
    {
      icon: CreditCard,
      title: 'Paiement Prépayé',
      description: 'Rechargez votre carte et payez en toute sécurité partout où RdCard est acceptée',
      color: 'from-cyan-500 to-blue-600',
      benefits: [
        'Contrôle total de vos dépenses',
        'Pas de découvert possible',
        'Rechargements instantanés',
        'Historique détaillé'
      ]
    },
    {
      icon: BadgeCheck,
      title: 'Pièce d\'Identité Intégrée',
      description: 'Votre carte RdCard sert également de pièce d\'identité officielle',
      color: 'from-blue-500 to-indigo-600',
      benefits: [
        'Une seule carte pour tout',
        'Sécurité biométrique',
        'Validation instantanée',
        'Acceptée officiellement'
      ]
    }
  ];

  const advantages = [
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Cryptage de niveau bancaire et protection contre la fraude'
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Transactions instantanées et validation immédiate'
    },
    {
      icon: Lock,
      title: 'Confidentialité',
      description: 'Vos données personnelles restent protégées'
    },
    {
      icon: TrendingUp,
      title: 'Traçabilité',
      description: 'Suivi complet de toutes vos opérations'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Inscription',
      description: 'Créez votre compte et fournissez vos documents d\'identité'
    },
    {
      step: '02',
      title: 'Activation',
      description: 'Recevez votre RdCard personnalisée sous 48h'
    },
    {
      step: '03',
      title: 'Rechargement',
      description: 'Alimentez votre carte via mobile money ou virement'
    },
    {
      step: '04',
      title: 'Utilisation',
      description: 'Payez, identifiez-vous et pointez avec une seule carte'
    }
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que RdCard ?',
      answer: 'RdCard est une carte intelligente multifonction qui combine paiement prépayé, pièce d\'identité, système de pointage et intégration avec votre ERP. C\'est la solution tout-en-un pour simplifier vos opérations quotidiennes.'
    },
    {
      question: 'Comment obtenir ma RdCard ?',
      answer: 'Il suffit de vous inscrire en ligne ou de visiter nos bureaux au 35 Avenue Kalemie, Gombe. Après vérification de vos documents, vous recevrez votre carte sous 48 heures.'
    },
    {
      question: 'Quels sont les frais associés ?',
      answer: 'L\'émission de la carte coûte 50$ et il n\'y a pas de frais mensuels. Les transactions sont facturées à 1% avec un minimum de 0.50$ par opération.'
    },
    {
      question: 'Comment recharger ma RdCard ?',
      answer: 'Vous pouvez recharger votre RdCard via mobile money (M-Pesa, Airtel Money, Orange Money), virement bancaire, ou en espèces dans nos points de service.'
    },
    {
      question: 'La RdCard est-elle sécurisée ?',
      answer: 'Absolument ! RdCard utilise un cryptage de niveau bancaire, une authentification biométrique et des protocoles de sécurité avancés pour protéger vos données et vos transactions.'
    },
    {
      question: 'Puis-je utiliser RdCard pour mon entreprise ?',
      answer: 'Oui ! RdCard est parfaite pour les entreprises. Elle permet de gérer les paiements des employés, le pointage de présence et facilite la gestion administrative au quotidien.'
    },
    {
      question: 'Quels sont les avantages pour les entreprises ?',
      answer: 'RdCard offre une gestion simplifiée des paiements, un suivi en temps réel des transactions, une réduction des coûts administratifs et une sécurité maximale pour toutes vos opérations.'
    },
    {
      question: 'Que faire si je perds ma carte ?',
      answer: 'Contactez immédiatement notre service client au +243 828 280 000 pour bloquer votre carte. Nous vous enverrons une nouvelle carte sous 48h sans frais supplémentaires.'
    }
  ];

  const useCases = [
    {
      title: 'Pour les Entreprises',
      icon: Users,
      color: 'from-cyan-500 to-blue-600',
      points: [
        'Gestion des salaires et avances',
        'Pointage automatisé des employés',
        'Contrôle des dépenses',
        'Intégration comptable'
      ]
    },
    {
      title: 'Pour les Particuliers',
      icon: Smartphone,
      color: 'from-secondary-500 to-red-600',
      points: [
        'Paiements quotidiens sécurisés',
        'Identification officielle',
        'Gestion budgétaire simplifiée',
        'Pas de compte bancaire requis'
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-5 w-5 text-yellow-300" />
              <span className="text-sm font-medium">Innovation Made in Congo</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              RdCard
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-secondary-400 font-bold mb-6">
              La carte intelligente tout-en-un
            </p>
            <p className="text-xl text-blue-100 leading-relaxed">
              Paiement, identification, pointage et intégration ERP dans une seule carte révolutionnaire
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-secondary-500 rounded-3xl blur-2xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-yellow-400 via-secondary-500 to-red-600 rounded-3xl p-8 aspect-[1.6/1] shadow-2xl transform hover:scale-105 transition-transform">
                <div className="flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Acoriss</p>
                      <p className="text-white font-bold text-2xl">RdCard</p>
                    </div>
                    <CreditCard className="h-12 w-12 text-white/80" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex space-x-1">
                          {[...Array(4)].map((_, j) => (
                            <div key={j} className="w-2 h-2 rounded-full bg-white/60"></div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <p className="text-white text-lg font-mono">Jean Kabongo</p>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/60 text-xs">Valid Thru</p>
                      <p className="text-white font-mono">12/28</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <p className="text-white text-xs font-bold">ID VERIFIED</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités Principales
            </h2>
            <p className="text-xl text-gray-600">
              Une carte, quatre fonctions essentielles
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-r ${feature.color} p-4 rounded-xl inline-block mb-6`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
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
              Les Avantages RdCard
            </h2>
            <p className="text-xl text-gray-600">
              Pourquoi choisir RdCard ?
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <advantage.icon className="h-8 w-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl">
                <div className={`bg-gradient-to-r ${useCase.color} p-4 rounded-xl inline-block mb-6`}>
                  <useCase.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {useCase.title}
                </h3>
                <ul className="space-y-4">
                  {useCase.points.map((point, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className={`bg-gradient-to-r ${useCase.color} p-1 rounded-full mt-1`}>
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Obtenez votre RdCard en 4 étapes simples
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-xl">
                      <span className="text-3xl font-bold text-white">{item.step}</span>
                    </div>
                    {index < howItWorks.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all inline-flex items-center space-x-2">
              <span>Obtenir ma RdCard</span>
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur RdCard
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <button
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-bold text-gray-900 text-lg pr-8">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <Minus className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                  ) : (
                    <Plus className="h-6 w-6 text-cyan-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
            <button className="text-cyan-600 font-semibold hover:text-cyan-700 inline-flex items-center space-x-2">
              <span>Contactez notre support</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à découvrir RdCard ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez des milliers d'utilisateurs qui ont déjà adopté la carte intelligente
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Commander ma RdCard
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Demander une démo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RdCard;
