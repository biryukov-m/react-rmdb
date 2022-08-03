import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/react-movie-logo.svg'
import TMDBLogo from '../../images/tmdb_logo.svg'

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
// Context
import { Context } from '../../context';

const Header = () => {
    const [user] = useContext(Context);
    console.log(user);

    return (
        <Wrapper>
            <Content>
                <div className='logos'>
                    <Link to='/'>
                        <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                    </Link>
                    <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
                </div>
                <div className='user'>
                    {
                        user ? (
                            <span>Logged in as {user.username}</span>
                        ) : (
                            <Link to='/login'>
                                <span>Log in</span>
                            </Link>
                        )
                    }
                </div>
            </Content>
        </Wrapper>
    );
};

export default Header;