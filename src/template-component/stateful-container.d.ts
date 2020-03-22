import * as React from 'react';
import type { StateT, StatefulComponentContainerPropsT, StateChangeTypeT } from './types';
declare class StatefulContainer extends React.Component<StatefulComponentContainerPropsT, StateT> {
    static defaultProps: Partial<StatefulComponentContainerPropsT>;
    state: {
        prop: boolean;
    };
    onClick: () => void;
    internalSetState(type: StateChangeTypeT, changes: StateT): void;
    render(): React.ReactNode;
}
export default StatefulContainer;
