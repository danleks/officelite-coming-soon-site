import styled from 'styled-components';
import Button from '../Button/Button';
import Svg from '../../assets/home/charts.inline.svg';

export const HeroSectionStyles = styled.section`
    --mgt: 8rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6.4rem;
    width: 100%;
    margin-top: var(--mgt);
    @media(min-width: 768px) {
        flex-direction: row-reverse;
        gap: 6.3rem;
    }
    @media(min-width: 1200px) {
        gap: 9.5rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ChartIllustrationStyles = styled(Svg)`
    width: 17.1rem;
    @media(min-width: 768px) {
        width: 28.1rem;
    }
    @media(min-width: 1200px) {
        width: 47.5rem;
    }
`;

export const MainTitleStyles = styled.h1`
    text-align: center;
    @media(min-width: 768px) {
        text-align: left;
    }
`;

export const SecondaryTitleStyles = styled.h2`
    --mgt: 2.4rem;
    text-align: center;
    margin-top: var(--mgt);
    @media(min-width: 768px) {
        text-align: left;
    }
`;

export const HeroButtonStyles = styled(Button)`
    margin-top: 2.4rem;
    @media(min-width: 768px) {
        align-self: flex-start;
    }
`;