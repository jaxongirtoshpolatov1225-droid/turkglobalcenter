import React from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, 
  Heart, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Users,
  Award,
  Calendar,
  Phone,
  Activity,
  Shield,
  Microscope,
  Eye,
  Brain,
  Baby
} from 'lucide-react';

const Polyclinic = () => {
  const departments = [
    {
      title: 'Umumiy terapiya',
      description: 'Umumiy tekshiruv va asosiy tibbiy xizmatlar',
      icon: Stethoscope,
      price: '100,000 so\'m',
      features: ['Umumiy tekshiruv', 'Qon bosimi', 'Tana harorati', 'Nafas olish']
    },
    {
      title: 'Kardiologiya',
      description: 'Yurak va qon tomirlar kasalliklari',
      icon: Heart,
      price: '150,000 so\'m',
      features: ['EKG', 'Echo-kardiografiya', 'Holter monitoring', 'Stress test']
    },
    {
      title: 'Endokrinologiya',
      description: 'Gormon kasalliklari va diabet',
      icon: Activity,
      price: '120,000 so\'m',
      features: ['Qon shakari', 'Gormon tahlili', 'Insulin terapiya', 'Dieta maslahati']
    },
    {
      title: 'Nevrologiya',
      description: 'Asab tizimi kasalliklari',
      icon: Brain,
      price: '130,000 so\'m',
      features: ['Nevrologik tekshiruv', 'EEG', 'MRI', 'Reabilitatsiya']
    },
    {
      title: 'Oftalmologiya',
      description: 'Ko\'z kasalliklari va ko\'rish muammolari',
      icon: Eye,
      price: '110,000 so\'m',
      features: ['Ko\'rish tekshiruvi', 'Glaukoma tekshiruvi', 'Katarakta', 'Lazer davolash']
    },
    {
      title: 'Pediatriya',
      description: 'Bolalar tibbiyoti va rivojlanish',
      icon: Baby,
      price: '90,000 so\'m',
      features: ['Bolalar tekshiruvi', 'Vaksinatsiya', 'Rivojlanish nazorati', 'Ota-onalar maslahati']
    }
  ];

  const doctors = [
    {
      name: 'Dr. Malika Karimova',
      specialization: 'Umumiy terapevt',
      experience: '15 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Toshkent tibbiyot instituti',
      specialties: ['Umumiy terapiya', 'Kardiologiya', 'Endokrinologiya']
    },
    {
      name: 'Dr. Dilnoza Toshmatova',
      specialization: 'Kardiolog',
      experience: '12 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Rossiya tibbiyot universiteti',
      specialties: ['Kardiologiya', 'Echo-kardiografiya', 'Arterial gipertenziya']
    },
    {
      name: 'Dr. Oydin Mirzayeva',
      specialization: 'Endokrinolog',
      experience: '10 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Germaniya tibbiyot universiteti',
      specialties: ['Endokrinologiya', 'Diabet', 'Gormon kasalliklari']
    },
    {
      name: 'Dr. Farida Abdullayeva',
      specialization: 'Nevrolog',
      experience: '8 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Toshkent tibbiyot instituti',
      specialties: ['Nevrologiya', 'Migren', 'Epilepsiya']
    }
  ];

  const facilities = [
    {
      title: 'Zamonaviy jihozlar',
      description: 'Eng so\'nggi tibbiy diagnostika jihozlari',
      icon: Shield
    },
    {
      title: 'Professional shifokorlar',
      description: 'Tajribali va sertifikatlangan mutaxassislar',
      icon: Award
    },
    {
      title: 'Tezkor diagnostika',
      description: 'Natijalarni tezda olish imkoniyati',
      icon: Clock
    },
    {
      title: '24/7 xizmat',
      description: 'Kechayu kunduz tibbiy yordam',
      icon: Heart
    }
  ];

  return (
    <div className="pt-20">
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
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Stethoscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Poliklinika</h1>
            <p className="text-xl mb-8 opacity-90">
              Professional tibbiy xizmatlar va mutaxassis shifokorlar. Sog'ligingizni himoya qilamiz!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="#departments"
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Bo'limlarni ko'ring</span>
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
              Professional tibbiy xizmatlar va zamonaviy jihozlar
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
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tibbiy bo'limlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har xil yo'nalishdagi professional tibbiy xizmatlar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <department.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{department.title}</h3>
                      <p className="text-gray-600">{department.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{department.price}</div>
                    <div className="text-sm text-gray-500">Qabul narxi</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {department.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Qabulga yozilish</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning shifokorlar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional va tajribali tibbiy mutaxassislar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
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
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{doctor.specialization}</p>
                <p className="text-gray-600 mb-2">{doctor.experience} tajriba</p>
                <p className="text-sm text-gray-500 mb-4">{doctor.education}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(doctor.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {doctor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Qabulga yozilish
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="section-padding bg-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shoshilinch tibbiy yordam</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Shoshilinch holatlar uchun 24/7 tibbiy yordam xizmati
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-red-600 text-white hover:bg-red-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <Phone className="w-6 h-6" />
                <span>Shoshilinch qo'ng'iroq: +998 90 123 45 67</span>
              </a>
            </div>
          </motion.div>
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
              Sog'ligingizni himoya qiling!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional tibbiy xizmatlar va mutaxassis shifokorlar
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="/appointment"
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Qabulga yozilish</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Polyclinic;
