import crossfit from "./../assets/images/crossfit.jpeg";
import agencia from "./../assets/images/agencia.jpeg";
import dentista from "./../assets/images/dentista.jpeg";
import blog from "./../assets/images/blog-django.jpeg";
import agencyCreative from "./../assets/images/agency-creative.jpeg";
import rlCrossFit from "./../assets/images/rl-cross-site.png";
import listaTarefas from "./../assets/images/lista-tarefas.jpeg";
import joaoVictor from "./../assets/images/joao-victor.jpeg";

export const Projects = [
  {
    id: 8,
    img: joaoVictor,
    title: "João Victor Nutricionista",
    description: "Site para um profissional nutricionista.",
    link: "https://joao-victor-nutricionista.vercel.app/",
  },
  {
    id: 6,
    img: rlCrossFit,
    title: "RL CROSS TRANING 2.0",
    description: "Atualização do primeiro projeto RL Cross Training. ",
    link: "https://rlcrosstraining.vercel.app/",
  },
  {
    id: 4,
    img: blog,
    title: "Blog HS NEWS",
    description:
      "Blog desenvolvido com as tecnologias: HTML, CSS, JAVASCRIPT, PYTHON e DJANGO.",
    link: "https://hiagosouza.pythonanywhere.com/",
  },
  {
    id: 1,
    img: crossfit,
    title: "RL CROSS TRANING",
    description: "Projeto desenvolvido para uma acadêmia CrossFit.",
    link: "https://rl-cross-traning.vercel.app/",
  },
  {
    id: 2,
    img: agencia,
    title: "Agência Bold",
    description: "Projeto desenvolvido duranto o curso da Danki Code.",
    link: "https://endearing-flan-ca0e0f.netlify.app/",
  },
  {
    id: 3,
    img: dentista,
    title: "Clínica Ondotológica",
    description:
      "Projeto Clínica Odontológica desenvolvido durante o curso da Danki Code.",
    link: "https://clinica-odontologia.netlify.app/",
  },

  {
    id: 5,
    img: agencyCreative,
    title: "Creative Agency",
    description:
      "Projeto tirado do Figma, onde eu coloquei em prática minhas habilidades com HTML, CSS e Javascript",
    link: "https://tubular-manatee-307e46.netlify.app/",
  },
  {
    id: 7,
    img: listaTarefas,
    title: "Lista de Tarefas",
    description:
      "Projeto Acadêmico para prática de React js",
    link: "https://lista-tarefas-delta-one.vercel.app/",
  },
];

export default {
  Projects,
};
