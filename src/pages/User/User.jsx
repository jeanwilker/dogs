import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';

import UserHeader from './UserHeader/UserHeader';
import Feed from '../../components/Feed/Feed';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats/UserStats';
import NotFound from '../../components/NotFound/NotFound';
import Head from '../../components/Helper/Head/Head';

import { UserContext } from '../../UserContext/UserContext';

const User = () => {
    const { data } = useContext(UserContext);

    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    );
};

export default User;
