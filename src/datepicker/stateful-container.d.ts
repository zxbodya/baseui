import * as React from 'react';
import type { CalendarPropsT, ContainerStateT, DatepickerPropsT, StatefulContainerPropsT, StateChangeTypeT, StateReducerT } from './types';
declare type PropsT = StatefulContainerPropsT<CalendarPropsT | DatepickerPropsT>;
declare class StatefulContainer extends React.Component<PropsT, ContainerStateT> {
    static defaultProps: {
        initialState: {};
        stateReducer: StateReducerT;
        onChange: () => void;
    };
    constructor(props: PropsT);
    onChange: (data: {
        date: Date | Date[];
    }) => void;
    internalSetState(type: StateChangeTypeT, changes: ContainerStateT): void;
    render(): React.ReactNode;
}
export default StatefulContainer;
