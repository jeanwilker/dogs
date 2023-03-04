import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../UserContext/UserContext';

import Dogs from '../../Assets/dogs.svg';

import styles from './Header.module.css';

const Header = () => {
    const { data, userLogout } = useContext(UserContext);

    return (
        <>
            <header className={styles.header}>
                <nav className={`${styles.nav} container`}>
                    <Link className={styles.logo} to="/">
                        <img src={Dogs} alt="Logo dog" />
                    </Link>
                    {data ? (
                        <Link className={styles.login} to="/conta">
                            {data.nome}
                            <button onClick={userLogout}>Sair</button>
                        </Link>
                    ) : (
                        <Link className={styles.login} to="/login">
                            Login / Criar
                        </Link>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
