import * as React from 'react';
import type { PanelStateT, StatefulPanelContainerPropsT, PanelStateReducerT, StateChangeTypeT, OnChangeHandlerT } from './types';
declare class StatefulPanelContainer extends React.Component<StatefulPanelContainerPropsT, PanelStateT> {
    static defaultProps: {
        initialState: {
            expanded: boolean;
        };
        stateReducer: PanelStateReducerT;
        onChange: () => void;
    };
    state: {
        expanded: boolean;
    };
    onChange: OnChangeHandlerT;
    internalSetState(type: StateChangeTypeT, changes: PanelStateT): void;
    render(): React.ReactNode;
}
export default StatefulPanelContainer;
