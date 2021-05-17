import React from 'react';
import 'normalize.css';
import GlobalStyles from '../../styles/GlobalStyles';
import Typography from '../../styles/Typography';
import { MainWrapperStyles, ContentWrapperStyles} from './Layout.styles';
import HeaderBackground from '../HeaderBackground/HeaderBackground';
import Footer from '../Footer/Footer';
import Logo from '../Logo/Logo';
import FooterBackground from '../FooterBackground/FooterBackground';

const Layout = ({ children }) => (
    <>
        <GlobalStyles />
        <Typography />
        <MainWrapperStyles>
            <HeaderBackground />
            <ContentWrapperStyles>
            <Logo />
                {children}
            <Footer />
            </ContentWrapperStyles>
            <FooterBackground />
        </MainWrapperStyles>
    </>
);

export default Layout;