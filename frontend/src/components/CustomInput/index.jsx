import React from "react";
import styles from './style.module.css'

function CustomInput(props) {
    
    return (
        <input {...props} className={[styles.customInput, props.className].join(' ')}/>
    )
}

export default CustomInput;