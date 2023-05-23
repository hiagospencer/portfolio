
import crossfit from './../assets/images/crossfit.jpeg';
import agencia from './../assets/images/agencia.jpeg';
import dentista from './../assets/images/dentista.jpeg';
import quiz from './../assets/images/quiz.jpeg';

export const Projects = [
  {
    id: 1,
    img: crossfit,
    title: "Landing Pages",
    description: "Projeto desenvolvido para uma acadêmia CrossFit.",
    link: "https://rl-cross-traning.vercel.app/",
  },
  {
    id: 2,
    img: agencia,
    title: "Landing Pages",
    description: "Projeto desenvolvido duranto o curso da Danki Code.",
    link: "https://endearing-flan-ca0e0f.netlify.app/" ,
  },
  {
    id: 3,
    img: dentista,
    title: "Landing Pages",
    description: "Projeto Clínica Odontológica desenvolvido durante o curso da Danki Code.",
    link: "https://clinica-odontologia.netlify.app/",
  },
  {
    id: 4,
    img: quiz,
    title: "Acadêmico",
    description: "Projeto de Perguntas e respotas sobre o Jogo GTA 5.",
    link: "https://quiz-gta.netlify.app/",
  },
]

export default {
  Projects,
}
