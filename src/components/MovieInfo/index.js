import React, { useContext } from "react";
//API
import API from '../../API';
// Components
import Thumb from '../Thumb';
import Rate from '../Rate';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
// image
import NoImage from '../../images/no_image.jpg';
// Styles
import { Wrapper, Content, Text } from './MovieInfo.styles';
// Context
import { Context } from '../../context';

import PropTypes from 'prop-types';

const MovieInfo = ({ movie }) => {
    const [user] = useContext(Context);

    const handleRating = async value => {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
        console.log(rate);
    };

    const movieYear = new Date(movie.release_date.split('-')).getFullYear();

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title} <span>({movieYear})</span></h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="rating-directors">
                        <div>
                            <h3>RATING</h3>
                            <div className="score">{movie.vote_average.toFixed(2)}</div>
                        </div>
                        <div>
                            <h3>VOTES</h3>
                            <div className="votes">{movie.vote_count}</div>
                        </div>
                        <div className="director">
                            <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                            {movie.directors.map(director => (
                                <div>
                                    <p key={director.credit_id}>{director.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {user && (
                        <div>
                            <p>Rate Movie</p>
                            <Rate callback={handleRating} />
                        </div>
                    )}
                </Text>
            </Content>
        </Wrapper>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.object
};

export default MovieInfo;