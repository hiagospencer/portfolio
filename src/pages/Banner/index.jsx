/* eslint-disable no-unused-vars */
import React from 'react';

import { animateScroll as scroll } from "react-scroll";

import { MaquinaDeEscrever } from '../../Components/MaquinaDeEscrever';

import  IconsRedeSocial from './IconsRedeSocial';

import { Container, Apresentacao, Name, Paragrafo } from './styles';

import { FaArrowUp } from "react-icons/fa";


export default function index() {


  return (
    <Container>
       <Apresentacao>
          < FaArrowUp onClick={scroll.scrollToTop} />
          <Paragrafo>
              OLÁ, EU SOU
          </Paragrafo>

          <Name>
            <MaquinaDeEscrever
              text="HIAGO SOUZA"
              delay={1300}
              esconderCursor>
            </MaquinaDeEscrever>
          </Name>

          <Paragrafo>
            DESENVOLVEDOR FULLSTACK
          </Paragrafo>

       </Apresentacao>
       < IconsRedeSocial />
    </Container>
  )
}
