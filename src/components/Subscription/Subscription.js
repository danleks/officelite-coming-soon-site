import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Card from '../Card/Card';
import { SubscriptionStyles } from './Subscription.styles';

const Subscription = () => {
    const data = useStaticQuery(graphql`
        query CardQuery {
            allDatoCmsPlan {
                nodes {
                    id
                    price
                    title
                    planColor
                    order
                    usersAllowed
                    description1
                    description2
                    description3
                }
            }
        }
    `);
    const plans = data.allDatoCmsPlan.nodes;
    return (
        <SubscriptionStyles>
            {plans
                .sort((a,b) => a.order - b.order)
                .map(plan => {
                return <Card {...plan} />
            })}
        </SubscriptionStyles>
    )
}

export default Subscription;
