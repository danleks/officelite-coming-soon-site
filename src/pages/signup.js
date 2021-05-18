import React from 'react';
import SignupHero from '../components/SignupHero/SignupHero';
import Counter from '../components/Counter/Counter';
import { SignupStyles } from '../styles/Signup.styles';


const Signup = () => {
    return (
        <SignupStyles>
           <SignupHero />
           <Counter light />
        </SignupStyles>
    )
}

export default Signup;
