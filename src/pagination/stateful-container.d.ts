import * as React from 'react';
import { STATE_CHANGE_TYPE } from './constants';
import type { StatefulContainerPropsT, StatefulContainerStateT } from './types';
export default class PaginationStatefulContainer extends React.Component<StatefulContainerPropsT, StatefulContainerStateT> {
    static defaultProps: {
        initialState: {
            currentPage: number;
        };
        stateReducer: (changeType: any, changes: any) => any;
    };
    state: StatefulContainerStateT;
    internalSetState(changeType: keyof typeof STATE_CHANGE_TYPE, changes: StatefulContainerStateT): void;
    onPageChange: StatefulContainerPropsT['onPageChange'];
    render(): any;
}
