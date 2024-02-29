import React from 'react';
import { FaEnvelope, FaPhone, FaFacebookF, FaTiktok, FaInstagram } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import bgContact from "../../rexxreact/src/bgimg/redbull2.jpg";

const Contact = () => {
  const pageBackgroundStyle = {
    backgroundImage: `url(${bgContact})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%',
    height: '40%',
    position: 'fixed',
    top: 60,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    maxWidth: '1000px',
    padding: '0 20px',
    boxSizing: 'border-box',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Times New Roman', 
  };

  const boldTextStyle = {
    fontWeight: 'bold',
    marginTop: '10px', 
  };

  const linkStyle = {
    color: 'white', 
  };

  const ContactIcon = ({ icon, link, color }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ margin: '10px', fontSize: '2rem', color: color }}>
      {icon}
    </a>
  );

  return (
    <div style={pageBackgroundStyle}>
      <div style={contentStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <p style={{ ...boldTextStyle, fontSize: '2rem' }}>
            <Typewriter
              options={{
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                  "This is my contact page!",
                  "You can contact me in this folllowing accounts!"
                ],
              }}
            />
          </p>
          <p><span style={{ ...boldTextStyle, ...linkStyle }}>Email:</span> <a href="mailto:rexvoltaire123@gmail.com" style={linkStyle}>rexvoltaire123@gmail.com</a></p>
          <p><span style={{ ...boldTextStyle, ...linkStyle }}>Phone:</span> <a href="tel:09437194387" style={linkStyle}>09437194387</a></p>
          <p><span style={{ ...boldTextStyle, ...linkStyle }}>Facebook:</span> <a href="https://www.facebook.com/profile.php?id=100074035452580" style={linkStyle}>Rex Arga</a></p>
          <p><span style={{ ...boldTextStyle, ...linkStyle }}>Tiktok:</span> <a href="https://www.tiktok.com/@mrwapakz?_t=8kGQRWGZmq1&_r=1" style={linkStyle}>@mrpawakz</a></p>
          <p><span style={{ ...boldTextStyle, ...linkStyle }}>Instagram:</span> <a href="https://www.instagram.com/rexxaarrr?igsh=MWt5MGNtdW5iZmZjMg==" style={linkStyle}>@rexxar</a></p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ContactIcon icon={<FaEnvelope />} link="mailto:rexvoltaire123@gmail.com" color="white" />
          <ContactIcon icon={<FaPhone />} link="tel:09437194387" color="white" />
          <ContactIcon icon={<FaFacebookF />} link="https://www.facebook.com/profile.php?id=100074035452580" color="white" />
          <ContactIcon icon={<FaTiktok />} link="https://www.tiktok.com/@mrwapakz?_t=8kGQRWGZmq1&_r=1" color="white" />
          <ContactIcon icon={<FaInstagram />} link="https://www.instagram.com/rexxaarrr?igsh=MWt5MGNtdW5iZmZjMg==" color="white" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
