import { Link } from 'react-router-dom';
import styles from './Header.module.css';

import Dogs from '../../Assets/dogs.svg';

const Header = () => {
    return (
        <>
            <heder className={styles.header}>
                <nav className={`${styles.nav} container`}>
                    <Link className={styles.logo} to="/">
                        <img src={Dogs} alt="Logo dog" />
                    </Link>
                    <Link className={styles.login} to="/login">
                        Login / Criar
                    </Link>
                </nav>
            </heder>
        </>
    );
};

export default Header;
