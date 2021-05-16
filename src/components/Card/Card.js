import React from 'react';
import Button from '../Button/Button';
import { CardStyles, CardInnerWrapperStyles, CardTitleStyles, CardPlanTypeStyles, CardPlanUserNumber, CardPlanDesc } from './Card.styles';


const Card = ({ id, price, title, usersAllowed, planColor, description1, description2, description3 }) => {
    console.log(planColor);
    return (
        <CardStyles key={id} color={planColor}>
                <CardInnerWrapperStyles>
                    <CardTitleStyles>{title}</CardTitleStyles>
                </CardInnerWrapperStyles>
                <CardInnerWrapperStyles>
                    <CardPlanTypeStyles>{price}</CardPlanTypeStyles>
                    <CardPlanUserNumber>{usersAllowed}</CardPlanUserNumber>
                </CardInnerWrapperStyles>
                <CardInnerWrapperStyles>
                    <CardPlanDesc color={planColor}>{description1}</CardPlanDesc>
                    <CardPlanDesc color={planColor}>{description2}</CardPlanDesc>
                    <CardPlanDesc color={planColor}>{description3}</CardPlanDesc>
                </CardInnerWrapperStyles>
                <CardInnerWrapperStyles>
                    <Button buttonColor={planColor === 'white' ? 'light' : 'white'}>Try for free</Button>
                </CardInnerWrapperStyles>
        </CardStyles>
    )    
}

export default Card;


