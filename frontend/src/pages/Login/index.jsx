import React from "react";
import IconAcCi from '@material-ui/icons/AccountCircleOutlined';
import IconLock from '@material-ui/icons/LockOutlined';
import CustomBotao from '../../components/CustomBotao';
import './style.css'

function Login() {
    return (
        <main>
            <div className="cardLogin">
                <h1 className="titulo">
                    LOGIN
                </h1>
                <div className="campo">
                    <IconAcCi className="icon" />
                    <input className="input" type="text" placeholder="Usuário"/>
                </div>
                <div className="campo">
                    <IconLock className="icon"/>
                    <input className="input" type="text" placeholder="Senha"/>
                </div>
                <a href="#" className="link">Esqueceu a senha?</a>
                <div>
                    <CustomBotao className="botaoLogar"> Entrar </CustomBotao>
                </div>
                <a href="#" className="link">Ainda não se cadastrou?</a>
            </div>
        </main>
    )
}

export default Login;