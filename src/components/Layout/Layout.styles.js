import styled from 'styled-components';

export const MainWrapperStyles = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    /* max-width: 144rem; */
    margin: auto;
    /* overflow: hidden; */
    /* flex-direction: column; */
`;

export const ContentWrapperStyles = styled.div`
    --pt: 4.6rem;
    --width: 32.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--width);
    padding-top: var(--pt);
    @media(min-width: 768px) {
        --width: 68.9rem;
    }
    @media(min-width: 1200px) {
        --width: 110rem;
    }
`;