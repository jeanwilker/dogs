import { useParams } from 'react-router-dom';
import Feed from '../../../components/Feed/Feed';
import Head from '../../../components/Helper/Head/Head';

const UserProfile = () => {
    const { user } = useParams();

    return (
        <section className="container main__container">
            <Head title={user} />
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    );
};

export default UserProfile;
