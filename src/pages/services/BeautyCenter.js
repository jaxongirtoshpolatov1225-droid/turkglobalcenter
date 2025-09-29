import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Scissors, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Award,
  Calendar,
  Phone,
  Zap,
  Flower2,
  Gem
} from 'lucide-react';

const BeautyCenter = () => {
  const services = [
    {
      title: 'Kosmetologiya xizmatlari',
      description: 'Professional kosmetologiya va teri parvarishi',
      duration: '60-90 daqiqa',
      price: '200,000 so\'m',
      features: ['Terini tozalash', 'Masaj', 'Maskalar', 'Professional parvarish']
    },
    {
      title: 'Soch olish',
      description: 'Professional soch olish va styling xizmatlari',
      duration: '120 daqiqa',
      price: '150,000 so\'m',
      features: ['Soch kesish', 'Rang berish', 'Styling', 'Keratin davolash']
    },
    {
      title: 'SPA xizmatlari',
      description: 'To\'liq SPA va dam olish xizmatlari',
      duration: '180 daqiqa',
      price: '500,000 so\'m',
      features: ['Hamam', 'Massaj', 'Aromaterapiya', 'Relaksatsiya']
    },
    {
      title: 'Massaj xizmatlari',
      description: 'Professional massaj va terapiya xizmatlari',
      duration: '60 daqiqa',
      price: '180,000 so\'m',
      features: ['Klassik massaj', 'Antitsellyulit', 'Refleksoterapiya', 'Aromaterapiya']
    },
    {
      title: 'Manikyur va pedikyur',
      description: 'Professional manikyur va pedikyur xizmatlari',
      duration: '90 daqiqa',
      price: '120,000 so\'m',
      features: ['Manikyur', 'Pedikyur', 'Gel-lak', 'Nail art']
    },
    {
      title: 'Qosh va kirpik xizmatlari',
      description: 'Qosh va kirpik parvarishi xizmatlari',
      duration: '45 daqiqa',
      price: '80,000 so\'m',
      features: ['Qosh shakllantirish', 'Kirpik uzaytirish', 'Henna', 'Laminatsiya']
    }
  ];

  const specialists = [
    {
      name: 'Malika Karimova',
      specialization: 'Kosmetolog',
      experience: '10 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['Kosmetologiya', 'Terini parvarish', 'Anti-aging']
    },
    {
      name: 'Dilnoza Toshmatova',
      specialization: 'Soch olish ustasi',
      experience: '8 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['Soch olish', 'Rang berish', 'Styling']
    },
    {
      name: 'Oydin Mirzayeva',
      specialization: 'SPA terapevt',
      experience: '6 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['SPA', 'Massaj', 'Aromaterapiya']
    }
  ];

  const facilities = [
    {
      title: 'Zamonaviy jihozlar',
      description: 'Eng so\'nggi kosmetologiya va SPA jihozlari',
      icon: Sparkles
    },
    {
      title: 'Professional mahsulotlar',
      description: 'Dunyoning eng yaxshi kosmetika brendlari',
      icon: Gem
    },
    {
      title: 'Shaxsiy xonalar',
      description: 'Maxfiylik va qulaylik uchun alohida xonalar',
      icon: Users
    },
    {
      title: 'Individual yondashuv',
      description: 'Har bir mijoz uchun maxsus dastur',
      icon: Heart
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 beauty-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Go'zallik markazi</h1>
            <p className="text-xl mb-8 opacity-90">
              Professional kosmetologiya, soch olish va SPA xizmatlari. Sizning go'zalligingizni ta'kidlaymiz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="#services"
                className="bg-pink-600 text-white hover:bg-pink-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Xizmatlarni ko'ring</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
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
              Professional go'zallik xizmatlari va tajribali mutaxassislar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Xizmatlarimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To'liq go'zallik va parvarish xizmatlari
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-pink-600 text-white hover:bg-pink-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Ro'yxatdan o'tish</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning mutaxassislar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional va tajribali go'zallik mutaxassislari
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{specialist.name}</h3>
                <p className="text-pink-600 font-medium mb-2">{specialist.specialization}</p>
                <p className="text-gray-600 mb-4">{specialist.experience} tajriba</p>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(specialist.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {specialist.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-pink-600 text-white hover:bg-pink-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Shaxsiy konsultatsiya
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price List Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Narxlar ro'yxati</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Barcha xizmatlar uchun to'liq narxlar ro'yxati
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Xizmat</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Davomiyligi</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Narx</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Holat</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Terini tozalash</td>
                    <td className="px-6 py-4 text-sm text-gray-600">60 daqiqa</td>
                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">150,000 so'm</td>
                    <td className="px-6 py-4 text-sm text-green-600">Mavjud</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Soch kesish</td>
                    <td className="px-6 py-4 text-sm text-gray-600">90 daqiqa</td>
                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">120,000 so'm</td>
                    <td className="px-6 py-4 text-sm text-green-600">Mavjud</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">SPA massaj</td>
                    <td className="px-6 py-4 text-sm text-gray-600">120 daqiqa</td>
                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">300,000 so'm</td>
                    <td className="px-6 py-4 text-sm text-green-600">Mavjud</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Manikyur</td>
                    <td className="px-6 py-4 text-sm text-gray-600">90 daqiqa</td>
                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">100,000 so'm</td>
                    <td className="px-6 py-4 text-sm text-green-600">Mavjud</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Qosh shakllantirish</td>
                    <td className="px-6 py-4 text-sm text-gray-600">30 daqiqa</td>
                    <td className="px-6 py-4 text-sm font-semibold text-pink-600">50,000 so'm</td>
                    <td className="px-6 py-4 text-sm text-green-600">Mavjud</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding beauty-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Go'zalligingizni ta'kidlang!
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Professional go'zallik xizmatlari va SPA xizmatlaridan foydalaning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-pink-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="/appointment"
                className="bg-pink-600 text-white hover:bg-pink-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Ro'yxatdan o'tish</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BeautyCenter;
