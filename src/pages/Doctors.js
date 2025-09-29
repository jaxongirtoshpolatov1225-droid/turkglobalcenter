import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Star, 
  Calendar, 
  Phone, 
  Mail,
  Award,
  Clock,
  CheckCircle,
  Stethoscope,
  Heart,
  Activity,
  Sparkles,
  Microscope
} from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Malika Karimova',
      specialization: 'Umumiy terapevt',
      experience: '15 yil',
      education: 'Toshkent tibbiyot instituti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Umumiy terapiya', 'Kardiologiya', 'Endokrinologiya'],
      schedule: 'Dushanba - Juma: 09:00 - 18:00',
      phone: '+998 90 123 45 67',
      email: 'malika@turkglobalcenter.uz'
    },
    {
      name: 'Dr. Dilnoza Toshmatova',
      specialization: 'Kardiolog',
      experience: '12 yil',
      education: 'Rossiya tibbiyot universiteti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Kardiologiya', 'Echo-kardiografiya', 'Arterial gipertenziya'],
      schedule: 'Dushanba - Shanba: 08:00 - 20:00',
      phone: '+998 90 123 45 68',
      email: 'dilnoza@turkglobalcenter.uz'
    },
    {
      name: 'Dr. Oydin Mirzayeva',
      specialization: 'Endokrinolog',
      experience: '10 yil',
      education: 'Germaniya tibbiyot universiteti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Endokrinologiya', 'Diabet', 'Gormon kasalliklari'],
      schedule: 'Seshanba - Payshanba: 10:00 - 19:00',
      phone: '+998 90 123 45 69',
      email: 'oydin@turkglobalcenter.uz'
    },
    {
      name: 'Dr. Farida Abdullayeva',
      specialization: 'Nevrolog',
      experience: '8 yil',
      education: 'Toshkent tibbiyot instituti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Nevrologiya', 'Migren', 'Epilepsiya'],
      schedule: 'Dushanba - Juma: 09:00 - 17:00',
      phone: '+998 90 123 45 70',
      email: 'farida@turkglobalcenter.uz'
    },
    {
      name: 'Dr. Zulfiya Karimova',
      specialization: 'Oftalmolog',
      experience: '14 yil',
      education: 'Rossiya tibbiyot universiteti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Oftalmologiya', 'Glaukoma', 'Katarakta'],
      schedule: 'Dushanba - Shanba: 08:00 - 18:00',
      phone: '+998 90 123 45 71',
      email: 'zulfiya@turkglobalcenter.uz'
    },
    {
      name: 'Dr. Nigora Toshmatova',
      specialization: 'Pediatr',
      experience: '11 yil',
      education: 'Toshkent tibbiyot instituti',
      rating: 5,
      image: '/api/placeholder/300/300',
      specialties: ['Pediatriya', 'Bolalar rivojlanishi', 'Vaksinatsiya'],
      schedule: 'Dushanba - Juma: 08:00 - 16:00',
      phone: '+998 90 123 45 72',
      email: 'nigora@turkglobalcenter.uz'
    }
  ];

  const departments = [
    {
      name: 'Umumiy terapiya',
      icon: Stethoscope,
      color: 'blue',
      doctors: 3
    },
    {
      name: 'Kardiologiya',
      icon: Heart,
      color: 'red',
      doctors: 2
    },
    {
      name: 'Endokrinologiya',
      icon: Activity,
      color: 'green',
      doctors: 1
    },
    {
      name: 'Nevrologiya',
      icon: Users,
      color: 'purple',
      doctors: 1
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
            <h1 className="text-5xl font-bold mb-6">Bizning shifokorlar</h1>
            <p className="text-xl mb-8 opacity-90">
              Professional va tajribali tibbiy mutaxassislar jamoasi
            </p>
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section-padding bg-white">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((department, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  department.color === 'blue' ? 'bg-blue-100' :
                  department.color === 'red' ? 'bg-red-100' :
                  department.color === 'green' ? 'bg-green-100' :
                  'bg-purple-100'
                }`}>
                  <department.icon className={`w-8 h-8 ${
                    department.color === 'blue' ? 'text-blue-600' :
                    department.color === 'red' ? 'text-red-600' :
                    department.color === 'green' ? 'text-green-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{department.name}</h3>
                <p className="text-gray-600">{department.doctors} ta shifokor</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shifokorlar ro'yxati</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional va tajribali tibbiy mutaxassislar
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{doctor.specialization}</p>
                  <p className="text-gray-600 mb-2">{doctor.experience} tajriba</p>
                  <p className="text-sm text-gray-500 mb-4">{doctor.education}</p>
                  
                  <div className="flex items-center justify-center space-x-1 mb-4">
                    {[...Array(doctor.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mutaxassislik yo'nalishlari:</h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{doctor.schedule}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href={`tel:${doctor.phone}`}
                    className="w-full bg-primary-600 text-white hover:bg-primary-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Qo'ng'iroq qiling</span>
                  </a>
                  
                  <a
                    href="/appointment"
                    className="w-full bg-white text-primary-600 hover:bg-primary-50 font-medium py-2 px-4 rounded-lg border border-primary-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Qabulga yozilish</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Professional shifokorlar</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-600">Yillik tajriba</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Mijozlar bahosi</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Shoshilinch yordam</div>
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
              Shifokor bilan maslahatlashing!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Professional tibbiy maslahat va davolash
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/appointment"
                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-4 px-8 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Qabulga yozilish</span>
              </a>
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
    </div>
  );
};

export default Doctors;
