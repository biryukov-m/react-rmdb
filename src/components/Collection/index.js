import React from 'react';
import { Wrapper, Image } from './Collection.styles';

const Collection = ({ id, name, poster_path, backdrop_path }) => (
    <Wrapper>
        <Image src={poster_path} />
        <a>{name}</a>
    </Wrapper>
);

export default Collection;