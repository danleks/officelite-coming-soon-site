import React from 'react';
import Button from '../Button/Button';
import { CardStyles, CardInnerWrapperStyles, CardTitleStyles, CardPlanTypeStyles, CardPlanUserNumber, CardPlanDesc } from './Card.styles';


const Card = ({ id, price, title, usersAllowed, planColor, description1, description2, description3 }) => {
    return (
        <CardStyles key={id} color={planColor}>
            <CardInnerWrapperStyles mgt='40'>
                <CardTitleStyles>{title}</CardTitleStyles>
            </CardInnerWrapperStyles>
            <CardInnerWrapperStyles mgt='40'>
                <CardPlanTypeStyles>{price}</CardPlanTypeStyles>
                <CardPlanUserNumber>{usersAllowed}</CardPlanUserNumber>
            </CardInnerWrapperStyles>
            <CardInnerWrapperStyles mgt='56'>
                <CardPlanDesc color={planColor}>{description1}</CardPlanDesc>
                <CardPlanDesc color={planColor}>{description2}</CardPlanDesc>
                <CardPlanDesc color={planColor}>{description3}</CardPlanDesc>
            </CardInnerWrapperStyles>  
            <CardInnerWrapperStyles mgt='32'>
                <Button light>Try for free</Button>
            </CardInnerWrapperStyles>     
        </CardStyles>
    )    
}

export default Card;


