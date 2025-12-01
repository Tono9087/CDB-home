import React from 'react';
import Button from './Button';
import cybersecurity2Img from '../assets/img/cybersecurity2.png';

const Hero = ({ onGetStarted }) => {
  const handleGetStarted = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      const element = document.querySelector('#about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Seguridad silenciosa</h1>
            <p>Aquí aprenderás sobre diferentes tipos de seguridad en la red.</p>
            <div className="d-flex">
              <Button onClick={handleGetStarted}>
                Comenzar
              </Button>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img
              src={cybersecurity2Img}
              className="img-fluid animated"
              alt="Ilustración de ciberseguridad"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;



