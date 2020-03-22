import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE } from './constants';
import { ReactNode } from 'react';
export declare type ChangeActionT = keyof typeof STATE_CHANGE_TYPE;
export declare type ParamsT = {
    value: Array<number>;
};
export declare type OverridesT = {
    Root?: OverrideT<any>;
    Track?: OverrideT<any>;
    InnerTrack?: OverrideT<any>;
    Tick?: OverrideT<any>;
    TickBar?: OverrideT<any>;
    Thumb?: OverrideT<any>;
    InnerThumb?: OverrideT<any>;
    ThumbValue?: OverrideT<any>;
};
export declare type PropsT = {
    /** Position of the thumbs. It can be a single point (one thumb) or 2 points array (range thumbs). */
    value: Array<number>;
    /** The minimum allowed value of the slider. Should not be bigger than max. */
    min: number;
    /** The maximum allowed value of the slider. Should not be smaller than min. */
    max: number;
    /** The granularity the slider can step through value. Default step is 1. */
    step: number;
    overrides?: OverridesT;
    /** Disable control from being changed. */
    disabled: boolean;
    /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
    onChange: (a: {} & ParamsT) => unknown;
    /** Handler for events on trigger element, each time thumbs finish changing selection, which is passed in `value`. */
    onFinalChange: (a: {} & ParamsT) => unknown;
};
export declare type StateT = {
    value: Array<number>;
};
export declare type StateReducerT = (stateType: string, nextState: StateT, currentState: StateT) => StateT;
export declare type StatefulContainerPropsT = {
    overrides?: OverridesT;
    children: (a: any) => ReactNode;
    min: number;
    max: number;
    step: number;
    /** Initial state populated into the component */
    initialState: StateT;
    /** Reducer function to manipulate internal state updates. */
    stateReducer: StateReducerT;
    /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
    onChange: (a: {} & ParamsT) => unknown;
    /** Handler for events on trigger element, each time thumbs finish changing selection, which is passed in `value`. */
    onFinalChange: (a: {} & ParamsT) => unknown;
};
export declare type StatefulSliderPropsT = {
    overrides?: OverridesT;
    /** Initial state populated into the component */
    initialState?: StateT;
    min?: number;
    max?: number;
    step?: number;
    /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
    onChange?: (a: {} & ParamsT) => unknown;
    /** Handler for events on trigger element, each time thumbs finish changing selection, which is passed in `value`. */
    onFinalChange?: (a: {} & ParamsT) => unknown;
};
export declare type StylePropsT = {
    $disabled?: boolean;
    $isDragged?: boolean;
    $max?: number;
    $min?: number;
    $thumbIndex?: number;
    $value?: Array<number>;
    $isFocusVisible?: boolean;
};
