import styled from 'styled-components';
import bgPatternHeader from '../../assets/home/bg-pattern-header.svg';

export const HeaderStyles = styled.header`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 28.8rem;
    padding-top: 4.6rem;
    background-image: url(${bgPatternHeader});
    background-size: 45.8rem;
    background-repeat: no-repeat;
    background-position: top -170px center;
    border: 1px solid blue;
`;