import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const location = useLocation();  // Get the current location (route)

  // Handle scroll and apply sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false); // Add sticky effect on scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if we're on the home page (front page)
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${sticky && !isHomePage ? 'dark-nav' : ''}`}> {/* Apply dark-nav when scrolling on non-home page */}
      <img src={logo} alt="Logo" className='logo' />
      <ul>
        <li><Link to="/" className={isHomePage ? 'white-text' : 'black-text'}>Home</Link></li>
        <li><Link to="/services" className={isHomePage ? 'white-text' : 'black-text'}>Services</Link></li>
        <li><Link to="/aboutus" className={isHomePage ? 'white-text' : 'black-text'}>About Us</Link></li>
        <li><Link to="/programs" className={isHomePage ? 'white-text' : 'black-text'}>Programs</Link></li>
        <li><Link to="/activities" className={isHomePage ? 'white-text' : 'black-text'}>Activities</Link></li>
        <li><Link to="/gallery" className={isHomePage ? 'white-text' : 'black-text'}>Gallery</Link></li>
        <li><Link to="/contact" className={isHomePage ? 'white-text' : 'black-text'}>Contact Us</Link></li>
        <li><Link to="/donate" className={isHomePage ? 'white-text' : 'black-text'}>
            <button className='btn'>Donate</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
