import React from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Habilidades from '../components/Habilidades/Habilidades'
import Servicios from '../components/Servicios/Servicios'
import Proyectos from '../components/Proyectos/Proyectos'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'
import ScrollToTop from "react-scroll-to-top";

const Home = () => {

  return (
    <>
      <NavbarM />
      <Hero />
      <About />
      <Habilidades/>
      <Servicios/>
      <Proyectos />
      <Contacto/>
      <Footer />
      <ScrollToTop smooth style={scrollToTopButton} />
    </>
  )
}

const scrollToTopButton = {
  borderRadius: '50%',
  width: '40px', // Aumentar el ancho del botón
  height: '40px', // Aumentar la altura del botón
  lineHeight: '40px', // Centrar el texto verticalmente
  fontSize: '24px', // Aumentar el tamaño del ícono
  color: '#fff',
  cursor: 'pointer',
  position: 'fixed',
};

export default Home