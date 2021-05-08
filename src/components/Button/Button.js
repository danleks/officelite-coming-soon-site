import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = ({ children, ...rest }) => {
    return (
        <ButtonStyles {...rest}>{ children }</ButtonStyles>
    )
}

export default Button;
