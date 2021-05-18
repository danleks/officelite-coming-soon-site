import React from 'react';
import { CounterStyles, CounterTitleStyles, CounterInnerWrapperStyles, CounterFaceStyles, CounterUnitStyles, CounterUnitDescStyles } from './Counter.styles';

const Counter = ({ light }) => {
    return (
        <CounterStyles>
            <CounterTitleStyles light={light}><span>Coming</span> 4 Nov 2020</CounterTitleStyles>
            <CounterInnerWrapperStyles>
                <CounterFaceStyles light={light}>
                    <CounterUnitStyles light={light}>47</CounterUnitStyles>
                    <CounterUnitDescStyles>days</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles light={light}>
                    <CounterUnitStyles light={light}>07</CounterUnitStyles>
                    <CounterUnitDescStyles>hours</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles light={light}>
                    <CounterUnitStyles light={light}>56</CounterUnitStyles>
                    <CounterUnitDescStyles>min</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles light={light}>
                    <CounterUnitStyles light={light}>14</CounterUnitStyles>
                    <CounterUnitDescStyles>sec</CounterUnitDescStyles>
                </CounterFaceStyles>
            </CounterInnerWrapperStyles>
        </CounterStyles>
    )
}

export default Counter;
