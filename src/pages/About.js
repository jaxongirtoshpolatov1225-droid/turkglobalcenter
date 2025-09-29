import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Users, 
  Award, 
  Shield, 
  Clock,
  Phone,
  MapPin,
  Mail,
  CheckCircle,
  ArrowRight,
  Activity,
  Sparkles,
  Stethoscope,
  Microscope
} from 'lucide-react';

const About = () => {
  const values = [
    {
      title: 'Sifatli xizmat',
      description: 'Har bir mijoz uchun eng yaxshi xizmatni taqdim etamiz',
      icon: Award
    },
    {
      title: 'Professional yondashuv',
      description: 'Tajribali mutaxassislar va zamonaviy usullar',
      icon: Users
    },
    {
      title: 'Ishonchlilik',
      description: 'Mijozlarimizning ishonchini qo\'llab-quvvatlaymiz',
      icon: Shield
    },
    {
      title: 'Innovatsiya',
      description: 'Zamonaviy texnologiyalar va yangi usullar',
      icon: Star
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Turk Global Center asos solindi',
      description: 'Toshkentda birinchi ko\'p xizmatli tibbiy markaz ochildi'
    },
    {
      year: '2015',
      title: 'Zamonaviy jihozlar',
      description: 'Eng so\'nggi tibbiy jihozlar va texnologiyalar joriy etildi'
    },
    {
      year: '2018',
      title: 'Xalqaro sertifikat',
      description: 'Xalqaro tibbiy standartlarga muvofiq sertifikat olingan'
    },
    {
      year: '2023',
      title: 'Yangi binolar',
      description: 'Kengaytirilgan binolar va qo\'shimcha xizmatlar qo\'shildi'
    }
  ];

  const stats = [
    { number: '5000+', label: 'Mamnun mijozlar' },
    { number: '15+', label: 'Yillik tajriba' },
    { number: '50+', label: 'Mutaxassis shifokorlar' },
    { number: '4', label: 'Xizmat yo\'nalishi' }
  ];

  const team = [
    {
      name: 'Dr. Malika Karimova',
      position: 'Bosh direktor',
      experience: '20 yil',
      image: '/api/placeholder/300/300',
      specialties: ['Umumiy terapiya', 'Boshqaruv', 'Strategiya']
    },
    {
      name: 'Dr. Dilnoza Toshmatova',
      position: 'Bosh shifokor',
      experience: '15 yil',
      image: '/api/placeholder/300/300',
      specialties: ['Kardiologiya', 'Nevrologiya', 'Boshqaruv']
    },
    {
      name: 'Oydin Mirzayeva',
      position: 'Go\'zallik markazi rahbari',
      experience: '12 yil',
      image: '/api/placeholder/300/300',
      specialties: ['Kosmetologiya', 'SPA', 'Parvarish']
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
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Biz haqimizda</h1>
            <p className="text-xl mb-8 opacity-90">
              Turk Global Center - Toshkentdagi eng yaxshi ko'p xizmatli tibbiy markaz
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Bizning tariximiz</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Turk Global Center 2010-yilda Toshkent shahrida ochilgan ko'p xizmatli tibbiy markazdir. 
                  Bizning maqsadimiz - aholiga to'liq tibbiy, go'zallik va sport xizmatlarini bitta joyda 
                  taqdim etishdir.
                </p>
                <p>
                  15 yillik tajriba davomida biz 5000 dan ortiq mijozga xizmat ko'rsatdik va ularning 
                  ishonchini qozondik. Bizning markazimizda 4 ta asosiy yo'nalish bo'yicha xizmatlar 
                  mavjud: ayollar sport zali, go'zallik markazi, poliklinika va laboratoriya.
                </p>
                <p>
                  Biz zamonaviy jihozlar, tajribali mutaxassislar va xalqaro standartlarga muvofiq 
                  xizmatlar bilan ajralib turamiz. Har bir mijozning sog'ligi va qoniqishi biz uchun 
                  eng muhim masaladir.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <Heart className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Turk Global Center</h3>
                    <p className="text-gray-600">15 yillik tajriba</p>
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
                    <Users className="w-5 h-5 text-blue-600" />
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
      <section className="py-16 bg-gray-50">
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
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning qadriyatlarimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizning ishda rahbarlik qiluvchi asosiy tamoyillar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bizning tariximiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turk Global Center'ning rivojlanish yo'li
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-blue-600 rounded-full mx-8 flex-shrink-0"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Rahbariyat</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bizning professional rahbariyat jamoasi
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
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
                
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.experience} tajriba</p>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
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
              To'liq tibbiy, go'zallik va sport xizmatlari
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ayollar sport zali</h3>
              <p className="text-gray-600 mb-4">Fitness, yoga va sport mashg'ulotlari</p>
              <a
                href="/services/fitness"
                className="text-green-600 hover:text-green-700 font-medium flex items-center justify-center space-x-2"
              >
                <span>Batafsil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Go'zallik markazi</h3>
              <p className="text-gray-600 mb-4">Kosmetologiya, soch va SPA xizmatlari</p>
              <a
                href="/services/beauty"
                className="text-pink-600 hover:text-pink-700 font-medium flex items-center justify-center space-x-2"
              >
                <span>Batafsil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Poliklinika</h3>
              <p className="text-gray-600 mb-4">Mutaxassis shifokorlar va tibbiy xizmatlar</p>
              <a
                href="/services/polyclinic"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2"
              >
                <span>Batafsil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laboratoriya</h3>
              <p className="text-gray-600 mb-4">Tibbiy tahlillar va diagnostika</p>
              <a
                href="/services/laboratory"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2"
              >
                <span>Batafsil</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
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
              Biz bilan bog'laning!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sog'ligingiz va go'zalligingiz uchun professional xizmatlar
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
                <span>Qabulga yozilish</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
