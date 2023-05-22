// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FadeIn} from 'react-slide-fade-in';

import { Container, Title, BoxSkills } from './styles';

import  Skill from './Skills';

export default function index({id}) {
  return (
    <Container id={id}>
        <Title>Habilidades</Title>
        <BoxSkills>
        < FadeIn
            from="bottom"
            positionOffset={400}
            triggerOffset={200}
            delayInMilliseconds={400}
        >
          <Skill />
          </FadeIn>
        </BoxSkills>
    </Container>
  )
}
