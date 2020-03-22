import React from 'react';
import type { ChangeEventT, StatefulPinCodeContainerPropsT, StatefulPinCodeContainerStateT, StateReducerT } from './types';
export default class StatefulPinCodeContainer extends React.Component<StatefulPinCodeContainerPropsT, StatefulPinCodeContainerStateT> {
    static defaultProps: {
        initialState: {
            values: string[];
        };
        stateReducer: StateReducerT;
        onChange: () => void;
    };
    state: StatefulPinCodeContainerStateT;
    handleChange: ({ values, event }: ChangeEventT) => void;
    render(): React.ReactNode;
}
