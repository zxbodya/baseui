import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type OverridesT = {
    Root?: OverrideT<any>;
    Bar?: OverrideT<any>;
    BarProgress?: OverrideT<any>;
    Label?: OverrideT<any>;
};
export declare type ProgressBarPropsT = {
    children?: React.ReactNode;
    /** The function that returns a progress bar label to display. */
    getProgressLabel: (value: number, successValue: number) => React.ReactNode;
    /** The value between `0` and `100 | successValue` of the progress indicator. */
    value: number;
    /** A custom completion value. Should be deleted in v10. */
    successValue: number;
    /** If set to false, label is hidden and `getProgressLabel` is ignored. */
    showLabel: boolean;
    /** If set to true, theres and infinite loading animation. */
    infinite: boolean;
    /** Error message for screen-reader users**/
    errorMessage?: string;
    overrides?: OverridesT;
};
export declare type StylePropsT = {
    $successValue: number;
    $value: number;
    $infinite: boolean;
};
