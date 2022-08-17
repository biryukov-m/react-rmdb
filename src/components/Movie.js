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
import Button from './Button';
import ButtonsGrid from './ButtonsGrid';
import Thumb from "./Thumb";
import Reviews from "./Reviews";
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
        setActorsDisplayCount,
        recommendationsDisplayCount,
        setRecommendationsDisplayCount
    } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong.</div>;

    const actorsShort = movie.actors ?
        movie.actors.slice(0, actorsDisplayCount)
        : null;
    const recommendationsShort = movie.recommendations.results ?
        movie.recommendations.results.slice(0, recommendationsDisplayCount)
        : null;

    return (<>
        <BreadCrumb movieTitle={movie.original_title} />
        <MovieInfo movie={movie} />
        <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue} />
        {movie.actors && <>
            <Grid header='Actors'>
                {actorsShort.map(actor => (
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
            <ButtonsGrid>
                {(movie.actors.length > actorsShort.length) &&
                    <Button
                        size="small"
                        text={`Load more`}
                        callback={() => setActorsDisplayCount(prevCount => prevCount + 10)}
                    />}
                {actorsShort.length > 5 &&
                    <Button
                        size="small"
                        text={`Minimize`}
                        callback={() => setActorsDisplayCount(5)}
                    />}
            </ButtonsGrid>
        </>}
        {recommendationsShort && <>
            <Grid header="Recommendations">
                {recommendationsShort.map(movie => (
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
            <ButtonsGrid>
                {(movie.recommendations.results.length > recommendationsShort.length) &&
                    <Button
                        size="small"
                        text={`Load more`}
                        callback={() => setRecommendationsDisplayCount(prevCount => prevCount + 5)}
                    />}
                {recommendationsShort.length > 5 &&
                    <Button
                        size="small"
                        text={`Minimize`}
                        callback={() => setRecommendationsDisplayCount(5)}
                    />}
            </ButtonsGrid>
        </>
        }
        {movie.collection &&
            <Grid header={movie.collection.name}>
                {movie.collection.parts.map(movie => (
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
        }
        {movie.reviews.total_results &&
            <Reviews results={movie.reviews.results} />
        }
    </>);
};

export default Movie;