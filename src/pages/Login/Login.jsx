import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../UserContext/UserContext';

import LoginCreate from './LoginCreate/LoginCreate';
import LoginForm from './LoginForm/LoginForm';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset';
import NotFound from '../../components/NotFound/NotFound';

import styles from './Login.module.css';

const Login = () => {
    const { login } = useContext(UserContext);

    if (login) return <Navigate to="/conta" />;
    return (
        <>
            <section className={styles.login}>
                <div className={styles.forms}>
                    <Routes>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="criar" element={<LoginCreate />} />
                        <Route path="perdeu" element={<LoginPasswordLost />} />
                        <Route
                            path="resetar"
                            element={<LoginPasswordReset />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </section>
        </>
    );
};

export default Login;
