import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../services/api';

import Error from '../Helper/Error/Error';
import Loading from '../Helper/Loading/Loading';
import PhotoContent from './PhotoContent/PhotoContent';
import Head from '../Helper/Head/Head';

const Photo = () => {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        const { url, options } = PHOTO_GET(id);
        request(url, options);
    }, [id, request]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <section className="container main__container">
                <Head title={data.photo.title} />
                <PhotoContent single={true} data={data} />
            </section>
        );
    else return null;
};

export default Photo;
