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
    }
`;

export const CardInnerWrapperStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: ${({ mgt }) => `${mgt}px`};
    &:nth-child(1) {
        gap: 0;
    }
    &:nth-child(2) {
        gap: 8px;
    }
    &:nth-child(3) {
        gap: 1.6rem;
    }
    &:nth-child(4) {
        gap: 0;
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