import React from "react";
import Input from "../../components/input";
import './style.css'

function Login() {
    return (
        <main>
            <div className="cardLogin">
                <h1>
                    LOGIN
                </h1>
                <Input className="input" placeholder="Usuário" />
                <Input className="input" placeholder="Senha" />
            </div>
        </main>
    )
}

export default Login;