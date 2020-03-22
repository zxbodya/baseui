import * as React from 'react';
import type { StatefulContainerPropsT, TreeNodeT } from './types';
declare type StateType = {
    data: TreeNodeT[];
};
export default class StatefulContainer extends React.Component<StatefulContainerPropsT, StateType> {
    state: StateType;
    constructor(props: StatefulContainerPropsT);
    onToggle: (node: TreeNodeT) => void;
    render(): React.ReactNode;
}
export {};
