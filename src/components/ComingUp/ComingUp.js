import React from 'react';
import Counter from '../Counter/Counter';
import Button from '../Button/Button';
import { ComingUpStyles } from './ComingUp.styles';


const ComingUp = () => {
    return (
        <ComingUpStyles>
            <Counter />
            <Button buttonColor='blue'>Get Started</Button>
        </ComingUpStyles>
    )
}

export default ComingUp;
