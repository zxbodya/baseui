import * as React from 'react';
import { Range } from 'react-range';
import type { PropsT } from './types';
declare class Slider extends React.Component<PropsT, {
    isFocusVisible: boolean;
    focusedThumbIndex: number;
}> {
    static defaultProps: {
        overrides: {};
        disabled: boolean;
        onChange: () => void;
        onFinalChange: () => void;
        min: number;
        max: number;
        step: number;
    };
    state: {
        isFocusVisible: boolean;
        focusedThumbIndex: number;
    };
    rangeRef: React.RefObject<Range>;
    getSharedProps(): {
        $disabled: boolean;
        $step: number;
        $min: number;
        $max: number;
        $value: number[];
        $isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
export default Slider;
