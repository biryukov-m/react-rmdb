import React from "react";
// Hook 
import { useCollectionFetch } from "../../hooks/useCollectionFetch";
// Components
import Grid from '../Grid';
import Thumb from '../Thumb';
import Spinner from '../Spinner';
// No Image
import NoImage from '../../images/no_image.jpg';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// Prop types
import PropTypes from 'prop-types';

const CollectionInfo = ({ collectionId }) => {
    const { state, loading, error } = useCollectionFetch(collectionId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong.</div>;

    return (
        <Grid header={state.name}>
            {state.parts.map(movie => (
                <Thumb
                    key={movie.id}
                    clickable
                    image={
                        movie.poster_path
                            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                            : NoImage
                    }
                    movieId={movie.id}
                />
            ))}
        </Grid>
    );
};

CollectionInfo.propTypes = {
    collectionId: PropTypes.number
};

export default CollectionInfo;