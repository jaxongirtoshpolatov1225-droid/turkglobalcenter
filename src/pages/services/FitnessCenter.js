import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Heart,
  Dumbbell,
  Zap,
  Target,
  Award,
  Calendar,
  Phone
} from 'lucide-react';

const FitnessCenter = () => {
  const programs = [
    {
      title: 'Fitness mashg\'ulotlari',
      description: 'Professional fitness mashg\'ulotlari va kardio treninglar',
      duration: '60 daqiqa',
      price: '150,000 so\'m',
      features: ['Kardio trening', 'Kuch treningi', 'Funksional mashg\'ulotlar', 'Personal trener']
    },
    {
      title: 'Yoga darslari',
      description: 'Yoga va meditatsiya mashg\'ulotlari',
      duration: '90 daqiqa',
      price: '120,000 so\'m',
      features: ['Hatha yoga', 'Vinyasa yoga', 'Meditatsiya', 'Nafas olish texnikalari']
    },
    {
      title: 'Pilates',
      description: 'Pilates va kichik guruh mashg\'ulotlari',
      duration: '45 daqiqa',
      price: '180,000 so\'m',
      features: ['Pilates mat', 'Pilates alyuminiy', 'Kichik guruh', 'Individual darslar']
    },
    {
      title: 'Aerobika',
      description: 'Zamonaviy aerobika va zumba darslari',
      duration: '50 daqiqa',
      price: '100,000 so\'m',
      features: ['Zumba', 'Aerobika', 'Step aerobika', 'Grup mashg\'ulotlari']
    }
  ];

  const trainers = [
    {
      name: 'Malika Karimova',
      specialization: 'Fitness trener',
      experience: '8 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['Fitness', 'Kardio', 'Kuch treningi']
    },
    {
      name: 'Dilnoza Toshmatova',
      specialization: 'Yoga instruktor',
      experience: '6 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['Yoga', 'Meditatsiya', 'Pilates']
    },
    {
      name: 'Oydin Mirzayeva',
      specialization: 'Aerobika instruktor',
      experience: '5 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      specialties: ['Aerobika', 'Zumba', 'Step']
    }
  ];

  const facilities = [
    {
      title: 'Zamonaviy jihozlar',
      description: 'Eng so\'nggi fitness jihozlari va mashqlar',
      icon: Dumbbell
    },
    {
      title: 'Shaxsiy kiyinish xonalari',
      description: 'Ayollar uchun alohida kiyinish xonalari va dush',
      icon: Users
    },
    {
      title: 'Professional trenerlar',
      description: 'Tajribali va sertifikatlangan trenerlar',
      icon: Award
    },
    {
      title: 'Moslashuvchan vaqt',
      description: 'Sizning ish vaqtingizga moslashgan darslar',
      icon: Clock
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 fitness-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Ayollar sport zali</h1>
            <p className="text-xl mb-8 opacity-90">
              Professional fitness, yoga va sport mashg'ulotlari. Sog'lom va chiroyli bo'lish uchun biz bilan birga bo'ling!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-green-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="#programs"
                className="bg-green-600 text-white hover:bg-green-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Dasturlarni ko'ring</span>
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
              Ayollar uchun maxsus yaratilgan sport zali va professional xizmatlar
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
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mashg'ulot dasturlari</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har xil darajadagi mashg'ulotlar va professional treninglar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{program.price}</div>
                    <div className="text-sm text-gray-500">{program.duration}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-600 text-white hover:bg-green-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Ro'yxatdan o'tish</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning trenerlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional va tajribali trenerlarimiz
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
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
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-green-600 font-medium mb-2">{trainer.specialization}</p>
                <p className="text-gray-600 mb-4">{trainer.experience} tajriba</p>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(trainer.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {trainer.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-green-600 text-white hover:bg-green-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Shaxsiy dars
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Darslar jadvali</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Haftalik darslar jadvali va mashg'ulot vaqtlari
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vaqt</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dushanba</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Seshanba</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Chorshanba</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Payshanba</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Juma</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Shanba</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">08:00-09:00</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pilates</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">09:00-10:00</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pilates</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">18:00-19:00</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pilates</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">19:00-20:00</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pilates</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Aerobika</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Yoga</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Pilates</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Fitness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding fitness-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Bugun mashg'ulotga qo'shiling!
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Sog'lom va chiroyli bo'lish uchun bizning sport zalimizga qo'shiling
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-green-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="/appointment"
                className="bg-green-600 text-white hover:bg-green-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
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

export default FitnessCenter;
