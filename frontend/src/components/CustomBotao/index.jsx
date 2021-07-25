import React from 'react';
import './style.css';

function Botao(props) {
    return (
        <button className={"customBotao " + props.className}>
            {props.children}
        </button>
    )
}

export default Botao;