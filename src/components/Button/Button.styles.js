import styled, { css } from 'styled-components';

export const ButtonStyles = styled.button`
    width: ${({ form }) => form ? '100%' : '17.1rem'};
    height: 5.6rem;
    border: none;
    border-radius: 2.8rem;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 2.8rem;
    box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
    transition: background-color .15s ease-in, opacity .15s ease-in, color .15s ease-in;
    cursor: pointer;

    ${props => props.buttonColor === 'blue' && css`
        background-color: var(--blue);
        color: var(--white);
        &:hover {
            background-color: var(--lightBlue);
        }   
    `}
    
    ${props => props.buttonColor === 'light' && css`
        color: var(--blue);
        background-color: rgba(81, 117, 255, .15);
        &:hover {
            background-color: rgba(81, 117, 255, .25);
        }   
    `}

    ${props => props.buttonColor === 'white' && css`
        color: var(--blue);
        background-color: var(--white);
        &:hover {
           color: var(--lightBlue);
        }   
    `}
`;