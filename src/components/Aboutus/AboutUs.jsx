// src/pages/AboutUs.jsx
import React from 'react';
import pic1 from '../../assets/p1.jpg'; 
import pic2 from '../../assets/p2.jpg'; 
import pic3 from '../../assets/p3.jpg'; 

import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about-us" className="about-us">
    {/* <h2 className="about-us-title">About Us</h2> */}
    <div className="about-us-intro">
      <p className="about-us-description">Who We Are & What We Do</p>
    </div>
    <div className="about-us-container">
      <section className="section align-left">
        <img src={pic1} alt="Vision and Mission" className="image" />
        <div className="text-overlay">
          <h2>Our Vision and Mission</h2>
          <p>
          Our vision is to create a safe and empowering environment for vulnerable children and their families by eradicating poverty. Our mission is to empower communities through education, skill development, and economic opportunities, fostering sustainable growth and ensuring access to quality care, education, and support for all, including the elderly.
          </p>
        </div>
      </section>

      <section className="section align-right">
        <div className="text-overlay">
          <h2>Why do we exist?</h2>
          <p>
          The organization exists to create a safer, happier, and more equitable environment for vulnerable communities. It is committed to eradicating poverty and promoting social justice by empowering marginalized individuals through health, education, skill-building, and sustainable development. The work seeks to uplift rural youth, women, children, and senior citizens, ensuring they have access to essential services and opportunities for a better quality of life.
          </p>
        </div>
        <img src={pic2} alt="Why We Exist" className="image" />
      </section>

      <section className="section align-left">
        <img src={pic3} alt="Who Are the Beneficiaries?" className="image" />
        <div className="text-overlay">
          <h2>Who are the beneficiaries?</h2>
          <p>
          We serve vulnerable children, women, youth, senior citizens, disabled individuals, and underprivileged students. Our programs include crèche centers for children, vocational training for women and youth, care for the elderly, and skill development for the disabled. We also provide educational support to poor students and families, helping them build a brighter, more sustainable future.
          </p>
        </div>
      </section>
    </div>
    </section>
  );
};

export default AboutUs;
