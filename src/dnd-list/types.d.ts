import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE } from './constants';
export declare type StateT = {
    items: Array<React.ReactNode>;
};
export declare type StateChangeTypeT = typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE];
export declare type StateReducerT = (stateChangeType: StateChangeTypeT, nextState: StateT, currentState: StateT) => StateT;
export declare type OverridesT = {
    Root?: OverrideT<SharedStylePropsArgT>;
    List?: OverrideT<SharedStylePropsArgT>;
    Item?: OverrideT<SharedStylePropsArgT>;
    DragHandle?: OverrideT<SharedStylePropsArgT>;
    CloseHandle?: OverrideT<SharedStylePropsArgT>;
    Label?: OverrideT<SharedStylePropsArgT>;
};
export declare type ListPropsT = {
    /** Set if the list items should be removable */
    removable?: boolean;
    /** Set if the list items should be removable by dragging them far left or right */
    removableByMove?: boolean;
    /** Items (labels) to be rendered */
    items: Array<React.ReactNode>;
    /** Handler for when drag and drop is finished and order changed or item is deleted (newIndex would be -1 in that case) */
    onChange: (a: {
        oldIndex: number;
        newIndex: number;
    }) => unknown;
    overrides?: OverridesT;
};
export declare type StatefulListPropsT = {
    /** Initial state populated into the component */
    initialState?: StateT;
    /** Reducer function to manipulate internal state updates. */
    stateReducer?: StateReducerT;
    /** Set if the list items should be removable */
    removable?: boolean;
    /** Set if the list items should be removable by dragging them far left or right */
    removableByMove?: boolean;
    /** Handler for when drag and drop is finished and order changed or item is deleted (newIndex would be -1 in that case) */
    onChange?: (params: {
        newState: Array<React.ReactNode>;
        oldIndex: number;
        newIndex: number;
        targetRect: ClientRect;
    }) => unknown;
    overrides?: OverridesT;
};
export declare type StatefulComponentContainerPropsT = Omit<StatefulListPropsT, 'children'> & {
    initialState?: StateT;
    children: (props: Omit<ListPropsT, 'children'>) => React.ReactNode;
};
export declare type SharedStylePropsArgT = {
    $isDragged: boolean;
    $isSelected: boolean;
    $isFocusVisible: boolean;
    $isRemovable: boolean;
    $isRemovableByMove: boolean;
    $isOutOfBounds: boolean;
    $value: React.ReactNode;
    $index: number;
};
