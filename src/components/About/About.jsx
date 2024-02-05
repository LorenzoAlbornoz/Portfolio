import React from 'react'
import Button from 'react-bootstrap/esm/Button'


const About = () => {

    return (
        <>
        <div className='aboutContainer'>
            <div className='container py-5 my-3' id='aboutMe'>
                <h2>Sobre Mi</h2>
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-5 custom-text-container">
                        <h4 className='pt-3'>¿Quién soy?</h4>
                        <h4>Soy Lorenzo Albornoz, Desarrollador Web Fullstack</h4>
                        <p className='custom-text mt-4'>
                            Mi trayectoria profesional ha experimentado una transformación significativa en los últimos dos años, ya que decidí sumergirme en el fascinante mundo digital, despertando así mi interés por el desarrollo web. Un giro de 180 grados en mi carrera, que también significó un emocionante viaje de aprendizaje y superación.<br /><br />

                            Actualmente, estoy sumamente emocionado con el progreso que he logrado y estoy comprometido a seguir aprendiendo y desarrollándome en este nuevo mundo que me ha cautivado.<br /><br />

                            Cada día es una oportunidad para expandir mis habilidades y conocimientos en el desarrollo web, y estoy ansioso por contribuir de manera significativa en este emocionante y dinámico campo. ¡Espero con entusiasmo las nuevas oportunidades y desafíos que el futuro me depara!<br /><br />
                        </p>
                    </div>

                    <div className="col-12 col-md-5 d-flex flex-column justify-content-center mt-5 mt-md-0">
                        <h3>Mis Skills:</h3>
                        <div className='d-flex flex-wrap gap-2 justify-content-center mt-4'>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcv6aut2v/image/upload/v1700316292/Porfolio/icons8-html-100_anucbf.png" alt="html" />
                                <p><strong>HTML</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135887/icons8-css-100_yhtjay_jhbz1t.png" alt="html" />
                                <p><strong>CSS</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135841/icons8-javascript-100_vdwv11_j6zj0z.png" alt="html" />
                                <p><strong>JAVASCRIPT</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135804/icons8-react-a-javascript-library-for-building-user-interfaces-100_kuv4ej_rmvl2r.png" alt="html" />
                                <p><strong>REACT</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135764/icons8-nodejs-100_brz2xm_hbbe9m.png" alt="html" />
                                <p><strong>NODE JS</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135724/icons8-expresar-js-100_xolxw1_cgk2fl.png" alt="html" />
                                <p><strong>EXPRESS JS</strong></p>
                            </div>
                            <div className='text-center me-4'>
                                <img className='w-70' src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1707135665/icons8-mongodb-100_px3q3f_wx84fd.png" alt="html" />
                                <p><strong>MONGODB</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default About