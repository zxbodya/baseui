import * as React from 'react';
import type { StatefulContainerPropsT, StateReducerT, StateT, OnChangeParamsT } from './types';
declare class StatefulSelectContainer extends React.Component<StatefulContainerPropsT, StateT> {
    static defaultProps: {
        initialState: {
            value: any[];
        };
        onChange: () => void;
        overrides: {};
        stateReducer: StateReducerT;
    };
    state: {
        value: import("./types").ValueT;
    };
    onChange: (params: OnChangeParamsT) => void;
    internalSetState: (params: OnChangeParamsT) => void;
    render(): any;
}
export default StatefulSelectContainer;
