import React from 'react';
import { motion } from 'framer-motion';
import { 
  Microscope, 
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
  Zap,
  TestTube,
  Droplets
} from 'lucide-react';

const Laboratory = () => {
  const tests = [
    {
      title: 'Qon tahlili',
      description: 'Umumiy qon tahlili va biokimyoviy ko\'rsatkichlar',
      duration: '1 kun',
      price: '80,000 so\'m',
      features: ['Umumiy qon tahlili', 'Biokimyoviy tahlil', 'Qand miqdori', 'Xolesterin']
    },
    {
      title: 'Siydik tahlili',
      description: 'Siydik tahlili va boshqa suyuqlik tahlillari',
      duration: '1 kun',
      price: '50,000 so\'m',
      features: ['Umumiy siydik tahlili', 'Siydik biokimyasi', 'Mikroskopiya', 'Kultivatsiya']
    },
    {
      title: 'Gormon tahlili',
      description: 'Gormon darajasini tekshirish',
      duration: '2-3 kun',
      price: '150,000 so\'m',
      features: ['Tireoid gormonlari', 'Insulin', 'Testosteron', 'Estrogen']
    },
    {
      title: 'Infeksiya tahlili',
      description: 'Virus va bakteriya infeksiyalarini aniqlash',
      duration: '3-5 kun',
      price: '200,000 so\'m',
      features: ['COVID-19', 'Gepatit', 'HIV', 'Boshqa infeksiyalar']
    },
    {
      title: 'Onkologik markerlar',
      description: 'Onkologik kasalliklarni erta aniqlash',
      duration: '3-5 kun',
      price: '300,000 so\'m',
      features: ['PSA', 'CEA', 'CA 125', 'AFP']
    },
    {
      title: 'Allergiya tahlili',
      description: 'Allergiya va immunitet tizimi tekshiruvi',
      duration: '5-7 kun',
      price: '250,000 so\'m',
      features: ['Allergiya paneli', 'IgE', 'IgG', 'IgA']
    }
  ];

  const specialists = [
    {
      name: 'Dr. Malika Karimova',
      specialization: 'Laboratoriya boshlig\'i',
      experience: '12 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Toshkent tibbiyot instituti',
      specialties: ['Biokimyoviy tahlil', 'Gematologiya', 'Mikrobiologiya']
    },
    {
      name: 'Dr. Dilnoza Toshmatova',
      specialization: 'Biokimyoviy tahlil mutaxassisi',
      experience: '8 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Rossiya tibbiyot universiteti',
      specialties: ['Biokimyoviy tahlil', 'Gormon tahlili', 'Onkologik markerlar']
    },
    {
      name: 'Dr. Oydin Mirzayeva',
      specialization: 'Mikrobiologiya mutaxassisi',
      experience: '10 yil',
      image: '/api/placeholder/300/300',
      rating: 5,
      education: 'Germaniya tibbiyot universiteti',
      specialties: ['Mikrobiologiya', 'Infeksiya tahlili', 'Antibiotik sezuvchanlik']
    }
  ];

  const facilities = [
    {
      title: 'Zamonaviy jihozlar',
      description: 'Eng so\'nggi laboratoriya jihozlari va texnologiyalar',
      icon: Microscope
    },
    {
      title: 'Tezkor natijalar',
      description: 'Natijalarni tezda va aniq olish imkoniyati',
      icon: Zap
    },
    {
      title: 'Professional mutaxassislar',
      description: 'Tajribali va sertifikatlangan laboratoriya mutaxassislari',
      icon: Award
    },
    {
      title: 'Xalqaro standartlar',
      description: 'Xalqaro tibbiy standartlarga muvofiq xizmat',
      icon: Shield
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 laboratory-gradient opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Microscope className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Tibbiy laboratoriya</h1>
            <p className="text-xl mb-8 opacity-90">
              Professional laboratoriya xizmatlari va aniq diagnostika. Sog'ligingizni to'liq tekshiring!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-laboratory-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="#tests"
                className="bg-laboratory-600 text-white hover:bg-laboratory-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Tahlillarni ko'ring</span>
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
              Professional laboratoriya xizmatlari va zamonaviy jihozlar
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
                <div className="w-16 h-16 bg-laboratory-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-8 h-8 text-laboratory-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section id="tests" className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Laboratoriya tahlillari</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har xil yo'nalishdagi professional laboratoriya tahlillari
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-laboratory-100 rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-laboratory-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{test.title}</h3>
                      <p className="text-gray-600">{test.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-laboratory-600">{test.price}</div>
                    <div className="text-sm text-gray-500">{test.duration}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {test.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-laboratory-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-laboratory-600 text-white hover:bg-laboratory-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Tahlilga yozilish</span>
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
              Professional va tajribali laboratoriya mutaxassislari
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
                <p className="text-laboratory-600 font-medium mb-2">{specialist.specialization}</p>
                <p className="text-gray-600 mb-2">{specialist.experience} tajriba</p>
                <p className="text-sm text-gray-500 mb-4">{specialist.education}</p>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(specialist.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {specialist.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-laboratory-100 text-laboratory-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-laboratory-600 text-white hover:bg-laboratory-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                  Konsultatsiya
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tahlil jarayoni</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tahlil qilish jarayoni qanday amalga oshiriladi
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-laboratory-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-laboratory-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Ro'yxatdan o'tish</h3>
              <p className="text-gray-600">Tahlil uchun ro'yxatdan o'ting va vaqtni belgilang</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-laboratory-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-laboratory-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Namuna olish</h3>
              <p className="text-gray-600">Professional mutaxassislar tomonidan namuna olinadi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-laboratory-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-laboratory-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Tahlil qilish</h3>
              <p className="text-gray-600">Zamonaviy jihozlar bilan aniq tahlil qilinadi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-laboratory-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-laboratory-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Natija olish</h3>
              <p className="text-gray-600">Tayyor natijalarni oling va shifokor bilan maslahatlashing</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding laboratory-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Sog'ligingizni to'liq tekshiring!
            </h2>
            <p className="text-xl text-laboratory-100 mb-8">
              Professional laboratoriya xizmatlari va aniq diagnostika
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+998901234567"
                className="bg-white text-laboratory-600 hover:bg-gray-100 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Qo'ng'iroq qiling</span>
              </a>
              <a
                href="/appointment"
                className="bg-laboratory-600 text-white hover:bg-laboratory-700 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Tahlilga yozilish</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Laboratory;
