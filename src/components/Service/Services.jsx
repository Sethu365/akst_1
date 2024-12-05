import React from 'react';
import './Services.css'; 
import { Link } from 'react-scroll';  

const Services = () => {
  return (
    <section id="services" className="services">
      {/* <h2 className="services-title">Our Services</h2> */}
      <div className="services-intro">
        <p className="services-description">What We Offer</p>
      </div>
      
      <div className="services-container">
        <ServiceCard
          title="Child Care & Education"
          description="We provide safe, educational care for children of working parents in urban slums. Our centers offer age-appropriate learning, nutritious meals, and a supportive environment to help children develop essential skills for their future."
        />
        <ServiceCard
          title="Vocational & Skill Development"
          description="We offer vocational training in areas such as computer skills, spoken English, and job readiness for women, youth, and disabled individuals. These programs empower participants with the skills needed to secure employment or start their own businesses."
        />
        <ServiceCard
          title="Senior Citizen Care"
          description="We provide shelter, care, and support for elderly individuals in a safe, peaceful environment. Our homes are designed to meet the emotional, physical, and healthcare needs of senior citizens."
        />
      </div>
      
      {/* Button below the services cards */}
      <div className="cta-btn-container">
        
        <Link to="donate" smooth={true} duration={500}>
        <button className="cta-btn">Join Us in Making a Difference!</button>
          </Link>
      </div>
    </section>
  );
};

const ServiceCard = ({ title, description }) => {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
    </div>
  );
};

export default Services;
