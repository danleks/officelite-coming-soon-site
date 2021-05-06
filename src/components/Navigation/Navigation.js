import React from 'react'
import { Link } from 'gatsby';
import Logo from '../Logo/Logo';

const Navigation = () => {
    return (
        <nav>
            <Link to='/'>
                <Logo />
            </Link>
        </nav>
    )
}

export default Navigation
