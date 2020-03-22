import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPES, OPTION_LIST_SIZE } from './constants';
import { SyntheticEvent, FocusEvent, MouseEvent } from 'react';
export declare type ItemT = any;
export declare type ArrayItemsT = ReadonlyArray<ItemT>;
export declare type GroupedItemsT = {
    __ungrouped: ArrayItemsT;
    [x: string]: ArrayItemsT;
};
export declare type ItemsT = ArrayItemsT | GroupedItemsT;
export declare type GetItemLabelFnT = (item: ItemT) => React.ReactNode;
export declare type GetProfileItemLabelsFnT = (item: ItemT) => {
    title?: string;
    subtitle?: string;
    body?: string;
};
export declare type GetProfileItemImgFnT = (item: ItemT) => string | React.ComponentType<any>;
export declare type GetProfileItemImgTextFnT = (item: ItemT) => string;
export declare type SetRootRefFnT = (ref: React.RefObject<any>) => void;
export declare type RootRefT = React.RefObject<any>;
export declare type OnItemSelectFnT = (a: {
    item: ItemT;
    event?: SyntheticEvent<HTMLElement> | KeyboardEvent;
}) => unknown;
export declare type ProfileOverridesT = {
    List?: OverrideT<any>;
    ListItemProfile?: OverrideT<any>;
    ProfileImgContainer?: OverrideT<any>;
    ProfileImg?: OverrideT<any>;
    ProfileLabelsContainer?: OverrideT<any>;
    ProfileTitle?: OverrideT<any>;
    ProfileSubtitle?: OverrideT<any>;
    ProfileBody?: OverrideT<any>;
};
export declare type RenderItemPropsT = {
    disabled?: boolean;
    ref?: React.Ref<any>;
    id?: string | null;
    isFocused?: boolean;
    isHighlighted?: boolean;
    onClick?: (event: MouseEvent<HTMLElement>) => unknown;
    onMouseEnter?: (event: MouseEvent<HTMLElement>) => unknown;
    resetMenu?: () => unknown;
};
export declare type GetRequiredItemPropsFnT = (item: ItemT, index: number) => Partial<RenderItemPropsT>;
export declare type StateReducerFnT = (changeType: keyof typeof STATE_CHANGE_TYPES | undefined | null, changes: Partial<StatefulContainerStateT>, currentState: StatefulContainerStateT) => StatefulContainerStateT;
export declare type StatefulContainerStateT = {
    activedescendantId?: string | null;
    highlightedIndex: number;
    isFocused: boolean;
};
export declare type InitialStateT = {
    activedescendantId?: string | null;
    highlightedIndex?: number;
    isFocused?: boolean;
};
export declare type RenderPropsT = StatefulContainerStateT & {
    items: ItemsT;
    getRequiredItemProps: GetRequiredItemPropsFnT;
};
/**
 * Component Prop Types
 * ====================
 * Required and Optional are split into separate object types, and internals are all
 * marked as required because otherwise defaultProps will not work properly
 */
export declare type StatefulContainerPropsT = {
    /** List of menu items. */
    items: ItemsT;
    /** Initial state of the stateful menu. */
    initialState: InitialStateT;
    /** State reducer to intercept state changes and return new internal state */
    stateReducer: StateReducerFnT;
    /** Function to get props for each rendered item. This will have some defaults needed for keyboard
     * bindings to work properly. Every rendered item should call this.
     */
    getRequiredItemProps: GetRequiredItemPropsFnT;
    onActiveDescendantChange?: (id?: string) => unknown;
    /** Callback executed on menu item clicks. */
    onItemSelect: OnItemSelectFnT;
    /** Ref for the menu container element. Used to capture key events for navigation */
    rootRef?: RootRefT;
    /** Child as function pattern. */
    children: (a: RenderPropsT) => React.ReactNode;
    addMenuToNesting?: (ref: {
        current: HTMLElement | null;
    }) => void;
    removeMenuFromNesting?: (ref: {
        current: HTMLElement | null;
    }) => void;
    getParentMenu?: (ref: {
        current: HTMLElement | null;
    }) => {
        current: HTMLElement | null;
    } | undefined | null;
    getChildMenu?: (ref: {
        current: HTMLElement | null;
    }) => {
        current: HTMLElement | null;
    } | undefined | null;
};
export declare type MenuPropsT = {
    overrides?: {
        EmptyState?: OverrideT<any>;
        List?: OverrideT<any>;
        Option?: OverrideT<any>;
        OptgroupHeader?: OverrideT<any>;
    };
    /** Renders all menu content for SEO purposes regardless of menu  state */
    renderAll?: boolean;
};
export declare type MenuProfilePropsT = {
    /** Returns an object consisting of title, subtitle, and body to render menu item */
    getProfileItemLabels: GetProfileItemLabelsFnT;
    /** Returns either an image source url, or a full React component to render as the image. */
    getProfileItemImg: GetProfileItemImgFnT;
    /** Returns the alt text for the image */
    getProfileItemImgText: GetProfileItemImgTextFnT;
    overrides?: ProfileOverridesT;
};
export declare type SharedStatelessPropsT = {
    /** Id of the highlighted menu item. */
    activedescendantId?: string | null;
    /** Function to get props for each rendered item. This will have some defaults needed for keyboard
     * bindings to work properly. Every rendered item should call this.
     */
    getRequiredItemProps?: GetRequiredItemPropsFnT;
    /** Index of highlighted menu item. */
    highlightedIndex?: number;
    /** List of menu items. */
    items: ItemsT;
    /** Message to be displayed if no menu items are passed in. */
    noResultsMsg?: React.ReactNode;
    onBlur?: (event: FocusEvent<HTMLElement>) => unknown;
    onFocus?: (event: FocusEvent<HTMLElement>) => unknown;
    /** Ref for the menu container element. Used to capture key events for navigation */
    rootRef?: RootRefT;
    focusMenu?: (event: FocusEvent | MouseEvent | KeyboardEvent) => unknown;
    unfocusMenu?: () => unknown;
};
export declare type StatefulMenuPropsT = {
    /** List of menu items. */
    items: ItemsT;
    /** Initial state of the stateful menu. */
    initialState?: InitialStateT;
    /** State reducer to intercept state changes and return new internal state */
    stateReducer?: StateReducerFnT;
    /** Function to get props for each rendered item. This will have some defaults needed for keyboard
     * bindings to work properly. Every rendered item should call this.
     */
    getRequiredItemProps?: GetRequiredItemPropsFnT;
    onActiveDescendantChange?: (id?: string) => unknown;
    /** Callback executed on menu item clicks. */
    onItemSelect?: OnItemSelectFnT;
    /** Ref for the menu container element. Used to capture key events for navigation */
    rootRef?: RootRefT;
    /** Child as function pattern. */
    children?: (a: RenderPropsT) => React.ReactNode;
    addMenuToNesting?: (ref: {
        current: HTMLElement | null;
    }) => void;
    removeMenuFromNesting?: (ref: {
        current: HTMLElement | null;
    }) => void;
    getParentMenu?: (ref: {
        current: HTMLElement | null;
    }) => {
        current: HTMLElement | null;
    } | undefined | null;
    getChildMenu?: (ref: {
        current: HTMLElement | null;
    }) => {
        current: HTMLElement | null;
    } | undefined | null;
} & MenuPropsT;
export declare type StatefulMenuProfilePropsT = StatefulContainerPropsT & MenuProfilePropsT;
export declare type StatelessMenuPropsT = SharedStatelessPropsT & MenuPropsT;
export declare type StatelessMenuProfilePropsT = SharedStatelessPropsT & MenuProfilePropsT;
export declare type OptionListPropsT = {
    /** Item to parse and render. */
    item: ItemT;
    /** Function used to get the string label for each item. */
    getItemLabel: GetItemLabelFnT;
    /** Used to render a sub menu at this menu item. You'll often render another menu from this function. */
    getChildMenu?: (item: ItemT) => React.ReactNode;
    /** Callback used to change highlighted index in stateful menu. */
    onMouseEnter?: (event: MouseEvent) => unknown;
    /** Renders UI in defined scale. */
    size?: keyof typeof OPTION_LIST_SIZE;
    overrides?: {
        ListItem?: OverrideT<any>;
        ListItemAnchor?: OverrideT<any>;
    };
    /** Utility to reset menu to default state. Useful for rendering child menus. */
    resetMenu?: () => void;
    /** Renders UI in 'highlighted' state. */
    $isHighlighted?: boolean;
    /** Is the parent menu focused. determines if highlighted item should be blue or black */
    $isFocused?: boolean;
    /** Renders all menu content for SEO purposes regardless of menu  state */
    renderAll?: boolean;
};
export declare type OptionProfilePropsT = {
    /** Item to parse and render. */
    item: ItemT;
    /** Used to render a sub menu at this menu item. You'll often render another menu from this function. */
    getChildMenu?: (item: ItemT) => React.ReactNode;
    /** Returns an object consisting of title, subtitle, and body to render menu item */
    getProfileItemLabels: GetProfileItemLabelsFnT;
    /** Returns either an image source url, or a full React component to render as the image. */
    getProfileItemImg: GetProfileItemImgFnT;
    /** Returns the alt text for the image */
    getProfileItemImgText: GetProfileItemImgTextFnT;
    overrides?: {
        ListItemProfile?: OverrideT<any>;
        ProfileImgContainer?: OverrideT<any>;
        ProfileImg?: OverrideT<any>;
        ProfileLabelsContainer?: OverrideT<any>;
        ProfileTitle?: OverrideT<any>;
        ProfileSubtitle?: OverrideT<any>;
        ProfileBody?: OverrideT<any>;
    };
    /** Utility to reset menu to default state. Useful for rendering child menus. */
    resetMenu?: () => void;
    /** Renders UI in 'highlighted' state. */
    $isHighlighted?: boolean;
    /** Renders all menu content for SEO purposes regardless of menu  state */
    renderAll?: boolean;
};
