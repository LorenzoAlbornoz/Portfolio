import React from "react";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { MdOutlinePhone, MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "aboutMe", label: "Sobre mi" },
  { id: "services", label: "Servicios" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mt-3">
              <div>
                <img
                  src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1706910383/logo1_thumbnail_kzks1n.png"
                  alt="Logo"
                  height="100"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row text-center">
            <div className="col-lg-4">
              <h3 className="footer__title">Lorenzo Albornoz</h3>
              <p className="footer__text">
                Cada línea de código es un paso hacia adelante en la creación de
                experiencias digitales extraordinarias. Descubre el potencial
                infinito de la tecnología. ¡Construyamos el mañana digital
                juntos!
              </p>
            </div>
            <div className="col-lg-4">
              <h3 className="footer__title">Enlaces Útiles</h3>
              <ul className="footer__text2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="footer__linkFooter">
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4 ">
              <h3 className="footer__title">Medios de contacto</h3>
              <ul className="footer__contactList">
                <li>
                  <a
                    href="https://www.linkedin.com/in/lorenzoalbornoz/"
                    target="_blank"
                    className="footer__linkContacto"
                  >
                    <RiLinkedinBoxFill className="contactIcons" />
                    &nbsp; lorenzoalbornoz
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lorenzoa.28.la@gmail.com"
                    target="_blank"
                    className="footer__linkContacto"
                  >
                    <MdEmail className="contactIcons" />
                    &nbsp; lorenzoa.28.la@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5493816440148&text=Hola%20Lorenzo..."
                    target="_blank"
                    className="footer__linkContacto"
                  >
                    <FaWhatsapp className="contactIcons" />
                    &nbsp; +54 3816440148
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-between mb-4">
              <p>© Todos los derechos reservados </p>
              <p>Términos y Condiciones</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
