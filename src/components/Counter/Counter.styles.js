import styled from 'styled-components';

export const CounterStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 44.8rem;
    z-index: 1;
`;

export const CounterTitleStyles = styled.h3`
    font-size: 1.6rem;
    color: var(--blue);
    text-transform: uppercase;
    line-height: 4.8rem;
    letter-spacing: 5px;
    text-align: center;

    & > span {
        color: ${({ light }) => light ? `var(--black)`: `var(--white)`};
    }
`;

export const CounterInnerWrapperStyles = styled.div`
    display: flex;
    gap: 1.3rem;
`;

export const CounterFaceStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 7.2rem;
    height: 9.2rem;
    border-radius: 4px;
    background-color: ${({ light }) => light ? `rgba(81, 117, 255, .1)` : `var(--lightBlack)`};
    @media(min-width: 768px) {
        width: 10rem;
        height: 12.8rem;
        border-radius: 1.3rem;
    }
`;

export const CounterUnitStyles = styled.span`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4.8rem;
    color: ${({ light }) => light ? `var(--blue)` : `var(--white)`};
    @media(min-width: 768px) {
        font-size: 5.6rem;
        line-height: 4.8rem;
    }
`;

export const CounterUnitDescStyles = styled.span`
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 2.8rem;
    opacity: .5;
    color: var(--grey);
    @media(min-width: 768px) {
        font-size: 1.6rem;
    }
`;