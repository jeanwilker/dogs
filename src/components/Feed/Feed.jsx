import { useState } from 'react';

import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feed = ({ user }) => {
    const [modalPhoto, setModalPhoto] = useState(null);

    return (
        <div>
            {modalPhoto && (
                <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
            )}
            <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
        </div>
    );
};

export default Feed;
