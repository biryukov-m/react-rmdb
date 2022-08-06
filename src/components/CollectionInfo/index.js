import React from "react";
// Styles
import { Wrapper } from "./CollectionInfo.styles";
// Hook 
import { useCollectionFetch } from "../../hooks/useCollectionFetch";
// Components
import Grid from '../Grid';
import Thumb from '../Thumb';
import Spinner from '../Spinner';

import NoImage from '../../images/no_image.jpg';


import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';


const CollectionInfo = ({ collectionId }) => {
    const { state, loading, error } = useCollectionFetch(collectionId);
    console.log("vasa", state);

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

export default CollectionInfo;