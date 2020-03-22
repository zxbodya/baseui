import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants';
import type { StatefulContainerPropsT, StateT } from './types';
declare function defaultStateReducer(type: typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE], nextState: StateT, currentState: StateT): StateT;
export default class StatefulContainer extends React.Component<StatefulContainerPropsT, StateT> {
    static defaultProps: {
        initialState: {
            selected: any[];
        };
        stateReducer: typeof defaultStateReducer;
    };
    constructor(props: StatefulContainerPropsT);
    changeState: (nextState: StateT) => void;
    onClick: (event: React.SyntheticEvent<HTMLButtonElement, Event>, index: number) => void;
    render(): React.ReactNode;
}
export {};
