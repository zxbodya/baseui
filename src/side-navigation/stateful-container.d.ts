import * as React from 'react';
import type { StatefulContainerPropsT, StateT, StateReducerT, Item } from './types';
declare class StatefulContainer extends React.Component<StatefulContainerPropsT, StateT> {
    static defaultProps: {
        initialState: {};
        stateReducer: StateReducerT;
        onChange: () => void;
    };
    state: StateT;
    onChange: (params: {
        item: Item;
        event: Event | KeyboardEvent;
    }) => void;
    internalSetState: (type: "change", item: any) => void;
    render(): any;
}
export default StatefulContainer;
