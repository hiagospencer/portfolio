// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FadeIn} from 'react-slide-fade-in';

import { FaDownload } from "react-icons/fa";
import { Container, Title, Perfil, SubTitle,
     Biografia, BoxImg, Descricao, Img, Button } from './styles';

import imagem from '../../assets/images/hiaguinho.jpeg';
import curriculo from '../../assets/arquivos/curriculo1.pdf';

export default function index({id}) {
  return (
    <Container id={id}>
      <Title>Sobre</Title>
      < Perfil>


        < Biografia>
          < FadeIn
            from="left"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={400}
          >
            <SubTitle>Quem eu sou?</SubTitle>
            <Descricao>
            Eu sou o Hiago, tenho 30 anos, sou apaixonado por tecnologia. Sou um Desenvolvedor FullStack em formação.
            Atualmente estou agregando conhecimento adquiridos em <b>Bootcamps e Cursos</b>.
            Busco uma oportunidade para mostrar minha garra,
            minhas habilidades e meu talento, que só vão somar em qualquer empresa.
            </Descricao>
            <Button
                href={curriculo}
                target="_blank"
                download>
                BAIXAR CV <FaDownload />
            </Button>
          </FadeIn>
        </Biografia>


        <BoxImg>
        < FadeIn
          from="bottom"
          positionOffset={400}
          triggerOffset={200}
          delayInMilliseconds={400}
        >
            < Img src={imagem} alt="minha imagem" />
        </FadeIn>
        </BoxImg>
      </Perfil>
    </Container>
  )
}
