import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { Span } from "./styles";

export function MaquinaDeEscrever(props) {
    const [text, setText] = useState("");
    const [ mostrarCursor, setMostrarCursor] = useState(false);

    const escreverNaTela = (text, i = 0) => {
        if (i < text.length) {
            setMostrarCursor(true);

            setText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), 100);
        }else if (i > text.length && props?.esconderCursor) {
            setMostrarCursor(false);
        }
    }

    useEffect(() => {
        setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
    }, []);

    return (
        <div>
            {text}
            {mostrarCursor && (
                < Span></Span>
            )}
        </div>
    )
}

MaquinaDeEscrever.defaultProps = {
     esconderCursor: false,
     text: "",
     delay: 0,
   }

MaquinaDeEscrever.propTypes = {
    esconderCursor: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
  };
