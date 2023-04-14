import { useState } from 'react';
import styles from './image.module.css';

const Image = ({ alt, ...props }) => {
    const [skeleton, setSkeleton] = useState(true);

    function hadleLoad({ target }) {
        setSkeleton(false);
        target.style.opacity = 1;
    }

    return (
        <div className={styles.wrapper}>
            {skeleton && <div className={styles.skeleton}></div>}
            <img
                onLoad={hadleLoad}
                className={styles.img}
                src=""
                alt={alt}
                {...props}
            />
        </div>
    );
};

export default Image;
