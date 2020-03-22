import * as React from 'react';
import type { StatefulTabsPropsT, StatefulTabsStateT, StateChangeTypeT } from './types';
export default class StatefulTabs extends React.Component<StatefulTabsPropsT, StatefulTabsStateT> {
    static defaultProps: Partial<StatefulTabsPropsT>;
    state: {
        activeKey: any;
    };
    onTabChange: (newState: StatefulTabsStateT) => void;
    internalSetState(type: StateChangeTypeT, changes: StatefulTabsStateT): void;
    getInitialKey(): any;
    render(): JSX.Element;
}
