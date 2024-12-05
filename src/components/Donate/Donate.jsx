import React from 'react';
import qr from '../../assets/akst-QR.jpg'; 

const Donate = () => {
  return (
    <section id="donate" className="donate">
    <div className="donate-now-container" style={{ padding: '20px', textAlign: 'center' }}>
      <h1 >Support Asha Kirana Seva Trust</h1>
      <p>Your donation will help empower communities and provide support to vulnerable individuals. Every contribution makes a difference!</p>
      
      <div className="qr-code-container" style={{ margin: '20px auto', display: 'inline-block' }}>
        
        <img src={qr} alt="Donate QR Code" style={{ width: '500px', height: '600px' }} />
      </div>
      
      <p>Scan the QR code above to make your donation securely.</p>
      <p>Or pay to UPI ID : 9980818582@ucobank</p>
      
      <p>Thank you for your support!</p>
    </div>
    </section>
  );
};

export default Donate;
