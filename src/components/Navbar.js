import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: t('navigation.home'), path: '/' },
    { name: t('navigation.about'), path: '/about' },
    { 
      name: t('navigation.services'), 
      path: '/services',
      dropdown: [
        { name: t('services.fitnessCenter'), path: '/services/fitness', icon: Activity },
        { name: t('services.beautyCenter'), path: '/services/beauty', icon: Sparkles },
        { name: t('services.polyclinic'), path: '/services/polyclinic', icon: Stethoscope },
        { name: t('services.laboratory'), path: '/services/laboratory', icon: Microscope }
      ]
    },
    { name: t('navigation.doctors'), path: '/doctors' },
    { name: t('navigation.appointment'), path: '/appointment' },
    { name: t('navigation.blog'), path: '/blog' },
    { name: t('navigation.contact'), path: '/contact' }
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
          <nav className={`w-full transition-all duration-300 relative ${
            scrolled 
              ? 'bg-white shadow-lg backdrop-blur-custom' 
              : 'bg-white/95 backdrop-blur-custom'
          }`}>
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logoshape_03.svg" alt="Turk Global Center" className="w-24 h-24" loading="lazy" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
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
              
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/appointment"
                className="btn-primary flex items-center space-x-2"
              >
                <span>{t('navigation.appointment')}</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50"
              aria-label={isOpen ? "Menuni yopish" : "Menuni ochish"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden bg-white border-t border-gray-200 absolute top-full left-0 right-0 z-50 shadow-lg h-screen overflow-y-auto"
              role="navigation"
              aria-label="Asosiy navigatsiya"
            >
              <div className="container-custom py-4 h-full flex flex-col justify-center">
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
                  
                  <div className="pt-4 space-y-4">
                    <Link
                      to="/appointment"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full text-center block"
                    >
                      {t('navigation.appointment')}
                    </Link>
                    
                    {/* Mobile Language Switcher */}
                    <div className="px-4">
                      <LanguageSwitcher />
                    </div>
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
