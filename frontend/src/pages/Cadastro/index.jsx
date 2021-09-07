import React from 'react';
import IconEmail from '@material-ui/icons/EmailOutlined'
import IconAcCi from '@material-ui/icons/AccountCircleOutlined';
import IconTeFI from '@material-ui/icons/TextFieldsOutlined';
import IconLock from '@material-ui/icons/Lock';
import IconToday from '@material-ui/icons/Today';
import CustomInput from '../../components/CustomInput';
import CustomBotao from '../../components/CustomBotao';
import styles from './style.module.css'

function Cadastro(params) {

    return (
        <main>
            <div className={styles.cardCadastro}>
                <h1 className={styles.titulo}>
                    CADASTRO
                </h1>
                <div className={styles.inputsNome}>
                    <div className={styles.campo}>
                        <IconAcCi className={styles.icon} />
                        <CustomInput className={[styles.input, styles.inputMini].join(' ')} type="text" placeholder="Insira seu nome"/>
                    </div>
                    <div className={styles.campo}>
                        <IconTeFI className={styles.icon} />
                        <CustomInput className={[styles.input, styles.inputMini].join(' ')}  type="text" placeholder="Insira seu sobrenome"/>
                    </div>
                </div>
                <div>
                {/* onBlur="(this.type='text')" */}
                    <IconToday className={styles.icon} />
                    <CustomInput className={styles.input} onFocus={(e) => (e.currentTarget.type = "date")} onBlur={(e) => (e.currentTarget.type = "text")}
                        placeholder="Sua data de nascimento" type="text" />
                </div>
                <div>
                    <IconEmail className={styles.icon} />
                    <CustomInput className={styles.input}  type="text" placeholder="Insira seu email"/>
                </div>
                <div>
                    <IconLock className={styles.icon} />
                    <CustomInput className={styles.input}  type="text" placeholder="Insira uma senha forte"/>
                </div>
                <div>
                    <IconLock className={styles.icon} />
                    <CustomInput className={styles.input}  type="text" placeholder="Repita a senha"/>
                </div>
                <div>
                    <CustomBotao className={styles.botaoCadastrar}> Finalizar meu cadastro. </CustomBotao>
                </div>
                <a href="/login" className={styles.link}>Já está cadastrado?</a>
            </div>
        </main>
    )
}

export default Cadastro;