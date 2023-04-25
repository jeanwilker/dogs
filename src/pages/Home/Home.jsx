import Feed from '../../components/Feed/Feed';
import Head from '../../components/Helper/Head/Head';

const Home = () => {
    return (
        <section className="container main__container">
            <Head
                title="Fotos"
                description="Home do site Dogs, com o feed de fotos."
            />
            <Feed />
        </section>
    );
};

export default Home;
