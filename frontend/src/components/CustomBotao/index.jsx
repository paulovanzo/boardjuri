import React from 'react';
import styles from './style.module.css'

function Botao(props) {
    return (
        <button {...props} className={[styles.customBotao, props.className].join(' ')}>
            {props.children}
        </button>
    )
}

export default Botao;