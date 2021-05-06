import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { MainWrapperStyles, ContentWrapperStyles} from './Layout.styles';
import Header from '../Header/Header';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <MainWrapperStyles>
            <Header />
            <ContentWrapperStyles>
                {children}
            </ContentWrapperStyles>
        </MainWrapperStyles>
    </>
);

export default Layout;