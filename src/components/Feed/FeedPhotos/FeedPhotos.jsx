import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';

import useFetch from '../../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../services/api';

import styles from './FeedPhotos.module.css';

const FeedPhotos = () => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
            const { response, json } = await request(url, options);
        }
        fetchPhotos();
    }, [request]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={`${styles.feed} anime__left`}>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id} photo={photo} />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;
