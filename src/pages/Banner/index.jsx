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
              text="HIAGO JOSÉ DE SOUZA"
              delay={1300}
              esconderCursor>
            </MaquinaDeEscrever>
          </Name>

          <Paragrafo>
            DESENVOLVEDOR FRONT-END
          </Paragrafo>

       </Apresentacao>
       < IconsRedeSocial />
    </Container>
  )
}
