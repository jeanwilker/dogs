import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../UserContext/UserContext';

import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
    const [mobile, setMobile] = useState(null);
    const { userLogout } = useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos /> {mobile && 'Minhas Fotos'}
            </NavLink>

            <NavLink to="/conta/estatisticas">
                <Estatisticas /> {mobile && 'Estatísticas'}
            </NavLink>

            <NavLink to="/conta/postar">
                <AdicionarFotos /> {mobile && 'Adicionar fotos'}
            </NavLink>

            <button onClick={userLogout}>
                <Sair />
                {mobile && 'Sair'}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
