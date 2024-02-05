import React from 'react';
import { FaCode, FaCogs  } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";

const Servicios = () => {
    return (
        <section className='px-5 py-5 servicesContainer' id='services'>
            <div className='container pt-3'>
                <h2 className='titleServices'>Servicios</h2>
                <h5>Descubre los servicios que puedo ofrecerte</h5>
                <div className="row">
                    <div className="col d-flex gap-4 py-5 flex-wrap justify-content-center">
                        <div className='text-center cardServices'>
                            <FaCode className='iconServices' />
                            <h5 className='titleServices'>Desarrollo Web</h5>
                            <p>Crear un sitio web atractivo y funcional que se adapte a tus necesidades y objetivos.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <FaMobileAlt className='iconServices' />
                            <h5 className='titleServices'>Diseño Responsive</h5>
                            <p>Asegurar que tu sitio se vea perfecto en dispositivos de todos los tamaños.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <IoSpeedometer className='iconServices' />
                            <h5 className='titleServices'>Optimización de Rendimiento</h5>
                            <p>Mejorar la velocidad y el rendimiento para una experiencia de usuario excepcional.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <FaCogs  className='iconServices' />
                            <h5 className='titleServices'>Funcionalidad a Medida</h5>
                            <p>Desarrollo de funcionalidades personalizadas que se adaptan a tus necesidades específicas.</p>
                        </div>
                        <div className='text-center cardServices'>
                            <RxUpdate className='iconServices' />
                            <h5 className='titleServices'>Interactividad Dinámica</h5>
                            <p>Añadir dinamismo interactivo y experiencias cautivadoras a tu sitio web.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Servicios;
