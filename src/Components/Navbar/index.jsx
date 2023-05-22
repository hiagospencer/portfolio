
// eslint-disable-next-line no-unused-vars
import React,{ useState } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { RiMenu3Fill } from 'react-icons/ri';

import MenuMobile from '../MenuMobile';

import Sobre  from '../../pages/Sobre';
import Banner  from '../../pages/Banner';
import Habilidades  from '../../pages/Habilidades';
import Projetos  from '../../pages/Projetos';

import { Container, Section, Logo, Navbar, Itens, IconMobile } from './styles';

import logo from '../../assets/images/logo-hiago.jpeg';



export default function index({id}) {

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <Router>
    <Container id={id}>
        <Section>
          <Logo src={logo} onClick={scroll.scrollToTop} />
          <Navbar>

            <Itens to='sobre'
                spy={true}
                smooth={true}
                offset={40}
                duration={600}>Sobre</Itens>


            <Itens to='habilidades'
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}>Habilidades</Itens>

            <Itens to='projetos'
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}>Projetos</Itens>
          </Navbar>
        </Section>

       <IconMobile>
        <RiMenu3Fill onClick={() => setMenuIsVisible(true)} />
      </IconMobile>

      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

    </Container>

    <Routes>
      < Route path='/' element={< Banner />} />
      < Route path='/quemsomos' element={< Sobre />} />
      < Route path='/habilidades' element={< Habilidades />} />
      < Route path='/projetos' element={< Projetos />} />
    </Routes>
  </Router>
  )
}
