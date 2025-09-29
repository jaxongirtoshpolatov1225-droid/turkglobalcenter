import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Service Pages
import FitnessCenter from './pages/services/FitnessCenter';
import BeautyCenter from './pages/services/BeautyCenter';
import Polyclinic from './pages/services/Polyclinic';
import Laboratory from './pages/services/Laboratory';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Service Pages */}
            <Route path="/services/fitness" element={<FitnessCenter />} />
            <Route path="/services/beauty" element={<BeautyCenter />} />
            <Route path="/services/polyclinic" element={<Polyclinic />} />
            <Route path="/services/laboratory" element={<Laboratory />} />
          </Routes>
        </motion.main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
