import React from "react";
import IconEmail from '@material-ui/icons/EmailOutlined'
import IconLock from '@material-ui/icons/LockOutlined';
import CustomBotao from '../../components/CustomBotao';
import styles from './style.module.css'
import CustomInput from "../../components/CustomInput";

function Login() {
    return (
        <main>
            <div className={styles.cardLogin}>
                <h1 className={styles.titulo}>
                    LOGIN
                </h1>
                <div className={styles.campo}>
                    <IconEmail className={styles.icon} />
                    <CustomInput className={styles.input} type="text" placeholder="Email"/>
                </div>
                <div className={styles.campo}>
                    <IconLock className={styles.icon}/>
                    <CustomInput className={styles.input} type="text" placeholder="Senha"/>
                </div>
                <a href="#" className={styles.link}>Esqueceu a senha?</a>
                <div>
                    <CustomBotao className={styles.botaoLogar}> Entrar </CustomBotao>
                </div>
                <a href="/cadastro" className={styles.link}>Ainda não se cadastrou?</a>
            </div>
        </main>
    )
}

export default Login;