import React from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Habilidades from '../components/Habilidades/Habilidades'
import Servicios from '../components/Servicios/Servicios'
import Proyectos from '../components/Proyectos/Proyectos'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'

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
    </>
  )
}

export default Home