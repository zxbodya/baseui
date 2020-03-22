import * as React from 'react';
import type { StatefulContainerPropsT, DefaultStatefulPropsT, StateT } from './types';
declare class StatefulCheckboxContainer extends React.Component<StatefulContainerPropsT, StateT> {
    static defaultProps: DefaultStatefulPropsT;
    constructor(props: StatefulContainerPropsT);
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseEnter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseLeave: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    stateReducer: (type: string, e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): any;
}
export default StatefulCheckboxContainer;
