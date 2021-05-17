import React from 'react';
import { CounterStyles, CounterTitleStyles, CounterInnerWrapperStyles, CounterFaceStyles, CounterUnitStyles, CounterUnitDescStyles } from './Counter.styles';

const Counter = () => {
    return (
        <CounterStyles>
            <CounterTitleStyles><span>Coming</span> 4 Nov 2020</CounterTitleStyles>
            <CounterInnerWrapperStyles>
                <CounterFaceStyles>
                    <CounterUnitStyles>47</CounterUnitStyles>
                    <CounterUnitDescStyles>days</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles>
                    <CounterUnitStyles>07</CounterUnitStyles>
                    <CounterUnitDescStyles>hours</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles>
                    <CounterUnitStyles>56</CounterUnitStyles>
                    <CounterUnitDescStyles>min</CounterUnitDescStyles>
                </CounterFaceStyles>
                <CounterFaceStyles>
                    <CounterUnitStyles>14</CounterUnitStyles>
                    <CounterUnitDescStyles>sec</CounterUnitDescStyles>
                </CounterFaceStyles>
            </CounterInnerWrapperStyles>
        </CounterStyles>
    )
}

export default Counter;
