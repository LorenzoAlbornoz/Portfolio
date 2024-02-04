import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 }); 
  }, []);

  return (
    <div className="hero-container d-flex align-items-center" id="hero">
      <div className="container contentHero">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center gap-5">
            <div
              className="imgMeContainer d-flex justify-content-center d-none d-md-block"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-once="false"
            >
              <img className="imgMe" src="" alt="" />
            </div>
            <div className="text-center" data-aos="fade-left">
              <h2 className="mb-0 saludo">¡Hola!</h2>
              <h1 className="myName mb-0">Soy Lorenzo Albornoz</h1>
              <p className="secondaryText">Fullstack Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
