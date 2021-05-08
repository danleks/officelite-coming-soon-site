import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { MainWrapperStyles, ContentWrapperStyles} from './Layout.styles';
import HeaderBackground from '../HeaderBackground/HeaderBackground';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <MainWrapperStyles>
            <HeaderBackground />
            <ContentWrapperStyles>
            <Logo />
                {children}
            </ContentWrapperStyles>
            {/* <Footer /> */}
        </MainWrapperStyles>
    </>
);

export default Layout;