
import { Skills, Skill, GridSkill } from "./styles"

import html from '../../../assets/images/html-logo.png';
import css from '../../../assets/images/css-logo.png';
import javascript from '../../../assets/images/javascript-logo.png';
import react from '../../../assets/images/react-logo.png';
import styled from '../../../assets/images/styled.png';
import git from '../../../assets/images/git-logo.png';
import python from '../../../assets/images/python2.png';
import django from '../../../assets/images/django.png';
import postgresql from '../../../assets/images/post.png';
import sql from '../../../assets/images/sql.png';




export default function index() {


    const imagens = [
        {link: html},
        {link: css},
        {link: javascript},
        {link: react},
        {link: styled},
        {link: python},
        {link: django},
        {link: postgresql},
        {link: sql},
        {link: git},
    ]



    const image = imagens.map((img) => (
        <GridSkill
         key={img.link.toLowerCase()}
        >
            <Skill src={img.link}/>
        </GridSkill>
    ));



  return (
    <Skills>
        {image}
    </Skills>

  )
}
