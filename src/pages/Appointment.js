import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  CheckCircle,
  Stethoscope,
  Activity,
  Sparkles,
  Microscope,
  ArrowRight
} from 'lucide-react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'fitness',
      name: 'Ayollar sport zali',
      icon: Activity,
      color: 'green',
      description: 'Fitness, yoga va sport mashg\'ulotlari'
    },
    {
      id: 'beauty',
      name: 'Go\'zallik markazi',
      icon: Sparkles,
      color: 'pink',
      description: 'Kosmetologiya, soch olish va SPA xizmatlari'
    },
    {
      id: 'polyclinic',
      name: 'Poliklinika',
      icon: Stethoscope,
      color: 'blue',
      description: 'Mutaxassis shifokorlar va tibbiy xizmatlar'
    },
    {
      id: 'laboratory',
      name: 'Laboratoriya',
      icon: Microscope,
      color: 'blue',
      description: 'Tibbiy tahlillar va diagnostika xizmatlari'
    }
  ];

  const doctors = [
    { id: 'malika', name: 'Dr. Malika Karimova', specialization: 'Umumiy terapevt' },
    { id: 'dilnoza', name: 'Dr. Dilnoza Toshmatova', specialization: 'Kardiolog' },
    { id: 'oydin', name: 'Dr. Oydin Mirzayeva', specialization: 'Endokrinolog' },
    { id: 'farida', name: 'Dr. Farida Abdullayeva', specialization: 'Nevrolog' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Telegram bot orqali xabar yuborish
      const message = `
🏥 *Yangi qabulga yozilish*

👤 *Ism:* ${formData.name}
📞 *Telefon:* ${formData.phone}
📧 *Email:* ${formData.email}
🏥 *Xizmat:* ${formData.service}
👨‍⚕️ *Shifokor:* ${formData.doctor}
📅 *Sana:* ${formData.date}
⏰ *Vaqt:* ${formData.time}
💬 *Xabar:* ${formData.message}

📝 *Vaqt:* ${new Date().toLocaleString('uz-UZ')}
      `;

      // Telegram bot API
      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN || 'YOUR_BOT_TOKEN';
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID || 'YOUR_CHAT_ID';
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Form ma'lumotlarini tozalash
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          doctor: '',
          date: '',
          time: '',
          message: ''
        });
      } else {
        alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-white rounded-xl shadow-lg p-8"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-3">Muvaffaqiyatli yuborildi!</h1>
            <p className="text-gray-600 mb-6 text-sm">
              Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary w-full"
            >
              Yangi so'rov yuborish
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
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
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Qabulga yozilish</h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
              Professional tibbiy xizmatlar uchun qabulga yoziling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Qabul formasi</h2>
              <p className="text-xl text-gray-600">
                Ma'lumotlaringizni to'ldiring va biz siz bilan bog'lanamiz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card p-4 md:p-6"
                >
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Ism va familiya *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
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
                            placeholder="+998 90 075 12 34"
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

                    {/* Service Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-4">
                        Xizmat turini tanlang *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {services.map((service) => (
                          <label
                            key={service.id}
                            className={`relative flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                              formData.service === service.id
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-gray-200 hover:border-gray-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={service.id}
                              checked={formData.service === service.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                              service.color === 'green' ? 'bg-green-100' :
                              service.color === 'pink' ? 'bg-pink-100' :
                              'bg-blue-100'
                            }`}>
                              <service.icon className={`w-6 h-6 ${
                                service.color === 'green' ? 'text-green-600' :
                                service.color === 'pink' ? 'text-pink-600' :
                                'text-blue-600'
                              }`} />
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{service.name}</div>
                              <div className="text-sm text-gray-600">{service.description}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Doctor Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Shifokor tanlang (ixtiyoriy)
                      </label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Shifokor tanlang</option>
                        {doctors.map((doctor) => (
                          <option key={doctor.id} value={doctor.id}>
                            {doctor.name} - {doctor.specialization}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Sana *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                            required
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vaqt *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <select
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Vaqtni tanlang</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qo'shimcha ma'lumot
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Qo'shimcha ma'lumot yozing..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary flex items-center justify-center space-x-2"
                    >
                      <span>Qabulga yozilish</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                </motion.div>
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Aloqa ma'lumotlari</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-600" />
                        <div>
                          <div className="font-medium text-gray-900">+998 90 075 12 34</div>
                          <div className="text-sm text-gray-600">Asosiy telefon</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary-600" />
                        <div>
                          <div className="font-medium text-gray-900">+998 71 234 56 78</div>
                          <div className="text-sm text-gray-600">Qo'shimcha telefon</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary-600" />
                        <div>
                          <div className="font-medium text-gray-900">info@turkglobalcenter.uz</div>
                          <div className="text-sm text-gray-600">Email manzil</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Ish vaqti</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dushanba - Juma:</span>
                        <span className="font-medium">08:00 - 20:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shanba:</span>
                        <span className="font-medium">09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Yakshanba:</span>
                        <span className="font-medium">10:00 - 16:00</span>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Tezkor aloqa</h3>
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
                        className="w-full bg-primary-600 text-white hover:bg-primary-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        <span>Telegram</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
