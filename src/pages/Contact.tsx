import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  Building2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '35, Avenue Kalemie\nGombe, Kinshasa\nRépublique Démocratique du Congo',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+243 828 280 000\nAppels & WhatsApp',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@acoriss.com\ninfo@acoriss.com',
      color: 'from-secondary-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven: 8h30 - 16h30\nSamedi: 8h30 - 13h00\nDimanche: Fermé',
      color: 'from-blue-500 to-indigo-600'
    }
  ];

  const offices = [
    {
      name: 'Siège Social - Gombe',
      address: '35, Avenue Kalemie, Gombe',
      phone: '+243 828 280 000',
      services: 'Tous services disponibles'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un message
                </h2>
                <p className="text-lg text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message envoyé !
                  </h3>
                  <p className="text-gray-600">
                    Merci pour votre message. Notre équipe vous contactera très prochainement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jean Kabongo"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="+243 XXX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="rdcard">RdCard - Information</option>
                      <option value="services">Nos services</option>
                      <option value="partnership">Partenariat</option>
                      <option value="support">Support technique</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Envoyer le message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations de contact
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl flex-shrink-0`}>
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 whitespace-pre-line leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-3xl p-8 text-white">
                <MessageCircle className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-3">
                  Besoin d'une réponse rapide ?
                </h3>
                <p className="text-blue-100 mb-6">
                  Contactez-nous directement sur WhatsApp pour une assistance immédiate.
                </p>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all w-full">
                  Ouvrir WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Bureaux
            </h2>
            <p className="text-xl text-gray-600">
              Rendez-nous visite à Kinshasa
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-xl flex-shrink-0">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {office.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 text-gray-600">
                        <MapPin className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <Phone className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="font-medium text-green-600">{office.services}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nous Trouver
            </h2>
            <p className="text-xl text-gray-600">
              35, Avenue Kalemie, Gombe - Kinshasa
            </p>
          </div>

          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.441826889955!2d15.311896!3d-4.319574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTknMTAuNSJTIDE1wrAxOCc0Mi44IkU!5e0!3m2!1sen!2scd!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 text-center">
              <MapPin className="h-10 w-10 text-cyan-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Quartier Gombe</h4>
              <p className="text-sm text-gray-600">Centre-ville de Kinshasa, facilement accessible</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 text-center">
              <Clock className="h-10 w-10 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Horaires flexibles</h4>
              <p className="text-sm text-gray-600">Ouvert du lundi au samedi</p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-red-50 rounded-2xl p-6 text-center">
              <Phone className="h-10 w-10 text-secondary-600 mx-auto mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Support réactif</h4>
              <p className="text-sm text-gray-600">Réponse garantie sous 24h</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactez-nous dès aujourd'hui pour une consultation gratuite
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all">
              Prendre rendez-vous
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Appeler maintenant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
