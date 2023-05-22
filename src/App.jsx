// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import Navbar from './Components/Navbar';
import Banner from './pages/Banner';
import Sobre from './pages/Sobre';
import Habilidades from './pages/Habilidades';
import Projetos from './pages/Projetos';
import Footer from './Components/Footer';


function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Sobre id="sobre" />
      <Habilidades id="habilidades"/>
      <Projetos id="projetos"/>
      <Footer />
    </>
  )
}

export default App
