import * as React from 'react';
import type { StatefulContainerPropsT, StateT, StateReducerT } from './types';
declare class StatefulContainer<T extends EventTarget> extends React.Component<StatefulContainerPropsT<T>, StateT> {
    static defaultProps: {
        initialState: {};
        stateReducer: StateReducerT;
        onChange: () => void;
        onClear: () => void;
    };
    state: StateT;
    onChange: (e: React.ChangeEvent<T>) => void;
    internalSetState: (type: "change", nextState: StateT) => void;
    render(): React.ReactNode;
}
export default StatefulContainer;
