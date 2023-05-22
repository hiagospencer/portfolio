// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Footer,Paragrafo, SocialLinks, Links  } from './styles';

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function index() {
  return (
    <Footer>
        <Paragrafo>&copy; 2023 By  Hiago Souza</Paragrafo>
            <SocialLinks>
                <Links href="https://github.com/hiagospencer"
                target="_blank"><FaGithub/></Links>

                <Links href="https://www.linkedin.com/in/hiago-souza-189a10242/" target="_blank"><FaLinkedin /></Links>

                <Links href="https://wa.me/5584988638467"
                target="_blank"><FaWhatsapp /></Links>
            </SocialLinks>
    </Footer>
  )
}
