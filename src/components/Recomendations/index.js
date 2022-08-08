import React from "react";
// Hook
import { useRecomendationsFetch } from "../../hooks/useRecomendationsFetch";
// Components
import Grid from "../Grid";
import Thumb from "../Thumb";
import Spinner from "../Spinner";
// No Image
import NoImage from '../../images/no_image.jpg';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Prop types
import PropTypes from 'prop-types';

const Recomendations = ({ movieId }) => {
    const { state, loading, error } = useRecomendationsFetch(movieId);

    if (loading) { return <Spinner /> }
    if (error) return <div>Something went wrong.</div>;

    return (
        <Grid header="Recommendations">
            {state.results.map(movie => (
                <Thumb
                    key={movie.id}
                    image={movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : NoImage
                    }
                    movieId={movie.id}
                    clickable
                />
            ))}
        </Grid>
    );
};

Recomendations.propTypes = {
    movieId: PropTypes.number
};

export default Recomendations;