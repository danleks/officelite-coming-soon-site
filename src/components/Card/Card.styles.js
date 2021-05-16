import styled from 'styled-components';
import bgPatternHeader from '../../assets/home/bg-pattern-pricing.svg';

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32.7rem;
    height: 50.8rem;
    border-radius: 1.8rem;
    color:  ${({ color }) => color === 'blue' ? `var(--white)` : `var(--black)`};
    background-color: ${({ color }) => `var(--${color})`};
    background-image:  ${({ color }) => color === 'blue' && `url(${bgPatternHeader})`};
    background-size: 88rem;
    background-repeat: no-repeat;
    background-position: center -37.9rem;
    @media(min-width: 768px) {
        width: 68.9rem;
        height: 31.6rem;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4.8rem;
        padding-right: 6.8rem;
    }
    @media(min-width: 1200px) {
        width: 35rem;
        height: 50.8rem;
        flex-direction: column;
        padding: 0;
    }
`;

export const CardInnerWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
        gap: 0;
        margin-top: 4rem;
        @media(min-width: 768px) {
            flex: 1 100%;
            align-items: flex-start;
            margin-top: 0;
        }
        @media(min-width: 1200px) {
            flex: auto;
            align-items: inherit;
            margin-top: 4rem;
        }
    }
    &:nth-child(2) {
        gap: 8px;
        margin-top: 4rem;
        @media(min-width: 768px) {
            flex: 1;
            align-items: flex-start;
            margin-top: 0;
        }
        @media(min-width: 1200px) {
            flex: auto;
            align-items: inherit;
            margin-top: 4rem;
        }
    }
    &:nth-child(3) {
        gap: 1.6rem;
        margin-top: 5.6rem;
        @media(min-width: 768px) {
            flex: 1;
            margin-top: 0;
        }
        @media(min-width: 1200px) {
            flex: auto;
            margin-top: 5.6rem;
        }
    }
    &:nth-child(4) {
        gap: 0;
        margin-top: 3.2rem;
        @media(min-width: 768px) {
            flex: 1 100%;
            align-items: flex-start;
            margin-top: 0;
        }
        @media(min-width: 1200px) {
            flex: auto;
            align-items: inherit;
            margin-top: 3.2rem;
        }
    }
`;

export const CardTitleStyles = styled.h3`
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.8rem;
`;

export const CardPlanTypeStyles = styled.span`
    font-size: 5.6rem;
    font-weight: 700;
    line-height: 6.4rem;
`;

export const CardPlanUserNumber = styled.span`
    line-height: 2.8rem;
`;

export const CardPlanDesc = styled.span`
    line-height: 2.8rem;
    color:  ${({ color }) => color === 'blue' ? `var(--white)` : `var(--grey)`};
`;