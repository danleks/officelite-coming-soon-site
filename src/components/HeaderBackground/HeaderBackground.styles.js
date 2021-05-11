import styled from 'styled-components';
import bgPatternHeader from '../../assets/home/bg-pattern-header.svg';

export const HeaderBackgroundStyles = styled.div`
    position: absolute;
    top: -17rem;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 45.8rem;
    padding-top: 4.6rem;
    background-image: url(${bgPatternHeader});
    background-size: 45.8rem;
    background-repeat: no-repeat;
    background-position: center;
    @media(min-width: 768px) {
        height: 66rem;
        background-size: 66rem;
        background-position: 0;
        left: calc(51.4%);
        top: -164px; 
    }
    @media(min-width: 1440px) {
        height: 113.4rem;
        background-size: 113.4rem;
        background-position: 0;
        left: 656px;
        top: -419px;
    }
`;