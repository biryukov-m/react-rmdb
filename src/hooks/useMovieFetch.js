import { useState, useEffect } from "react";
import API from '../API';
import { isPersistedState } from "../helpers";


export const useMovieFetch = (movieId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [actorsDisplayCount, setActorsDisplayCount] = useState(5);
    const [recommendationsDisplayCount, setRecommendationsDisplayCount] = useState(5);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);
                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                // Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );
                const recommendations = await API.fetchRecomendations(movieId);
                // Check if movie belongs to collection and get it
                const collection = movie.belongs_to_collection ?
                    await API.fetchCollection(movie.belongs_to_collection.id)
                    : null;

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors,
                    recommendations,
                    collection: collection
                });
                setLoading(false);
            }
            catch (error) {
                setError(true);
            }
        };

        setActorsDisplayCount(5);
        setRecommendationsDisplayCount(5);

        const sessionState = isPersistedState(movieId);
        if (sessionState) {
            setState(sessionState);
            setLoading(false);
            return;
        }

        fetchMovie();
    }, [movieId]);

    // Write to session storage
    useEffect(() => {
        sessionStorage.setItem(movieId, JSON.stringify(state));
    }, [movieId, state]);


    return {
        state,
        loading,
        error,
        actorsDisplayCount,
        setActorsDisplayCount,
        recommendationsDisplayCount,
        setRecommendationsDisplayCount
    };

};