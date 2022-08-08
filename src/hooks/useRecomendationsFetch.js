import { useEffect, useState } from "react";
// API
import API from "../API";

export const useRecomendationsFetch = (movieId) => {
    const [state, setState] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecomendations = async () => {
            try {
                setLoading(true);
                setError(false);
                const recomendations = await API.fetchRecomendations(movieId);
                setState({ ...recomendations });
                console.log("Recommendations fetched:", { ...recomendations });
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        };

        fetchRecomendations();
    }, [movieId]);

    return ({ state, error, loading });
};