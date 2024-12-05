import React from 'react';
import './AboutUs.css';

const TeamMember = ({ name, role, imgSrc, linkedin }) => {
  return (
    <div className="team-member">
      <img className="team-member-img" src={imgSrc} alt={name} />
      <h4 className="team-member-name">{name}</h4>
      <p className="team-member-role">{role}</p>
      <div className="social-media">
        {linkedin && (
          <a href={linkedin} >
            <i className="bi bi-linkedin"></i>
          </a>
        )}
         </div>
    </div>
  );
};

export default TeamMember;
