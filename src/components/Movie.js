import React from "react";
import { useParams } from "react-router-dom";
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
// Components
import BreadCrumb from "./BreadCrumb";
import Grid from './Grid';
import Spinner from './Spinner';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';
import Collection from './Collection';
import Button from './Button';
// Hook
import { useMovieFetch } from "../hooks/useMovieFetch";
// Image
import NoImage from '../images/no_image.jpg';

const Movie = () => {
    const { movieId } = useParams();
    const {
        state: movie,
        loading,
        error,
        actorsDisplayCount,
        setActorsDisplayCount
    } = useMovieFetch(movieId);
    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong.</div>;
    const actors = movie.actors.slice(0, actorsDisplayCount);


    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} />
            <MovieInfoBar
                time={movie.runtime}
                budget={movie.budget}
                revenue={movie.revenue} />

            <Grid header='Actors'>
                {actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={actor.profile_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                            : NoImage
                        }
                    />
                ))}
            </Grid>

            {movie.actors.length > actors.length &&
                <Button
                    text={`Load more (${movie.actors.length - actors.length})`}
                    callback={() => setActorsDisplayCount(prevCount => prevCount + 10)}
                />
            }

            {movie.belongs_to_collection.id &&
                <Grid header='Collections'>
                    <Collection
                        id={movie.belongs_to_collection.id}
                        name={movie.belongs_to_collection.name}
                        poster_path={movie.belongs_to_collection.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.belongs_to_collection.poster_path}`
                            : NoImage
                        }
                        backdrop_path={movie.belongs_to_collection.backdrop_path
                            ?
                            `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.belongs_to_collection.backdrop_path}`
                            : NoImage
                        }
                    />
                </Grid>
            }

        </>
    );
};


export default Movie;