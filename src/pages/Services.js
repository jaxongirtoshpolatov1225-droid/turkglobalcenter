import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Microscope,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Ayollar sport zali',
      description: 'Professional fitness, yoga va sport mashg\'ulotlari. Sog\'lom va chiroyli bo\'lish uchun biz bilan birga bo\'ling!',
      icon: Activity,
      color: 'fitness',
      path: '/services/fitness',
      features: ['Fitness mashg\'ulotlari', 'Yoga darslari', 'Pilates', 'Aerobika'],
      price: '150,000 so\'m',
      duration: '60 daqiqa',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Go\'zallik markazi',
      description: 'Kosmetologiya, soch olish va SPA xizmatlari. Sizning go\'zalligingizni ta\'kidlaymiz!',
      icon: Sparkles,
      color: 'beauty',
      path: '/services/beauty',
      features: ['Kosmetologiya', 'Soch olish', 'SPA xizmatlari', 'Massaj'],
      price: '200,000 so\'m',
      duration: '90 daqiqa',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Poliklinika',
      description: 'Mutaxassis shifokorlar va tibbiy xizmatlar. Sog\'ligingizni himoya qilamiz!',
      icon: Stethoscope,
      color: 'medical',
      path: '/services/polyclinic',
      features: ['Umumiy terapiya', 'Kardiologiya', 'Endokrinologiya', 'Nevrologiya'],
      price: '100,000 so\'m',
      duration: '30 daqiqa',
      image: '/api/placeholder/400/300'
    },
    {
      title: 'Laboratoriya',
      description: 'Tibbiy tahlillar va diagnostika xizmatlari. Sog\'ligingizni to\'liq tekshiring!',
      icon: Microscope,
      color: 'medical',
      path: '/services/laboratory',
      features: ['Qon tahlili', 'Siydik tahlili', 'Gormon tahlili', 'Infeksiya tahlili'],
      price: '80,000 so\'m',
      duration: '1 kun',
      image: '/api/placeholder/400/300'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Mamnun mijozlar' },
    { number: '15+', label: 'Yillik tajriba' },
    { number: '50+', label: 'Mutaxassis shifokorlar' },
    { number: '4', label: 'Xizmat yo\'nalishi' }
  ];

  const testimonials = [
    {
      name: 'Malika Karimova',
      service: 'Ayollar sport zali',
      content: 'Turk Global Center\'da sport mashg\'ulotlari juda qiziqarli. Trenerlar professional va yordamchi.',
      rating: 5
    },
    {
      name: 'Dilnoza Toshmatova',
      service: 'Go\'zallik markazi',
      content: 'Go\'zallik markazida xizmatlar ajoyib. Kosmetologlar juda tajribali va natijalar ajoyib.',
      rating: 5
    },
    {
      name: 'Oydin Mirzayeva',
      service: 'Poliklinika',
      content: 'Shifokorlar juda professional. Tibbiy xizmatlar sifatli va tez.',
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 medical-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Bizning xizmatlarimiz</h1>
            <p className="text-xl mb-8 opacity-90">
              Turk Global Center'da siz uchun to'liq tibbiy, go'zallik va sport xizmatlari mavjud
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">To'liq xizmatlar ro'yxati</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har bir xizmat uchun batafsil ma'lumot va professional yondashuv
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link to={service.path} className="block">
                  <div className="card group-hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        service.color === 'fitness' ? 'fitness-gradient' :
                        service.color === 'beauty' ? 'beauty-gradient' :
                        'medical-gradient'
                      }`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                        
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{service.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-900">{service.price}</span>
                          </div>
                        </div>
                        
                        <ul className="grid grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                          <span>Batafsil ma'lumot</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nima uchun bizni tanlash kerak?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizning afzalliklarimiz va professional yondashuvimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional xizmat</h3>
              <p className="text-gray-600">Tajribali mutaxassislar va zamonaviy usullar</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Individual yondashuv</h3>
              <p className="text-gray-600">Har bir mijoz uchun maxsus dastur va yondashuv</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qulay vaqt</h3>
              <p className="text-gray-600">Sizning ish vaqtingizga moslashgan jadval</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mijozlarimiz fikri</h2>
            <p className="text-xl text-gray-600">Bizning xizmatlarimiz haqida mijozlarimizning sharhlari</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding medical-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Bugun xizmatlarimizdan foydalaning!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional tibbiy, go'zallik va sport xizmatlari
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Qabulga yozilish</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+998901234567"
                className="bg-primary-600 text-white hover:bg-primary-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Qo'ng'iroq qiling</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
