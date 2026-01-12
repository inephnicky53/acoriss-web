import {
  Target,
  Eye,
  Heart,
  Users,
  TrendingUp,
  Award,
  Lightbulb,
  HandshakeIcon
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la transparence et l\'intégrité',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous repoussons les limites avec des solutions technologiques de pointe',
      color: 'from-yellow-500 to-secondary-600'
    },
    {
      icon: HandshakeIcon,
      title: 'Proximité',
      description: 'Nous sommes à l\'écoute de nos clients et partenaires au quotidien',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque service que nous offrons',
      color: 'from-emerald-500 to-teal-600'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Création d\'Acoriss',
      description: 'Lancement de nos services de conseil et consulting à Kinshasa'
    },
    {
      year: '2022',
      title: 'Expansion des services',
      description: 'Ajout des services de paiement, change et expertise multi-sectorielle'
    },
    {
      year: '2023',
      title: 'Services automobiles',
      description: 'Diversification avec lavage, transport, location et garage'
    },
    {
      year: '2024',
      title: 'Lancement RdCard',
      description: 'Innovation majeure avec notre carte intelligente multifonction'
    }
  ];

  const stats = [
    { value: '500+', label: 'Clients satisfaits' },
    { value: '1000+', label: 'Projets réalisés' },
    { value: '50+', label: 'Partenaires' },
    { value: '24/7', label: 'Support disponible' }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos d'Acoriss
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Depuis 2021, nous accompagnons les entreprises congolaises dans leur transformation digitale et leur croissance avec des solutions innovantes et adaptées.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full mb-6">
                <Target className="h-5 w-5" />
                <span className="text-sm font-medium">Notre Mission</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simplifier et moderniser les services financiers en RDC
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Acoriss Sarl est une entreprise congolaise spécialisée dans les solutions d'encaissement, de paiement, de change et de services automobiles. Notre mission est de faciliter la vie des entreprises et des particuliers grâce à la technologie.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec RdCard, notre carte intelligente, nous franchissons une nouvelle étape dans l'innovation en combinant paiement, identification et gestion de présence dans une seule solution.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-cyan-100 rounded-full p-3">
                        <Target className="h-8 w-8 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Mission</h3>
                        <p className="text-gray-600">Simplifier vos opérations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <Eye className="h-8 w-8 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Vision</h3>
                        <p className="text-gray-600">Leader de l'innovation financière</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-orange-100 rounded-full p-3">
                        <TrendingUp className="h-8 w-8 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">Ambition</h3>
                        <p className="text-gray-600">Transformation digitale accessible</p>
                      </div>
                    </div>
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
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les principes qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <div className={`bg-gradient-to-r ${value.color} p-4 rounded-xl inline-block mb-6`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Parcours
            </h2>
            <p className="text-xl text-gray-600">
              Une histoire d'innovation et de croissance continue
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:text-right md:even:text-left">
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block relative">
                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {stat.value}
                </div>
                <p className="text-gray-300 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="h-16 w-16 mx-auto mb-6 text-cyan-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez l'aventure Acoriss
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Ensemble, construisons l'avenir des services financiers en RDC
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
