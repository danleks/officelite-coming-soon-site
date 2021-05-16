import React from 'react';
import { HeroSectionStyles, ContentWrapper, ChartIllustrationStyles, MainTitleStyles, SecondaryTitleStyles, HeroButtonStyles } from './Hero.styles';

const Hero = () => {
    return (
        <HeroSectionStyles>
            <ContentWrapper>
                <ChartIllustrationStyles />
            </ContentWrapper>
            <ContentWrapper>
                <MainTitleStyles className="mainTitle">A simple solution to complex tasks is coming soon</MainTitleStyles>
                <SecondaryTitleStyles className="secondaryTitle">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new collaboration platform built with an intuitive interface to improve productivity.</SecondaryTitleStyles>
                <HeroButtonStyles buttonColor='blue'>Get Started</HeroButtonStyles>
            </ContentWrapper>
        </HeroSectionStyles>
    )
}

export default Hero;
