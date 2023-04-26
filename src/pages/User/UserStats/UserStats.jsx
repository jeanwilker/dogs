import { useEffect, lazy, Suspense } from 'react';
import useFetch from '../../../Hooks/useFetch';

import Head from '../../../components/Helper/Head/Head';
import Loading from '../../../components/Helper/Loading/Loading';
import Error from '../../../components/Helper/Error/Error';

import { STATS_GET } from '../../../services/api';

const UserStatsGraphs = lazy(() => import('./UserStatsGraphs/UserStatsGraphs'));

const UserStats = () => {
    const { data, error, loading, request } = useFetch();

    useEffect(() => {
        async function getData() {
            const { url, options } = STATS_GET();
            await request(url, options);
        }
        getData();
    }, [request]);

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    if (data)
        return (
            <Suspense fallback={<div></div>}>
                <Head title="Estatísticas" />
                <UserStatsGraphs data={data} />
            </Suspense>
        );
    else return null;
};

export default UserStats;
