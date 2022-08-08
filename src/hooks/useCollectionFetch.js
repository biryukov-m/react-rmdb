import { useEffect, useState } from 'react';
//API
import API from '../API';

export const useCollectionFetch = (collectionId) => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCollection = async () => {
            try {
                setLoading(true);
                setError(false);
                const collection = await API.fetchCollection(collectionId);
                setState({ ...collection });
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        }

        fetchCollection();
        console.log(state);
    }, [collectionId]);

    return ({ state, error, loading });

};
