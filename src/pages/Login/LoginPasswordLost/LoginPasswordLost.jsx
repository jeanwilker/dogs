import useFetch from '../../../Hooks/useFetch';
import useForms from '../../../Hooks/useForms';

import Button from '../../../components/Forms/Button/Button';
import Input from '../../../components/Forms/Input/Input';
import Error from '../../../components/Helper/Error/Error';
import Head from '../../../components/Helper/Head/Head';

import { PASSWORD_LOST } from '../../../services/api';

const LoginPasswordLost = () => {
    const login = useForms();
    const { data, loading, error, request } = useFetch();

    async function handleSubmit(e) {
        if (login.validate()) {
            e.preventDefault();
            const { url, options } = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('perdeu', 'resetar'),
            });
            await request(url, options);
        }
    }

    return (
        <section className="anime__left">
            <Head title="Perdeu a senha" />
            <h1 className="title">Perdeu a senha?</h1>
            {data ? (
                <p style={{ color: '#4c1' }}>{data}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Enail / Usuário"
                        type="text"
                        name="login"
                        {...login}
                    />
                    {loading ? (
                        <Button disabled>Enviando...</Button>
                    ) : (
                        <Button>Enviar Email</Button>
                    )}
                </form>
            )}

            <Error error={error} />
        </section>
    );
};

export default LoginPasswordLost;
