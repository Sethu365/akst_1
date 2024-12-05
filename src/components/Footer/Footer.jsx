// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Ensure the path is correct
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/ashakiranasevatrust/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="bi bi-facebook"></i></a>
        <a href="https://x.com/AshaKiranaSeva" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-twitter-x"></i></a>
        <a href="https://www.youtube.com/channel/UCx7XLEMeiovd_3q1kSOCEaQ/videos" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-youtube"></i></a>
      </div>
      <div className="footer-bottom">
        <p>Asha Kirana Seva Trust &copy; {new Date().getFullYear()} - Designed by Velox.</p>
      </div>
    </footer>
  );
};

export default Footer;
