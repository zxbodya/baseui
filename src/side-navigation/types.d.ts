import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
declare const stateChangeType: Readonly<{
    readonly change: "change";
}>;
export declare type StateTypeT = typeof stateChangeType[keyof typeof stateChangeType];
export declare type StateT = {
    activeItemId?: string;
};
export declare type StateReducerT = (stateType: StateTypeT, nextState: StateT, currentState: StateT) => StateT;
export declare type SharedPropsT = {
    /** Defines if the nav item is currently selected */
    $active: boolean;
    /** Defines the nesting level of the rendered nav item */
    $level: number;
    /** Defines if the nav item is selectable/clickable */
    $selectable: boolean;
};
export declare type NavPropsT = {
    /** Defines the current active itemId. Used for the default calculation of the $active prop */
    activeItemId: string;
    /**
      Is called on the nav item render to test if the item is currently selected.
      If returns true the item will be rendered as an active one
      */
    activePredicate: ((item: any, activeItemId: string) => boolean) | undefined | null;
    /** List of navigation items */
    items: Item[];
    /** Used as a performance optimization if many nav items are rendered. Function provided to
     *  NavItem component's React.memo call.
     */
    itemMemoizationComparator?: (b: NavItemPropsT, a: NavItemPropsT) => boolean;
    /** onChange handler that is called when a nav item is selected */
    onChange?: (a: {
        item: any;
        event: Event | KeyboardEvent;
    }) => unknown;
    /** Overrides for the internal elements and components */
    overrides: {
        Root?: OverrideT<any>;
        NavItemContainer?: OverrideT<any>;
        NavLink?: OverrideT<any>;
        NavItem?: OverrideT<any>;
        SubNavContainer?: OverrideT<any>;
    };
    /** Optional transform function that is called for each Item */
    mapItem: ((item: Item) => Item) | undefined | null;
};
export declare type Item = {
    /** Navigation item's title to render */
    title: React.ReactNode;
    /**
      Identifier for the navigation item.
      Can be a path value or an action name.
      It's also used in the default `activePredicate` to
      identify a currently active item
      */
    itemId?: string;
    /** A list of sub-navigation items */
    subNav?: Item[];
};
export declare type NavItemPropsT = SharedPropsT & {
    item: Item;
    /** Used as a performance optimization if many nav items are rendered. Function provided to
     *  NavItem component's React.memo call.
     */
    itemMemoizationComparator?: (b: NavItemPropsT, a: NavItemPropsT) => boolean;
    onSelect?: (a: {
        item: any;
        event: Event | KeyboardEvent;
    }) => unknown;
    overrides: {
        NavLink?: OverrideT<any>;
        NavItem?: OverrideT<any>;
    };
};
export declare type StatefulContainerPropsT = {
    children: (a: NavPropsT) => React.ReactNode;
    /** Initial state of an uncontrolled component. */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer?: StateReducerT;
    onChange?: (a: {
        item: any;
        event: Event | KeyboardEvent;
    }) => unknown;
};
declare type ExcludeT = {
    children: (a: NavPropsT) => React.ReactNode;
};
export declare type StatefulNavPropsT = Omit<StatefulContainerPropsT, keyof ExcludeT>;
export {};
