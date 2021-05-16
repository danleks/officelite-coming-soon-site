import styled from 'styled-components';

export const SubscriptionStyles = styled.section`
    --mgt: 10rem;
    margin-top: var(--mgt);
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    @media(min-width: 1200px) {
        --mgt: 18.4rem;
        flex-direction: row;
        gap: 3rem;
    }
`;