import * as React from 'react';
import type { StatefulContainerPropsT, DefaultStatefulPropsT, StateT } from './types';
declare class StatefulRadioGroupContainer extends React.Component<StatefulContainerPropsT, StateT> {
    static defaultProps: DefaultStatefulPropsT;
    constructor(props: StatefulContainerPropsT);
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    stateReducer: (type: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): any;
}
export default StatefulRadioGroupContainer;
