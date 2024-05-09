// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FadeIn} from 'react-slide-fade-in';

import { FaDownload } from "react-icons/fa";
import { Container, Title, Perfil, SubTitle,
     Biografia, BoxImg, Descricao, Img, Button } from './styles';

import imagem from '../../assets/images/hiaguinho.jpeg';
import curriculo from '../../assets/arquivos/Curriculo - Hiago Souza.pdf';

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
            Eu sou Hiago Souza, nascido e criado na cidade de Areia Branca/RN. Sou Desenvolvedor Front-End altamente qualificado. Tenho habilidades proficientes nas tecnologias HTML, CSS, JAVASCRIPT, REACT JS, STYLED COMPONENTS entre outras. Sou um entusiasta por esportes, amante de música e leitor ávido.
            Sou um profissional comprometido e orientado para resultados, continuando a trilhar um caminho de sucesso na área de Desenvolvimento Front-end.
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
