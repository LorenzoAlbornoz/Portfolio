import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const NavbarM = ({ currentSection }) => {
  return (
    <Navbar expand="lg" className="navMenu">
      <Container>
        <Image
          src="https://res.cloudinary.com/dcwpf7ghu/image/upload/v1706910383/logo1_thumbnail_kzks1n.png"
          alt="Logo"
          className="logo"
          fluid
          style={{ width: '70px', height: '70px' }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>
            <GiHamburgerMenu className='hamburger' />
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-3">
            <Nav.Link className={`itemLink ${currentSection === '#hero' ? 'active' : 'desactive'}`} href='#hero'>Inicio</Nav.Link>
            <Nav.Link className={`itemLink ${currentSection === '#aboutMe' ? 'active' : 'desactive'}`} href='#aboutMe'>Sobre mi</Nav.Link>
            <Nav.Link className={`itemLink ${currentSection === '#services' ? 'active' : 'desactive'}`} href='#services'>Servicios</Nav.Link>
            <Nav.Link className='itemLink' href='#projects'>Proyectos</Nav.Link>
            <Nav.Link className='itemLink' href='#contact'>Contacto</Nav.Link>
          </Nav>
          <Nav className="d-flex gap-1">
            <Nav.Link href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin className="iconsNavBar" style={{ color: 'white' }} />
            </Nav.Link>
            <Nav.Link href="https://github.com/" target="_blank">
            <FaGithub className="iconsNavBar" style={{ color: 'white' }} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarM;
