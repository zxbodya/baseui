import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE } from './constants';
export declare type StateT = {
    prop: boolean;
};
export declare type StateChangeTypeT = keyof typeof STATE_CHANGE_TYPE;
export declare type StateReducerT = (stateChangeType: StateChangeTypeT, nextState: StateT, currentState: StateT) => StateT;
export declare type ComponentRenderPropT = (props: {}) => React.ReactNode;
export declare type OverridesT = {
    Root?: OverrideT<SharedStylePropsT>;
};
export declare type ChildT = React.ReactNode;
export declare type ChildrenT = Array<ChildT> | ChildT;
export declare type ComponentPropsT = {
    children: ChildrenT;
    prop?: boolean;
    onClick?: () => void;
    overrides?: OverridesT;
};
export declare type StatefulComponentPropsT = ComponentPropsT & {
    children: ChildrenT;
    initialState?: StateT;
    stateReducer?: StateReducerT;
};
export declare type StatefulComponentContainerPropsT = Omit<StatefulComponentPropsT, 'children'> & {
    initialState?: StateT;
    children: (props: Omit<ComponentPropsT, 'children'>) => React.ReactNode;
};
export declare type SharedStylePropsT = {
    $prop: boolean;
};
