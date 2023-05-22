// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FadeIn} from 'react-slide-fade-in';

import { Container, Title, BoxProjeto, Projeto, Img, Titulo,
     Descricao, Tecnologias, Button } from './styles';

import { FaReact, FaArrowRight, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiStyledcomponents, SiJavascript } from "react-icons/si";


import crossfit from '../../assets/images/crossfit.jpeg';
import agencia from '../../assets/images/agencia.jpeg';
import dentista from '../../assets/images/dentista.jpeg';
import quiz from '../../assets/images/quiz.jpeg';

export default function index({id}) {
  return (
    <Container id={id}>
      <Title>Projetos</Title>
      < FadeIn
        from="bottom"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={400}
      >
      <BoxProjeto>
      <Projeto>
            <a href="https://rl-cross-traning.vercel.app/" target='_blank' rel="noreferrer"><Img src={crossfit} /></a>
            <Titulo>Landing Page </Titulo>
            <Descricao>Projeto desenvolvido para uma acadêmia CrossFit.</Descricao>
            <Tecnologias><FaReact /> <SiStyledcomponents size={40} /></Tecnologias>
            <a href="https://rl-cross-traning.vercel.app/" target='_blank' rel="noreferrer"><Button>Ver <FaArrowRight /> </Button></a>
        </Projeto>

        <Projeto>
            <a href="https://endearing-flan-ca0e0f.netlify.app/" target='_blank' rel="noreferrer"><Img src={agencia} /></a>
            <Titulo>Landing Page </Titulo>
            <Descricao>Projeto desenvolvido duranto o curso da Danki Code.</Descricao>
            <Tecnologias><FaHtml5 /> <FaCss3 /> <SiJavascript /></Tecnologias>
            <a href="https://endearing-flan-ca0e0f.netlify.app/" target='_blank' rel="noreferrer"><Button>Ver <FaArrowRight /> </Button></a>
        </Projeto>

        <Projeto>
            <a href="https://clinica-odontologia.netlify.app/" target='_blank' rel="noreferrer"><Img src={dentista} /></a>
            <Titulo>Landing Page </Titulo>
            <Descricao>Projeto Clínica Odontológica desenvolvido durante o curso da Danki Code. </Descricao>
            <Tecnologias><FaHtml5 /> <FaCss3 /> <SiJavascript /></Tecnologias>
            <a href="https://clinica-odontologia.netlify.app/" target='_blank' rel="noreferrer"><Button>Ver <FaArrowRight /> </Button></a>
        </Projeto>

        <Projeto>
            <a href="https://quiz-gta.netlify.app/" target='_blank' rel="noreferrer"><Img src={quiz} /></a>
            <Titulo>Quiz </Titulo>
            <Descricao>Projeto de Perguntas sobre o Jogo GTA 5. </Descricao>
            <Tecnologias><FaHtml5 /> <FaCss3 /> <SiJavascript /></Tecnologias>
            <a href="https://quiz-gta.netlify.app/" target='_blank' rel="noreferrer"><Button>Ver <FaArrowRight /> </Button></a>
        </Projeto>
      </BoxProjeto>
      </FadeIn>
    </Container>
  )
}
