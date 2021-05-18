import styled from 'styled-components';

export const ComingUpStyles = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 10rem 0;
    @media(min-width: 768px) {
        gap: 4.8rem;
    }
    @media(min-width: 1200px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;