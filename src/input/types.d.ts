import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE, ADJOINED, SIZE, ENHANCER_POSITION } from './constants';
import { SyntheticEvent, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
export declare type AdjoinedT = keyof typeof ADJOINED;
export declare type SizeT = keyof typeof SIZE;
export declare type StateTypeT = keyof typeof STATE_CHANGE_TYPE;
export declare type InternalStateT = {
    /** Renders UI in 'focus' state */
    isFocused?: boolean;
    /** Renders input in 'masked' state if type equals "password" */
    isMasked?: boolean;
    /** Tracks if focus should be visible on the clear button. */
    isFocusVisibleForClear?: boolean;
    /** Tracks if focus should be visible on the mask toggle button. */
    isFocusVisibleForMaskToggle?: boolean;
};
export declare type StateT = {
    value?: string | number;
};
export declare type StateReducerT = (stateType: StateTypeT, nextState: StateT, currentState: StateT) => StateT;
export declare type SharedPropsT = {
    /** Renders UI in 'focus' state */
    $isFocused?: boolean;
    /** Renders UI in 'disabled' state */
    $disabled?: boolean;
    /** Renders UI in 'error' state */
    $error?: boolean;
    /** Renders UI in 'positive' state */
    $positive?: boolean;
    /** Defines styles for inputs that are grouped with other controls. */
    $adjoined: AdjoinedT;
    /** Renders UI in provided size. */
    $size: SizeT;
    /** Renders UI in 'required' state */
    $required?: boolean;
    $position?: keyof typeof ENHANCER_POSITION;
};
export declare type PropsT = any;
export declare type BaseInputComponentsT = {
    InputContainer?: OverrideT<any>;
    Input?: OverrideT<any>;
    Before?: OverrideT<any>;
    After?: OverrideT<any>;
    ClearIcon?: OverrideT<any>;
    ClearIconContainer?: OverrideT<any>;
    MaskToggleButton?: OverrideT<any>;
    MaskToggleShowIcon?: OverrideT<any>;
    MaskToggleHideIcon?: OverrideT<any>;
};
export declare type InputComponentsT = {
    Root?: OverrideT<any>;
    StartEnhancer?: OverrideT<any>;
    EndEnhancer?: OverrideT<any>;
} & BaseInputComponentsT;
export declare type BaseInputPropsT<T> = {
    /** Id of element which contains a related error message */
    'aria-errormessage'?: string;
    /** Sets aria-label attribute. */
    'aria-label'?: string;
    /** Sets aria-labelledby attribute. */
    'aria-labelledby'?: string;
    /** Sets aria-describedby attribute. */
    'aria-describedby'?: string;
    /** Defines styles for inputs that are grouped with other controls. */
    adjoined?: AdjoinedT;
    /** Determines if browser should provide value suggestions. */
    autoComplete?: string;
    /** If true the input will be focused on the first mount. */
    autoFocus?: boolean;
    /** Renders component in 'disabled' state. */
    disabled?: boolean;
    /** Renders component in 'error' state. */
    error?: boolean;
    /** Renders component in 'positive' state. */
    positive?: boolean;
    /** A regex that is used to validate the value of the input on form submission. */
    pattern?: string;
    /** Id attribute value to be added to the input element and as a label's for attribute value. */
    id?: string;
    'data-baseweb'?: string;
    /** A  hint as to the type of data that might be entered by the user while editing the element or its contents. */
    inputMode?: string;
    /** A ref to access an input element. */
    inputRef?: React.RefObject<any>;
    name?: string;
    onBlur?: (e: FocusEvent<T>) => unknown;
    onChange?: (e: ChangeEvent<T>) => unknown;
    onKeyDown?: (e: KeyboardEvent<T>) => unknown;
    onKeyPress?: (e: KeyboardEvent<T>) => unknown;
    onKeyUp?: (e: KeyboardEvent<T>) => unknown;
    onFocus?: (e: FocusEvent<T>) => unknown;
    /** If true, adds a clear value icon button to the end of the input container. */
    clearable?: boolean;
    onClear?: (e: SyntheticEvent<T>) => unknown;
    overrides?: BaseInputComponentsT;
    placeholder?: string;
    /** Renders component in 'required' state. */
    required?: boolean;
    /** Renders component in provided size. */
    size?: SizeT;
    /** Input type attribute. */
    type?: string;
    /** Input value attribute. */
    value?: string | number;
    rows?: number;
    /** min value when used as input type=number */
    min?: number;
    /** max value when used as input type=number */
    max?: number;
};
export declare type InputPropsT = {
    overrides?: InputComponentsT;
    /** An input helper rendered before and attached to the input field. */
    startEnhancer?: React.ReactNode | ((props: PropsT) => React.ReactNode);
    /** An input helper rendered after and attached to the input field. */
    endEnhancer?: React.ReactNode | ((props: PropsT) => React.ReactNode);
    /** Handler for the `focus` event. */
    onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => unknown;
    /** Handler for the `blur` event. */
    onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => unknown;
} & BaseInputPropsT<HTMLInputElement | HTMLTextAreaElement>;
export declare type MaskedInputPropsT = Partial<{
    /** See pattern examples here: https://github.com/sanniassin/react-input-mask */
    mask?: string;
    /** Character to render for unfilled mask element. */
    maskChar?: string;
} & InputPropsT>;
export declare type StatefulContainerPropsT<T> = {
    children: (props: PropsT) => React.ReactNode;
    /** Initial state of an uncontrolled input component. */
    initialState?: StateT;
    /** A state change handler. Used to override default state transitions. */
    stateReducer?: StateReducerT;
    onChange?: (e: ChangeEvent<T>) => unknown;
    /** If true, adds a clear value icon button to the end of the input container. */
    clearable?: boolean;
} & {
    overrides?: InputComponentsT;
} & Omit<InputPropsT, 'overrides' | 'children'>;
declare type FullStPropsT = InputPropsT & StatefulContainerPropsT<HTMLInputElement | HTMLTextAreaElement>;
export declare type StInputPropsDiffT = Omit<FullStPropsT, 'overrides' | 'children'>;
export declare type StatefulInputPropsT = {
    overrides?: InputComponentsT;
} & StInputPropsDiffT;
export {};
