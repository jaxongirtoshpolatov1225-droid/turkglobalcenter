import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Navigation,
  Calendar,
  Users
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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Manzil',
      details: [
        'Toshkent shahar, Chilonzor tumani',
        'Mustaqillik ko\'chasi, 123-uy'
      ],
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Telefon',
      details: [
        '+998 90 123 45 67',
        '+998 71 234 56 78'
      ],
      color: 'green'
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@turkglobalcenter.uz',
        'support@turkglobalcenter.uz'
      ],
      color: 'purple'
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: [
        'Dushanba - Juma: 08:00 - 20:00',
        'Shanba: 09:00 - 18:00',
        'Yakshanba: 10:00 - 16:00'
      ],
      color: 'orange'
    }
  ];

  const departments = [
    {
      name: 'Ayollar sport zali',
      phone: '+998 90 123 45 67',
      email: 'fitness@turkglobalcenter.uz',
      hours: '08:00 - 20:00'
    },
    {
      name: 'Go\'zallik markazi',
      phone: '+998 90 123 45 68',
      email: 'beauty@turkglobalcenter.uz',
      hours: '09:00 - 19:00'
    },
    {
      name: 'Poliklinika',
      phone: '+998 90 123 45 69',
      email: 'polyclinic@turkglobalcenter.uz',
      hours: '08:00 - 20:00'
    },
    {
      name: 'Laboratoriya',
      phone: '+998 90 123 45 70',
      email: 'laboratory@turkglobalcenter.uz',
      hours: '08:00 - 18:00'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Xabar yuborildi!</h1>
            <p className="text-gray-600 mb-8">
              Sizning xabaringiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Yangi xabar yuborish
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

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
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">Aloqa</h1>
            <p className="text-xl mb-8 opacity-90">
              Biz bilan bog'laning va savollaringizga javob oling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Aloqa ma'lumotlari</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Biz bilan bog'lanish uchun quyidagi ma'lumotlardan foydalaning
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  info.color === 'blue' ? 'bg-blue-100' :
                  info.color === 'green' ? 'bg-green-100' :
                  info.color === 'purple' ? 'bg-purple-100' :
                  'bg-orange-100'
                }`}>
                  <info.icon className={`w-8 h-8 ${
                    info.color === 'blue' ? 'text-blue-600' :
                    info.color === 'green' ? 'text-green-600' :
                    info.color === 'purple' ? 'text-purple-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Bizning manzil</h3>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Navigation className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Google Maps integratsiyasi</p>
                    <p className="text-sm text-gray-500">Toshkent shahar, Chilonzor tumani</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tezkor aloqa</h4>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/998901234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 text-white hover:bg-green-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>WhatsApp</span>
                  </a>
                  
                  <a
                    href="https://t.me/turkglobalcenter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Telegram</span>
                  </a>
                  
                  <a
                    href="tel:+998901234567"
                    className="w-full bg-primary-600 text-white hover:bg-primary-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Qo'ng'iroq qiling</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Bizga xabar yuboring</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ism va familiya *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Ism va familiya"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon raqam *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="+998 90 123 45 67"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email manzil
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mavzu
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Xabar mavzusi"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Xabar *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Xabaringizni yozing..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Xabar yuborish</span>
                </button>
              </form>
            </motion.div>
          </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bo'limlar bo'yicha aloqa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Har bir bo'lim uchun alohida aloqa ma'lumotlari
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{department.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-600">{department.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-600">{department.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary-600" />
                    <span className="text-sm text-gray-600">{department.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tez-tez so'raladigan savollar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eng ko'p so'raladigan savollarga javoblar
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Qabulga yozilish uchun qanday jarayon?',
                answer: 'Qabulga yozilish uchun bizning veb-saytimizdagi formani to\'ldiring yoki telefon orqali bog\'laning. Biz sizga eng qulay vaqtni taklif qilamiz.'
              },
              {
                question: 'Qabul narxlari qanday?',
                answer: 'Har bir xizmat uchun alohida narxlar mavjud. Batafsil ma\'lumot uchun bizning xizmatlar sahifasini ko\'ring yoki telefon orqali so\'rang.'
              },
              {
                question: 'Shoshilinch holatda qanday yordam olish mumkin?',
                answer: 'Shoshilinch holatda +998 90 123 45 67 raqamiga qo\'ng\'iroq qiling. Biz 24/7 shoshilinch tibbiy yordam xizmatini taqdim etamiz.'
              },
              {
                question: 'Karta qabul qilinadimi?',
                answer: 'Ha, biz barcha turdagi bank kartalarini qabul qilamiz. Naqd pul, bank kartasi va bank o\'tkazmalari qabul qilinadi.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
