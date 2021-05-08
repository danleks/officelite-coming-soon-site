import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../assets/shared/logo.inline.svg';
import { LogoWrapper } from './Logo.styles';

const Logo = () => {
    return (
        <LogoWrapper>
            <Link to='/'>
                <LogoIcon />
            </Link>
        </LogoWrapper>
    )
}

export default Logo;
