import React from 'react';
import './Contact.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  return (
    <div id="contact" className='contact-us'>     
      <div className='contact-header'>
        {/* <h3 className="contact-us-subtitle">Contact Us</h3> */}
        <h2 className="contact-us-title">Get in Touch</h2>
      </div>
      <div className='contact'>
        <div className="contact-col">
          <h2 className="contact-message-title">
          Send Us Your Support<i className="ci bi-heart-fill"></i>
          </h2>
          <p>
          Feel free to reach out for donations or find our contact information below. Your support, feedback, 
          and contributions are important to us as we work towards empowering communities and providing support for vulnerable individuals.
          </p>
          <ul className='ul1'>
            <li className='li1'><i class="bi1 bi-envelope-at"></i>dhshivannareddy@gmail.com</li>
            <li className='li1'><i class="bi1 bi-telephone"></i>+91 99808 18582</li>
            <li className='li1'><i class="bi1 bi-geo-alt"></i>Asha Kirana Seva Trust
            #57/A, 1st Floor, Classic County Layout, <br></br>
            Kommaghatta Main Road, Kengeri Satellite Town, <br></br>Bengaluru 560-060.</li>
          </ul>
        </div>
        <div className="contact-col">
          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email id" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Write your messages here" required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <span></span>
        </div>
      </div>
    </div>
     
  );
}

export default Contact;
