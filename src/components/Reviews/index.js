import React, { useState } from "react";
import { Wrapper, Content, Container, Text } from './Reviews.styles';
import NoImage from '../../images/no_image.jpg';

const Reviews = ({ results }) => {
    const [expandReviewId, setExpandReviewId] = useState('');

    return (
        <Wrapper>
            <h1>Reviews</h1>
            <Container>
                {results.map(review => (
                    <Content>
                        <div className="author">
                            <img src={review.author_details.avatar_path ?
                                review.author_details.avatar_path
                                : NoImage} />
                            <h3>{review.author}</h3>
                        </div>
                        {review.content.length > 250 ?
                            review.id === expandReviewId ?
                                <Text onClick={() => (setExpandReviewId(''))}>
                                    {review.content}
                                </Text>
                                : <Text onClick={() => (setExpandReviewId(review.id))}>
                                    {review.content.substring(0, 250)}...
                                </Text>
                            : review.content}
                    </Content>
                ))}
            </Container>
        </Wrapper>
    )
};

export default Reviews;