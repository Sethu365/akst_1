import React from 'react';
import './Activities.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Activities = () => {
  return (
    <section id="activities" className="activities">
      <h2 className="activities-title">Activities of Asha Kirana Seva Trust (AKST)</h2>
      <p className="activities-description">
        Asha Kirana Seva Trust (AKST) is a Secular Non-Profit Voluntary Organization established in 1995. For the past 18 years, AKST has been working in various sectors such as Health, Education, Disabled Welfare, Women & Child Care, Senior Citizen Care, Environmental Programs, and Rural Development.
      </p>

      <div className="activities-list">
        <ActivityCard 
        title={<><i class="sii bi-people-fill"></i> Community Organizing</>} 
        details={[
          "Organizing the community in groups.",
          "Self-help group formation & saving and credit management for disabled persons and the downtrodden community."
        ]} />

        <ActivityCard
        title={<><i className="sii bi-mortarboard-fill"></i> Education Awareness</>}
        details={[
         "Importance of education to children and women.",
         "Integrated education for disabled children’s.",
         "Computer education for youths/skill development."
        ]} />

        <ActivityCard title={<><i class="si bi-tree"></i>Agriculture & Environment</>}
         details={[
          "Sustainable Agriculture.",
          "Soil and water conservation.",
          "Indigenous pest control management.",
          "Raising kitchen gardens to herbal medicinal plants."
        ]} />

        <ActivityCard title={<><i class="sii bi-houses-fill"></i>Rural Development</>} details={[
          "Housing and rural sanitation.",
          "Construction of soak pits/ low-cost latrines.",
          "Proper drainage arrangements for sewage disposal."
        ]} />

        <ActivityCard title={<><i class="si bi-graph-up"></i>Livelihood & Skill Development</>} details={[
          "Income generation schemes.",
          "Vocational training & skill development.",
          "Women empowerment."
        ]} />

        <ActivityCard title={<><i class="sii bi-person-raised-hand"></i>Welfare Programs</>} details={[
          "Crèche units for working mother’s children.",
          "Senior Citizens Care Home.",
          "Public awareness campaigns."
        ]} />

        <ActivityCard title={<><i class="si bi-arrow-up-right"></i>Empowerment & Advocacy</>}details={[
          "Empowerment of disadvantaged groups.",
          "Sports and promotion of development."
        ]} />
      </div>
    </section>
  );
};

const ActivityCard = ({ title, details }) => (
  <div className="activity-card">
    <h3 className="activity-title">{title}</h3>
    <ul className="activity-details">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

export default Activities;
