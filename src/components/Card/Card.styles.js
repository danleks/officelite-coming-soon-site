import styled from 'styled-components';

export const CardStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 32.7rem;
    height: 50.8rem;
    border-radius: 1.8rem;
    background-color: ${({ color }) => `var(--${color})`};
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
    color: var(--grey);
`;