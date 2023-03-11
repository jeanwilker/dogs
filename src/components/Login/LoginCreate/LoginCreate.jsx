import Input from '../../Forms/Input/Input';
import Button from '../../Forms/Button/Button';

import useForms from '../../../Hooks/useForms';
import useFetch from '../../../Hooks/useFetch';
import { USER_POST } from '../../../services/api';
import { useContext } from 'react';
import { UserContext } from '../../../UserContext/UserContext';
import Error from '../../Helper/Error';

const LoginCreate = () => {
    const username = useForms();
    const email = useForms('email');
    const password = useForms();

    const { userLogin } = useContext(UserContext);
    const { loading, error, resquest } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await resquest(url, options);
        if (response.ok) userLogin(username.value, password.value);
    }

    return (
        <section className="anime__left">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />

                <Input label="Email" type="email" name="email" {...email} />

                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />

                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}

                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
