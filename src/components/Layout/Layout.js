import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { MainWrapperStyles, ContentWrapperStyles} from './Layout.styles';
import Logo from '../Logo/Logo'

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <MainWrapperStyles>
            <ContentWrapperStyles>
            <Logo />
                {children}
            </ContentWrapperStyles>
        </MainWrapperStyles>
    </>
);

export default Layout;