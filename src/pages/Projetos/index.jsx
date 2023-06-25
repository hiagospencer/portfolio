

import { FadeIn} from 'react-slide-fade-in';

import { Projects } from '../../services/api';

import { Container, Title, BoxProjeto, Projeto, Img, Titulo,
     Descricao, Button } from './styles';

import { FaArrowRight, } from "react-icons/fa";



export default function index({id}) {

  const apiProjeto = Projects.map((project) => (
    <Projeto className="projeto"
       key={project.id}>
        <a href={project.link} target='_blank' rel="noreferrer"><Img src={project.img} /></a>
        <Titulo>{project.title}</Titulo>
        <Descricao>{project.description}</Descricao>
        <a href={project.link} target='_blank' rel="noreferrer"><Button>Ver <FaArrowRight /> </Button></a>
    </Projeto>
  ))
  return (
    <Container id={id}>
      <Title>Projetos</Title>
      < FadeIn
        from="bottom"
        positionOffset={400}
        triggerOffset={200}
        delayInMilliseconds={400}
      >
       <BoxProjeto className="box_projeto">{apiProjeto}</BoxProjeto>
      </FadeIn>
    </Container>
  )
}
