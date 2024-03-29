import { useContext, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../UserContext/UserContext';

import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFotos } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';

import styles from './UserHeaderNav.module.css';
import useMedia from '../../../Hooks/useMedia';

const UserHeaderNav = () => {
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = useState(false);
    const { userLogout } = useContext(UserContext);
    const { pathname } = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    }`}
                    aria-label="Menu"
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
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
        </>
    );
};

export default UserHeaderNav;
