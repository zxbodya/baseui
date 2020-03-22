import * as React from 'react';
import { SIZE, SHAPE, KIND } from '../button/index';
import type { OverrideT } from '../helpers/overrides';
import { MODE, STATE_CHANGE_TYPE } from './constants';
export declare type PropsT = {
    /** Accessible label. */
    ariaLabel?: string;
    /** Set of more than one `Button` components */
    children: Array<React.ReactNode>;
    /** Defines if the button group is disabled. */
    disabled?: boolean;
    /**
     * Use the `mode` prop to render toggleable Buttons:
     * the value `radio` will cause Buttons to behave like radio buttons,
     * the value `checkbox` will cause Buttons to behave like checkboxes.
     */
    mode?: typeof MODE[keyof typeof MODE];
    /**
     * Called with click events from children. If a child button has its
     * own click handler, the local handler will be called first, then
     * this handler will trigger.
     */
    onClick?: ClickHandlerT;
    overrides?: OverridesT<any>;
    /**
     * Index or array of indices of the selected Button(s).
     * Primarily for use with controlled components with a `mode` prop defined.
     */
    selected?: number | Array<number>;
    /** Defines the shape of the buttons in the button group. */
    shape?: typeof SHAPE[keyof typeof SHAPE];
    /** Defines the size of the buttons in the button group. */
    size?: typeof SIZE[keyof typeof SIZE];
    /** Defines the `kind` of the buttons in the group */
    kind?: typeof KIND[keyof typeof KIND];
};
declare type OverridesT<T> = {
    Root?: OverrideT<T>;
};
export declare type StatefulPropsT = Omit<{
    initialState?: {
        selected: number | Array<number>;
    };
    stateReducer?: StateReducerT;
} & PropsT, 'selected'>;
export declare type StatefulContainerPropsT = {
    children: (props: {
        onClick: ClickHandlerT;
        selected: number | Array<number>;
    } & Omit<PropsT, 'children'>) => React.ReactNode;
} & Omit<StatefulPropsT, 'children'>;
export declare type StateT = {
    selected: Array<number>;
};
export declare type StateReducerT = (stateType: typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE], nextState: StateT, currentState: StateT) => StateT;
declare type ClickHandlerT = (...args: any[]) => void;
export {};
