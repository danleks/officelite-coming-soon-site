import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import Navigation from '../Navigation/Navigation';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <Navigation />
        {children}
    </>
);

export default Layout;