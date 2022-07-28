import { useState, useEffect, useRef } from "react";
// API 
// Helpers
import { isPersistedState } from "../helpers";



export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);



    // Initial and search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState('homeState');

            if (sessionState) {
                console.log("Grabbing from session storage...");
                setState(sessionState);
                return;
            }
        }
        console.log("Grabbing from API...");

        setState(initialState);
        fetchMovies(1, searchTerm)
    }, [searchTerm]);

    // Load more 
    useEffect(() => {
        if (!isLoadingMore) return;
        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    // Write to session storage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    }, [searchTerm, state]);
    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };


};