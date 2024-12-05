import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Front from './components/Front/Front';
import Services from './components/Service/Services';
import AboutUs from './components/Aboutus/AboutUs';
import Programs from './components/Programs/Programs';
import Activities from './components/Activities/Activities';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Front />} />
        <Route path="/services" element={<Services />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid paths */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
