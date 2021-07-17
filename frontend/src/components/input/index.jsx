import React from "react";
import './style.css'

const Input = (props) => {
    return (
        <input className={props.className} type="text" placeholder={props.placeholder}/>
    )
}

export default Input;