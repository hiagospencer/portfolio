// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";

import Sobre  from '../pages/Sobre';
import Banner  from '../pages/Banner';
import Habilidades  from '../pages/Habilidades';
import Projetos  from '../pages/Projetos'


export default function index() {
  return (
    <Routes>
      < Route path='/' element={< Banner />} />
      < Route path='/quemsomos' element={< Sobre />} />
      < Route path='/habilidades' element={< Habilidades />} />
      < Route path='/projetos' element={< Projetos />} />
    </Routes>
  );
}
