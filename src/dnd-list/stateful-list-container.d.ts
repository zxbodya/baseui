import * as React from 'react';
import type { StateT, StatefulComponentContainerPropsT, StateChangeTypeT } from './types';
declare class StatefulListContainer extends React.Component<StatefulComponentContainerPropsT, StateT> {
    static defaultProps: Partial<StatefulComponentContainerPropsT>;
    state: {
        items: React.ReactNode[];
    };
    onChange: ({ oldIndex, newIndex, targetRect, }: {
        oldIndex: number;
        newIndex: number;
        targetRect: ClientRect;
    }) => void;
    internalSetState(type: StateChangeTypeT, changes: StateT): void;
    render(): React.ReactNode;
}
export default StatefulListContainer;
