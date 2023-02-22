import { useContext } from 'react';
import { Link } from 'react-router-dom';
import useForms from '../../../Hooks/useForms';
import { UserContext } from '../../../UserContext/UserContext';

import Button from '../../Forms/Button/Button';
import Input from '../../Forms/Input/Input';

const LoginForm = () => {
    const username = useForms();
    const password = useForms();

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
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
