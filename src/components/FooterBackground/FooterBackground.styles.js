import styled from 'styled-components';
import bgPatternFooter from '../../assets/home/bg-pattern-footer.svg';

export const FooterBackgroundStyles = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 124.8rem;
    background-color: var(--black);
    background-image: url(${bgPatternFooter});
    background-repeat: no-repeat;
    background-size: 120.2rem;
    background-position: center 15.6rem;
    z-index: -1;
    @media(min-width: 768px) {
        height: 98.6rem;
        background-size: 145.4rem;
        background-position: center 1.5rem;
    }
    @media(min-width: 1200px) {
        height: 60.3rem;
        background-size: 203.6rem;
        background-position: top -61.4rem left -70.2rem;
    }
`;