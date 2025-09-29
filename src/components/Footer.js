import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Phone, 
  MapPin, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Send
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Ayollar sport zali', path: '/services/fitness' },
    { name: 'Go\'zallik markazi', path: '/services/beauty' },
    { name: 'Poliklinika', path: '/services/polyclinic' },
    { name: 'Laboratoriya', path: '/services/laboratory' }
  ];

  const quickLinks = [
    { name: 'Biz haqimizda', path: '/about' },
    { name: 'Shifokorlar', path: '/doctors' },
    { name: 'Qabulga yozilish', path: '/appointment' },
    { name: 'Blog', path: '/blog' },
    { name: 'Aloqa', path: '/contact' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Telegram', icon: Send, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logoshape_03.svg" alt="Turk Global Center" className="w-24 h-24" loading="lazy" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Termiz shahridagi eng yaxshi ko'p xizmatli tibbiy markaz. Sog'liq, go'zallik va sport xizmatlarini bitta joyda taklif etamiz.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Xizmatlar</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tezkor havolalar</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Aloqa ma'lumotlari</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Termiz shahar, markaziy tuman<br />
                    Mustaqillik ko'chasi, 123-uy
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">+998 90 075 12 34</p>
                  <p className="text-gray-300 text-sm">+998 71 234 56 78</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@turkglobalcenter.uz</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Dushanba - Yakshanba<br />
                    08:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Turk Global Center. Barcha huquqlar himoyalangan.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Maxfiylik siyosati
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp & Telegram Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-40">
        <a
          href="https://wa.me/998901234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
        
        <a
          href="https://t.me/turkglobalcenter"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group"
          aria-label="Telegram"
        >
          <Send className="w-6 h-6 text-white" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
