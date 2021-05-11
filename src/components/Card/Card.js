import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Button from '../Button/Button';
import { CardStyles, CardInnerWrapperStyles, CardTitleStyles, CardPlanTypeStyles, CardPlanUserNumber, CardPlanDesc } from './Card.styles';


const Card = () => {
    const data = useStaticQuery(graphql`
        query CardQuery {
            allDatoCmsCard {
                nodes {
                    id
                    price
                    title
                    cardColor
                    usersAllowed
                    desc {
                        value
                    }
                }
            }
        }
    `)
    const cards = data.allDatoCmsCard.nodes;
    return (
       <>
            {cards.map(({ id, price, title, usersAllowed, cardColor, desc }) => (
                <CardStyles key={id} color={cardColor}>
                    <CardInnerWrapperStyles mgt='40'>
                        <CardTitleStyles>{title}</CardTitleStyles>
                    </CardInnerWrapperStyles>
                    <CardInnerWrapperStyles mgt='40'>
                        <CardPlanTypeStyles>{price}</CardPlanTypeStyles>
                        <CardPlanUserNumber>{usersAllowed}</CardPlanUserNumber>
                    </CardInnerWrapperStyles>
                    <CardInnerWrapperStyles mgt='56'>
                        <CardPlanDesc>Basic document collaboration</CardPlanDesc>
                        <CardPlanDesc>2 GB storage</CardPlanDesc>
                        <CardPlanDesc>Great security and support</CardPlanDesc>
                    </CardInnerWrapperStyles>  
                    <CardInnerWrapperStyles mgt='32'>
                        <Button light>Try for free</Button>
                    </CardInnerWrapperStyles>     
                </CardStyles>
            ))}
       </>
    )    
}

export default Card;


