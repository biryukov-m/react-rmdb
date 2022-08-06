import React from 'react';
import { Image } from './Collection.styles';
import { Link } from 'react-router-dom';

const Collection = ({ id, name, poster_path, backdrop_path, callback }) => (
    <Link to=''>
        <Image src={poster_path} alt="collection-thumb" onClick={callback} />
    </Link>
);

export default Collection;