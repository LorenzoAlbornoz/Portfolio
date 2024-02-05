import React from 'react'
import NavbarM from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Contacto from '../components/Contacto/Contacto'
import Footer from '../components/Footer/Footer'

const Home = () => {

  return (
    <>
      <NavbarM />
      <Hero />
      <Contacto/>
      <Footer />
    </>
  )
}

export default Home