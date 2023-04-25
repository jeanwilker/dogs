import { useEffect, useState } from 'react';

import Input from '../../../components/Forms/Input/Input';
import Button from '../../../components/Forms/Button/Button';
import Error from '../../../components/Helper/Error/Error';

import useForms from '../../../Hooks/useForms';
import useFetch from '../../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../../services/api';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
    const [login, setLogin] = useState();
    const [key, setKey] = useState();
    const password = useForms();
    const { loading, error, request } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if (key) {
            setKey(key);
            setLogin(login);
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });

            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    return (
        <>
            <h1 className="title">Resete a senha</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar</Button>
                )}
            </form>

            <Error error={error} />
        </>
    );
};

export default LoginPasswordReset;
