import Input from '../../../components/Forms/Input/Input';
import Button from '../../../components/Forms/Button/Button';
import Error from '../../../components/Helper/Error';

import useForms from '../../../Hooks/useForms';
import useFetch from '../../../Hooks/useFetch';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../../services/api';

import styles from './UserPhotoPost.module.css';

const UserPhotoPost = () => {
    const nome = useForms();
    const peso = useForms('number');
    const idade = useForms('number');
    const [img, setImg] = useState({});
    const { data, error, loading, resquest } = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) navigate('/comta');
    }, [data, navigate]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        resquest(url, options);
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <section className={`${styles.photoPost} anime__left`}>
            <form onSubmit={handleSubmit}>
                <Input label="Nome" type="text" nome="nome" {...nome} />
                <Input label="Peso" type="number" nome="peso" {...peso} />
                <Input label="Idade" type="number" nome="idade" {...idade} />
                <input
                    className={styles.file}
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />
                {loading ? (
                    <Button disabled>Enviando</Button>
                ) : (
                    <Button>Enviar</Button>
                )}
                <Error error={error} />
            </form>

            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url('${img.preview}')` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;
