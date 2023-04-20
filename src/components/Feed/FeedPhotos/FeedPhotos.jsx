import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';

import useFetch from '../../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTOS_GET } from '../../../services/api';

import styles from './FeedPhotos.module.css';

const FeedPhotos = ({ page, setInfinite, user, setModalPhoto }) => {
    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        async function fetchPhotos() {
            const total = 6;

            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);

            if (response && response.ok && json.length < total) {
                setInfinite(false);
            }
        }
        fetchPhotos();
    }, [request, page, setInfinite, user]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={`${styles.feed} anime__left`}>
                {data.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;
