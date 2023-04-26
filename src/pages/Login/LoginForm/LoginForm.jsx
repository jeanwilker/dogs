import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForms from '../../../Hooks/useForms';
import { UserContext } from '../../../UserContext/UserContext';

import Button from '../../../components/Forms/Button/Button';
import Input from '../../../components/Forms/Input/Input';
import Error from '../../../components/Helper/Error/Error';
import Head from '../../../components/Helper/Head/Head';

import styles from './LoginForm.module.css';
import stylesBtn from '../../../components/Forms/Button/Button.module.css';

const LoginForm = () => {
    const username = useForms();
    const password = useForms();

    const { userLogin, error, loading } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <>
            <section className="anime__left">
                <Head title="Login" />
                <h1 className="title">Login</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input
                        label={'Usuário'}
                        type={'text'}
                        name={'username'}
                        {...username}
                    />
                    <Input
                        label={'Senha'}
                        type={'password'}
                        name={'password'}
                        {...password}
                    />

                    {loading ? (
                        <Button disabled>Carregando...</Button>
                    ) : (
                        <Button>Entrar</Button>
                    )}
                    <Error error={error && 'Dados incorretos'} />
                </form>
                <Link className={styles.perdeu} to="/login/perdeu">
                    Perdeu a senha?
                </Link>

                <div className={styles.cadastro}>
                    <h2 className={styles.subtitle}>Cadastre-se</h2>
                    <p>Ainda não possui conta? Cadastre-se no site.</p>
                    <Link className={stylesBtn.button} to="/login/criar">
                        Cadastro
                    </Link>
                </div>
            </section>
        </>
    );
};

export default LoginForm;
