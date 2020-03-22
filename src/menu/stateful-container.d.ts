import * as React from 'react';
import { STATE_CHANGE_TYPES } from './constants';
import type { StatefulContainerPropsT, StatefulContainerStateT, GetRequiredItemPropsFnT, StateReducerFnT } from './types';
export default class MenuStatefulContainer extends React.Component<StatefulContainerPropsT, StatefulContainerStateT> {
    static defaultProps: {
        initialState: {
            highlightedIndex: number;
            isFocused: boolean;
        };
        stateReducer: StateReducerFnT;
        onItemSelect: () => void;
        getRequiredItemProps: () => {};
        children: () => any;
        addMenuToNesting: () => void;
        removeMenuFromNesting: () => void;
        getParentMenu: () => void;
        getChildMenu: () => void;
    };
    state: StatefulContainerStateT;
    rootRef: {
        current: HTMLElement;
    };
    getItems(): any[];
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(_: unknown, prevState: StatefulContainerStateT): void;
    refList: Array<React.RefObject<any>>;
    optionIds: string[];
    internalSetState(changeType: keyof typeof STATE_CHANGE_TYPES, changes: Partial<StatefulContainerStateT>): void;
    onKeyDown: (event: KeyboardEvent) => void;
    handleArrowKey: (event: KeyboardEvent) => void;
    handleEnterKey: (event: KeyboardEvent) => void;
    handleItemClick: (index: number, item: any, event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handleMouseEnter: (index: number) => void;
    getRequiredItemProps: GetRequiredItemPropsFnT;
    focusMenu: (event: MouseEvent | KeyboardEvent | FocusEvent) => void;
    unfocusMenu: () => void;
    resetMenu: () => void;
    render(): React.ReactNode;
}
