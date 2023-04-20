import { useParams } from 'react-router-dom';
import Feed from '../../../components/Feed/Feed';

const UserProfile = () => {
    const { user } = useParams();

    return (
        <section className="container main__container">
            <h1 className="title">{user}</h1>
            <Feed user={user} />
        </section>
    );
};

export default UserProfile;
