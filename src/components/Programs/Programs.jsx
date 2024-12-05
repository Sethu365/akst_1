import React from 'react';
import { IconContext } from "react-icons";  
import { FaBookOpen, FaHeartbeat, FaBriefcase, FaLeaf, FaUsers } from 'react-icons/fa';

import './Programs.css';

const Programs = () => {
  return (
    <section id="programs" className="programs">
      
      <div className="programs-container">
        <section className="programs-intro">
          <h2 className="programs-title">Major Running Programs</h2>
          <p className="programs-description">
            Asha Kirana Seva Trust runs several key programs that aim to empower communities and improve lives across various sectors. These programs address immediate needs while fostering sustainable change.
          </p>
        </section>

        <section className="programs-list">
          <ProgramCard
            
            title={<><i className="di bi-book"></i>Education Support</>}
            details={[
              "Support for poor children’s education",
              "Special coaching classes for weak students",
              "Literacy awareness programs",
              "Computer education for youth, housewives, and schoolchildren",
              "Crèche centers for working mothers"
            ]}
          />

          <ProgramCard
           
            title={<><i class="di bi-heart-pulse-fill"></i>Health & Welfare</>}
            details={[
              "Health education & organic herbal products awareness",
              "Health check-ups for children",
              "Medical services in urban/rural slums",
              "Day care centers for senior citizens",
              "Nutrition programs for children"
            ]}
          />

          <ProgramCard
  
            title={<><i class="diii bi-briefcase-fill"></i>Empowerment & Training</>}
            details={[
              "Women empowerment training programs",
              "Vocational training (Beautician, Fashion Design, etc.)",
              "Family counselling services",
              "Awareness programs for women"
            ]}
          />

          <ProgramCard
           
            title={<><i class="dii bi-tree-fill"></i>Agriculture & Environmental Support</>}
            details={[
              "Awareness on new agricultural methods, equipment, and organic farming",
              "Support for poor farmers, including seeds and organic supply",
              "Safe drinking water & rainwater harvesting programs",
              "Environmental awareness and sanitation"
            ]}
          />

          <ProgramCard
            
            title={<><i class="diii bi-people-fill"></i>Community Development</>}
            details={[
              "Community developmental programs",
              "Legal awareness programs",
              "Disabled welfare for multi-category children",
              "Senior citizen care and support"
            ]}
          />
        </section>

        <Facilities />
        <SupportRequest />
      </div>
    </section>
  );
};

const ProgramCard = ({ icon, title, details }) => (
  <div className="programs-category">
    <div className="icon-container">{icon}</div>
    <h3 className="category-title">{title}</h3>
    <ul className="programs-details">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const Facilities = () => (
  <section className="facilities">
    <h2 className="facilities-title">Our Facilities</h2>
    <ul className="facilities-list">
      <li>Single, double, and triple occupancy rooms</li>
      <li>Attached toilets and furnished accommodation</li>
      <li>Vegetarian food and solar water heaters</li>
      <li>Dormitory, library, recreation room, and visitors room</li>
      <li>Dining room, kitchen, laundry, pooja room, and open courtyard</li>
    </ul>
  </section>
);

const SupportRequest = () => (
  <section className="support-request">
    <h2 className="support-title">Required Support for Old Age & Orphanage</h2>
    <p className="support-text">
      We request support from kind-hearted individuals to help us provide shelter, food, and hospitality to those in need, including our elderly residents. Your donations help us maintain and grow our efforts to uplift the most vulnerable members of our society.
    </p>
  </section>
);

export default Programs;
