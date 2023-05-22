
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
  return (
    <Skills>
        <GridSkill>
            < Skill src={html} alt="logo html"/>
        </GridSkill>

        <GridSkill>
            < Skill src={css} alt="logo css"/>
        </GridSkill>

        <GridSkill>
            < Skill src={javascript} alt="logo javascript"/>
        </GridSkill>

        <GridSkill>
            < Skill src={react} alt="logo react"/>
        </GridSkill>

        <GridSkill>
            < Skill src={styled} alt="logo python"/>
        </GridSkill>

        <GridSkill>
            < Skill src={python} alt="logo python"/>
        </GridSkill>

        <GridSkill>
            < Skill src={django} alt="logo django"/>
        </GridSkill>

        <GridSkill>
            < Skill src={sql} alt="logo sql"/>
        </GridSkill>

        <GridSkill>
            < Skill src={postgresql} alt="logo postgresql"/>
        </GridSkill>

        <GridSkill>
            < Skill src={git} alt="logo git"/>
        </GridSkill>
    </Skills>
  )
}
