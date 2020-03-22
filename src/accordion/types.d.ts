import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE } from './constants';
export declare type AccordionStateT = {
    expanded: Array<React.Key>;
};
export declare type PanelStateT = {
    expanded: boolean;
};
export declare type StateChangeTypeT = keyof typeof STATE_CHANGE_TYPE;
export declare type StateReducerT = (stateChangeType: StateChangeTypeT, nextState: AccordionStateT, currentState: AccordionStateT) => AccordionStateT;
export declare type PanelStateReducerT = (stateChangeType: StateChangeTypeT, nextState: PanelStateT, currentState: PanelStateT) => PanelStateT;
export declare type AccordionOverridesT<T> = {
    Root?: OverrideT<T>;
};
export declare type PanelOverridesT<T> = {
    PanelContainer?: OverrideT<T>;
    Header?: OverrideT<T>;
    ToggleIcon?: OverrideT<T>;
    Content?: OverrideT<T>;
};
export declare type OnChangeHandlerT = (a: {
    expanded: boolean;
}) => unknown;
export declare type AccordionOnChangeHandlerT = (a: {
    expanded: Array<React.Key>;
}) => unknown;
declare type ChildrenT = Array<React.ReactElement<any>> | React.ReactElement<any>;
export declare type AccordionPropsT = {
    /** Determines how many panels may be expanded at a time. If set to
     * true it will collapse a current panel when a new panel is expanded.
     * If set to false more than one panel may be expanded at a time. */
    accordion?: boolean;
    /** Accordion expandable items. See Panel API below for reference. */
    children: ChildrenT;
    /** If set to true all its children panels will be disabled from toggling. */
    disabled?: boolean;
    initialState?: AccordionStateT;
    /** Handler called each time a panel is toggled. expanded prop is an array
     * of Panel keys that are currently expanded. */
    onChange?: AccordionOnChangeHandlerT;
    overrides?: AccordionOverridesT<Omit<SharedStylePropsArgT, '$expanded'>>;
    /** Handler called each time the component state changes.
     * Used to override default state-change functionality. */
    stateReducer: StateReducerT;
    /**
     * Allows users to render all child content whether a panel is expanded or not
     * for SEO purposed
     */
    renderPanelContent?: boolean;
    /**
     * Allows users to render all child content whether a panel is expanded or not
     * for SEO purposed
     */
    renderAll?: boolean;
};
declare type SharedPanelPropsT = {
    /** The content visible when Panel is expanded. */
    children: React.ReactNode;
    /** Defaults to the disabled value provided by the parent Accordion component. */
    disabled?: boolean;
    /** Id for a panel, when provided populates aria-controls
     * attribute for panel button and content
     * */
    'aria-controls'?: string;
    /** The key of a Panel. Used to maintain list of expanded panels.
     * Must be unique across children of the Accordion. */
    key?: React.Key;
    /** Handler for individual Panel change events. */
    onChange?: OnChangeHandlerT;
    /** Handler for the Header's click events. */
    onClick?: (e: Event) => unknown;
    /** Handler for the Header's keyDown events. */
    onKeyDown?: (e: KeyboardEvent) => unknown;
    overrides?: PanelOverridesT<SharedStylePropsArgT>;
    /** The title of an accordion panel. */
    title?: React.ReactNode;
    /**
     * Allows users to render all child content whether a panel is expanded or not
     * for SEO purposed
     */
    renderPanelContent?: boolean;
    /**
     * Allows users to render all child content whether a panel is expanded or not
     * for SEO purposed
     */
    renderAll?: boolean;
};
export declare type PanelPropsT = SharedPanelPropsT & {
    /** Defines if the panel is expanded. If set to true the panel is rendered expanded. */
    expanded?: boolean;
};
declare type SharedStatefulPanelContainerPropsT = {
    /** Initial state of a stateful panel component.
     * The expanded prop indicates if the panel is initially expanded.
     * If set to true the panel will be expanded initially */
    initialState?: PanelStateT;
    onChange?: OnChangeHandlerT;
    stateReducer?: PanelStateReducerT;
};
export declare type StatefulPanelContainerPropsT = SharedStatefulPanelContainerPropsT & {
    children: (props: Omit<PanelPropsT, 'children'>) => React.ReactNode;
};
export declare type StatefulPanelPropsT = SharedStatefulPanelContainerPropsT & SharedPanelPropsT;
export declare type SharedStylePropsArgT = {
    $color?: string;
    $disabled: boolean | undefined | null;
    $expanded?: boolean | null;
    $size?: string | number;
    $isFocusVisible: boolean;
};
export {};
