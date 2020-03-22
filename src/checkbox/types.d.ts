import type { OverrideT } from '../helpers/overrides';
import { STYLE_TYPE } from './constants';
import type { ReactNode, ChangeEvent } from 'react';
export declare type LabelPlacementT = 'top' | 'right' | 'bottom' | 'left';
export declare type StyleTypeT = keyof typeof STYLE_TYPE;
export declare type OverridesT = {
    Checkmark?: OverrideT<any>;
    Label?: OverrideT<any>;
    Root?: OverrideT<any>;
    Input?: OverrideT<any>;
    Toggle?: OverrideT<any>;
    ToggleInner?: OverrideT<any>;
    ToggleTrack?: OverrideT<any>;
};
export declare type DefaultPropsT = {
    overrides?: any;
    children?: ReactNode;
    checked: boolean;
    disabled: boolean;
    isError: boolean;
    type: string;
    autoFocus: boolean;
    isIndeterminate: boolean;
    inputRef: {
        current: HTMLInputElement | null;
    };
    checkmarkType: StyleTypeT;
    onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseEnter: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseLeave: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseDown: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseUp: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onFocus: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => unknown;
};
export declare type PropsT = {
    /** Id of element which contains a related caption */
    'aria-describedby'?: string;
    /** Id of element which contains a related error message */
    'aria-errormessage'?: string;
    /** Component or String value for label of checkbox. */
    children?: ReactNode;
    overrides?: OverridesT;
    /** Check or uncheck the control. */
    checked?: boolean;
    /** Disable the checkbox from being changed. */
    disabled?: boolean;
    /** Marks the checkbox as required. */
    required?: boolean;
    /** Renders checkbox in errored state. */
    isError?: boolean;
    /** Used to get a ref to the input element. Useful for programmatically focusing the input */
    inputRef: {
        current: HTMLInputElement | null;
    };
    /** Focus the checkbox on initial render. */
    autoFocus?: boolean;
    /** Passed to the input element type attribute */
    type?: string;
    /** Passed to the input element name attribute */
    name?: string;
    /** Passed to the input element value attribute */
    value?: string;
    /** Indicates a 'half' state for the checkmark. In this case, `checked` is ignored. */
    isIndeterminate?: boolean;
    /** How to position the label relative to the checkbox itself. */
    labelPlacement?: LabelPlacementT;
    /** Renders UI as checkmark or toggle switch. */
    checkmarkType: StyleTypeT;
    /** Text to display in native OS tooltip on long hover. */
    title?: string | null;
    /** Handler for change events on trigger element. */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseenter events on trigger element. */
    onMouseEnter: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseleave events on trigger element. */
    onMouseLeave: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mousedown events on trigger element. */
    onMouseDown: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseup events on trigger element. */
    onMouseUp: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** handler for focus events on trigger element. */
    onFocus: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** handler for blur events on trigger element. */
    onBlur: (e: ChangeEvent<HTMLInputElement>) => unknown;
};
export declare type StatelessStateT = {
    isFocused: boolean;
    isFocusVisible: boolean;
    isHovered: boolean;
    isActive: boolean;
};
export declare type StateT = {
    checked?: boolean;
    isIndeterminate?: boolean;
};
export declare type StateReducerT = (stateType: string, nextState: StateT, currentState: StateT, event: ChangeEvent<HTMLInputElement>) => StateT;
export declare type DefaultStatefulPropsT = {
    initialState: StateT;
    children?: (a: any) => ReactNode;
    stateReducer: StateReducerT;
    onChange: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseEnter: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onMouseLeave: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onFocus: (e: ChangeEvent<HTMLInputElement>) => unknown;
    onBlur: (e: ChangeEvent<HTMLInputElement>) => unknown;
};
export declare type StatefulContainerPropsT = {
    overrides?: OverridesT;
    /** Component or String value for label of checkbox. */
    children?: (a: any) => ReactNode;
    /** Defines the components initial state value */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer: StateReducerT;
    /** Handler for change events on trigger element. */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseenter events on trigger element. */
    onMouseEnter?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseleave events on trigger element. */
    onMouseLeave?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for focus events on trigger element. */
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for blur events on trigger element. */
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Focus the checkbox on initial render. */
    autoFocus?: boolean;
};
export declare type StatefulCheckboxPropsT = {
    overrides?: OverridesT;
    /** Component or String value for label of checkbox. */
    children?: ReactNode;
    /** Defines the components initial state value */
    initialState?: StateT;
    /** Focus the checkbox on initial render. */
    autoFocus?: boolean;
    /** Handler for change events on trigger element. */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseenter events on trigger element. */
    onMouseEnter?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for mouseleave events on trigger element. */
    onMouseLeave?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for focus events on trigger element. */
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Handler for blur events on trigger element. */
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => unknown;
};
export declare type SharedStylePropsT = {
    $isFocused: boolean;
    $isFocusVisible: boolean;
    $isHovered: boolean;
    $isActive: boolean;
    $isError: boolean;
    $checked: boolean;
    $isIndeterminate: boolean;
    $required: boolean;
    $disabled: boolean;
    $value: string;
    $checkmarkType: StyleTypeT;
    $labelPlacement: LabelPlacementT;
};
