import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForms from '../../../Hooks/useForms';
import { TOKEN_POST, USER_GET } from '../../../services/api';

import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {
    const username = useForms('email');
    const password = useForms();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            getUser(token);
        }
    }, []);

    async function getUser(token) {
        const { url, options } = USER_GET(token);

        const response = await fetch(url, options);
        const json = await response.json();
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            const { url, options } = TOKEN_POST({
                username: username.value,
                password: password.value,
            });

            const response = await fetch(url, options);
            const json = await response.json();
            window.localStorage.setItem('token', json.token);
        }
    }

    return (
        <>
            <section>
                <h1>Login</h1>
                <form action="" onSubmit={handleSubmit}>
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

                    <Button>Entrar</Button>
                </form>
                <Link to="/login/criar">Cadastro</Link>
            </section>
        </>
    );
};

export default LoginForm;
