import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Microscope,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Ayollar sport zali',
      description: 'Professional fitness, yoga va sport mashg\'ulotlari',
      icon: Activity,
      color: 'fitness',
      path: '/services/fitness',
      features: ['Fitness mashg\'ulotlari', 'Yoga darslari', 'Personal trener', 'Grup mashg\'ulotlari']
    },
    {
      title: 'Go\'zallik markazi',
      description: 'Kosmetologiya, soch va spa xizmatlari',
      icon: Sparkles,
      color: 'beauty',
      path: '/services/beauty',
      features: ['Kosmetologiya', 'Soch olish', 'SPA xizmatlari', 'Massaj']
    },
    {
      title: 'Poliklinika',
      description: 'Mutaxassis shifokorlar va tibbiy xizmatlar',
      icon: Stethoscope,
      color: 'medical',
      path: '/services/polyclinic',
      features: ['Umumiy tekshiruv', 'Mutaxassis shifokorlar', 'Diagnostika', 'Davolash']
    },
    {
      title: 'Laboratoriya',
      description: 'Tibbiy tahlillar va diagnostika xizmatlari',
      icon: Microscope,
      color: 'medical',
      path: '/services/laboratory',
      features: ['Qon tahlili', 'Biokimyoviy tahlil', 'Mikrobiologiya', 'Genetika']
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
      role: 'Mijoz',
      content: 'Turk Global Center\'da barcha xizmatlar juda sifatli. Shifokorlar professional va xizmat ko\'rsatish darajasi yuqori.',
      rating: 5
    },
    {
      name: 'Dilnoza Toshmatova',
      role: 'Mijoz',
      content: 'Ayollar sport zalida mashg\'ulotlar juda qiziqarli. Trenerlar professional va yordamchi.',
      rating: 5
    },
    {
      name: 'Oydin Mirzayeva',
      role: 'Mijoz',
      content: 'Go\'zallik markazida xizmatlar ajoyib. Kosmetologlar juda tajribali va natijalar ajoyib.',
      rating: 5
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-beauty-50"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0f2fe%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary-600">Turk Global Center</span><br />
                  Ko'p xizmatli tibbiy markaz
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Toshkentdagi eng yaxshi ko'p xizmatli tibbiy markaz. Sog'liq, go'zallik va sport xizmatlarini bitta joyda taklif etamiz.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/appointment"
                  className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Qabulga yozilish</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/services"
                  className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                >
                  <span>Xizmatlarimiz</span>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Professional shifokorlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Zamonaviy jihozlar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">24/7 qo'llab-quvvatlash</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Arzon narxlar</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-beauty-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="w-12 h-12 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Turk Global Center</h3>
                    <p className="text-gray-600">Sog'liq va go'zallik markazi</p>
                  </div>
                </div>
                
                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-800">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Mijozlar bahosi</p>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-gray-800">5000+</span>
                  </div>
                  <p className="text-sm text-gray-600">Mamnun mijozlar</p>
                </div>
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning xizmatlarimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turk Global Center'da siz uchun to'liq tibbiy, go'zallik va sport xizmatlari mavjud
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                      service.color === 'fitness' ? 'fitness-gradient' :
                      service.color === 'beauty' ? 'beauty-gradient' :
                      'medical-gradient'
                    }`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                      <span>Batafsil</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
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
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
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
              Bugun qabulga yoziling!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional tibbiy xizmatlar va go'zallik xizmatlaridan foydalaning
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
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manzil</h3>
              <p className="text-gray-600">
                Toshkent shahar, Chilonzor tumani<br />
                Mustaqillik ko'chasi, 123-uy
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-gray-600">
                +998 90 123 45 67<br />
                +998 71 234 56 78
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ish vaqti</h3>
              <p className="text-gray-600">
                Dushanba - Yakshanba<br />
                08:00 - 20:00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
