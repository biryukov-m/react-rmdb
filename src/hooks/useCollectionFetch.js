import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    results: []
};

export const useCollectionFetch = (collectionId) => {
    const [state, setState] = useState(initialState);
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
