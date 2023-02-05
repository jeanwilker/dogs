import { Link } from 'react-router-dom';
import useForms from '../../../Hooks/useForms';

import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {
    const username = useForms('email');
    const password = useForms();

    function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json',
                },
                body: JSON.stringify(),
            })
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    console.log(json);
                });
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
