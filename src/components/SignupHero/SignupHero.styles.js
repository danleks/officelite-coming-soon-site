import styled from 'styled-components';

export const SignupHeroStyles = styled.section`
    --mgt: 8rem;
    --mgb: 6.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: var(--mgt);
    margin-bottom: var(--mgb);
`;

export const SignupHeroTitle = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    line-height: 4.8rem;
    color: var(--black);
    text-align: center;
`;

export const SignupHeroSubTitle = styled.h3`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    color: var(--grey);
    text-align: center;
`;