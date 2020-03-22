import * as React from 'react';
import type { StatefulContainerPropsT, StateReducerT, StateT, ParamsT } from './types';
declare class StatefulSliderContainer extends React.Component<StatefulContainerPropsT, StateT> {
    constructor(props: StatefulContainerPropsT);
    static defaultProps: {
        stateReducer: StateReducerT;
        min: number;
        max: number;
        step: number;
        onChange: () => void;
        onFinalChange: () => void;
    };
    onChange: (params: {
        value: number[];
    }) => unknown;
    onFinalChange: (params: {
        value: number[];
    }) => unknown;
    internalSetState: (type: "change" | "finalChange", { value }: ParamsT) => void;
    render(): React.ReactNode;
}
export default StatefulSliderContainer;
