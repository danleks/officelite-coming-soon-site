import styled from 'styled-components';
import bgPatternHeader from '../../assets/home/bg-pattern-header.svg';

export const HeaderBackgroundStyles = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 45.8rem;
    /* padding-top: 4.6rem; */
    background-image: url(${bgPatternHeader});
    background-size: 45.8rem;
    background-repeat: no-repeat;
    background-position: center;
    @media(min-width: 768px) {
        height: 66rem;
        background-size: 66rem;
        background-position: 0;
        /* left: calc(51.4%);
        top: -164px;  */
    }
    @media(min-width: 1200px) {
        height: 113.4rem;
        background-size: 113.4rem;
        background-position: top -41.9rem right -35rem;
    }
    /* @media(min-width: 1441px) {
        background-size: 90rem;
        background-position: top calc(90rem * -.37 + 15vw) right calc(90rem * -.31 + 15vw);
    } */
`;