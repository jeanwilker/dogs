import Input from '../../../components/Forms/Input/Input';
import Button from '../../../components/Forms/Button/Button';
import Error from '../../../components/Helper/Error/Error';
import Head from '../../../components/Helper/Head/Head';

import { useContext } from 'react';
import useForms from '../../../Hooks/useForms';
import useFetch from '../../../Hooks/useFetch';
import { USER_POST } from '../../../services/api';
import { UserContext } from '../../../UserContext/UserContext';

const LoginCreate = () => {
    const username = useForms();
    const email = useForms('email');
    const password = useForms();

    const { userLogin } = useContext(UserContext);
    const { loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, password.value);
    }

    return (
        <section className="anime__left">
            <Head title="Criar conta" />
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
