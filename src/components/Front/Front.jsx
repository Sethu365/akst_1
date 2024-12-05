import React from 'react';
import './Front.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-scroll'; 

const Front = () => {
  return (
    <>
      <div id="home" className='front container1'>
        <div className="front-text">
          <h1>Transforming lives, building sustainable futures.</h1>
          <p>
            Committed to empowering communities through selfless service, supporting vulnerable groups, 
            and creating sustainable solutions for a brighter, more inclusive future.
          </p>
          <button className='btn1'>
            <Link 
              to="/services" 
              smooth={true} 
              duration={500} 
              className="btn-link"
            >
              Explore more <i className="bi bi-caret-right-fill"></i>
            </Link>
          </button>
        </div>
      </div>

 {/* Additional Content Below */}
 <div className="additional-content">
  <div className="text-container">
    <h4>
      <strong>Asha Kirana Seva Trust (AKST)</strong> works to uplift marginalized communities by providing education, healthcare, and skill development, empowering women,
      children, and the elderly to create sustainable, positive change in their lives.

    </h4>
    <p>
    In Bangalore, where a large population lives in slums and faces numerous challenges, the trust works to improve the lives of underprivileged children and families
    by offering education, healthcare, and skill development, empowering them to break free from poverty and build a sustainable future.
    </p>
  </div>
  <button className="btn1">
    <Link 
      to="donate" 
      smooth={true} 
      duration={500} 
      className="btn-link"
    >
      Donate 
    </Link>
  </button>
</div>


    </>
  );
}

export default Front;
