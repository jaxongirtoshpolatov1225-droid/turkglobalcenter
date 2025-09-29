import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock,
  Heart,
  Activity,
  Sparkles,
  Stethoscope,
  Microscope
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Bosh sahifa', path: '/' },
    { name: 'Biz haqimizda', path: '/about' },
    { 
      name: 'Xizmatlar', 
      path: '/services',
      dropdown: [
        { name: 'Ayollar sport zali', path: '/services/fitness', icon: Activity },
        { name: 'Go\'zallik markazi', path: '/services/beauty', icon: Sparkles },
        { name: 'Poliklinika', path: '/services/polyclinic', icon: Stethoscope },
        { name: 'Laboratoriya', path: '/services/laboratory', icon: Microscope }
      ]
    },
    { name: 'Shifokorlar', path: '/doctors' },
    { name: 'Qabulga yozilish', path: '/appointment' },
    { name: 'Blog', path: '/blog' },
    { name: 'Aloqa', path: '/contact' }
  ];

  return (
    <>
      {/* Combined Sticky Header */}
      <div className="sticky top-0 z-50 w-full">
        {/* Top Bar */}
        <div className="bg-primary-600 text-white py-2 hidden lg:block">
          <div className="container-custom">
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+998 90 075 12 34</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Surxandaryo viloyat, Termiz shahar</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Dushanba - Yakshanba: 08:00 - 20:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav className={`w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg backdrop-blur-custom' 
            : 'bg-white/95 backdrop-blur-custom'
        }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logoshape_03.svg" alt="Turk Global Center" className="w-24 h-24" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                  
                  {/* Dropdown for Services */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                          >
                            <subItem.icon className="w-5 h-5" />
                            <span>{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/appointment"
                className="btn-primary flex items-center space-x-2"
              >
                <span>Qabulga yozilish</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="container-custom py-4">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Mobile Dropdown */}
                      {item.dropdown && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-primary-600 rounded-lg transition-colors duration-200"
                            >
                              <subItem.icon className="w-4 h-4" />
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4">
                    <Link
                      to="/appointment"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full text-center block"
                    >
                      Qabulga yozilish
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
