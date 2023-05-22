// eslint-disable-next-line no-unused-vars
import React from 'react';

import { RedeSociais, ItensRedeSociais } from './styles';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function index() {
  return (
    <RedeSociais>
          <ItensRedeSociais
            href="https://github.com/hiagospencer"
            target="_blank">
            <FaGithub />
          </ItensRedeSociais>

          <ItensRedeSociais
            href="https://www.linkedin.com/in/hiago-souza-189a10242/" target="_blank">
            <FaLinkedin />
          </ItensRedeSociais>

          <ItensRedeSociais
            href="https://wa.me/5584988638467"
            target="_blank">
            <FaWhatsapp />
          </ItensRedeSociais>
    </RedeSociais>
  )
}
