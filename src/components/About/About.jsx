import React from 'react';
import Button from 'react-bootstrap/esm/Button'

const About = () => {
  return (
    <>
      <div className='aboutContainer'>
        <div className='container py-4 py-md-5' id='aboutMe'>
          <h2>Sobre Mí</h2>
          <div className="row d-flex justify-content-between">
            <div className="col-12 col-md-5 custom-text-container">
              <h4 className='pt-3'>¿Quién soy?</h4>
              <h4>Soy Lorenzo Albornoz, Desarrollador Fullstack</h4>
              <p className='custom-text mt-4'>
                Mi trayectoria profesional ha experimentado una transformación significativa en los últimos dos años, ya que decidí sumergirme en el fascinante mundo digital, despertando así mi interés por el desarrollo web. Un giro de 180 grados en mi carrera, que también significó un emocionante viaje de aprendizaje y superación.<br /><br />

                Actualmente, estoy sumamente emocionado con el progreso que he logrado y estoy comprometido a seguir aprendiendo y desarrollándome en este nuevo mundo que me ha cautivado.<br /><br />

                Cada día es una oportunidad para expandir mis habilidades y conocimientos en el desarrollo web, y estoy ansioso por contribuir de manera significativa en este emocionante y dinámico campo. ¡Espero con entusiasmo las nuevas oportunidades y desafíos que el futuro me depara!<br /><br />
              </p>
              <Button variant="dark" href='https://drive.google.com/file/d/1_CTl4kgAUhbt-VoNyDiKw0o_4igZ4qwf/view?usp=sharing' target='blank'>Descargar CV</Button>
            </div>

            <div className="col-12 col-md-5 d-flex flex-column justify-content-center mt-5 mt-md-0">
           
              <img className='w-100 d-md-block d-none' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707185924/WhatsApp_Image_2024-02-05_at_23.18.04_a3jpqd.jpg" alt="foto_vertical" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
