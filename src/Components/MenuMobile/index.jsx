import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, animateScroll as scroll } from "react-scroll";

import { Container } from './styles';

import { IoClose } from 'react-icons/io5';

export default function MenuMobile({ menuIsVisible, setMenuIsVisible }) {

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible]);

  return (
    <Container isVisible={menuIsVisible}>
      <IoClose size={45} onClick={() => setMenuIsVisible(false)}/>
      <nav className='menu'>
      <Link
        style={{cursor: "pointer"}}
        onClick={scroll.scrollToTop}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>Home</Link>

      <Link to='sobre'
        style={{cursor: "pointer"}}
        onClick={() => setMenuIsVisible(false)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}>Sobre</Link>

      <Link to='habilidades'
        style={{cursor: "pointer"}}
        onClick={() => setMenuIsVisible(false)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}>Habilidades</Link>

      <Link to='projetos'
        style={{cursor: "pointer"}}
        onClick={() => setMenuIsVisible(false)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}>Projetos</Link>
      </nav>
    </Container>
  )
}

MenuMobile.defaultProps = {
  menuIsVisible: false,
  setMenuIsVisible: false,
}

MenuMobile.propTypes ={
  menuIsVisible: PropTypes.bool.isRequired,
  setMenuIsVisible: PropTypes.bool.isRequired,
};
