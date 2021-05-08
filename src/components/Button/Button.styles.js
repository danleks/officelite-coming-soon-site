import styled from 'styled-components';

export const ButtonStyles = styled.button`
    width: ${({ form }) => form ? '100%' : '17.1rem'};
    height: 5.6rem;
    border: none;
    border-radius: 2.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.8rem;
    background-color: var(--blue);
    color: var(--white);
    box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
    cursor: pointer;
`;