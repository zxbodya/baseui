import { KIND, SIZE, SHAPE } from './constants';
import type { OverrideT } from '../helpers/overrides';
import type { ReactNode, SyntheticEvent } from 'react';
export declare type OverridesT = {
    BaseButton?: OverrideT<any>;
    StartEnhancer?: OverrideT<any>;
    EndEnhancer?: OverrideT<any>;
    LoadingSpinnerContainer?: OverrideT<any>;
    LoadingSpinner?: OverrideT<any>;
};
export declare type ButtonPropsT = {
    children?: ReactNode;
    disabled?: boolean;
    /** A helper rendered at the end of the button. */
    endEnhancer?: (a: any) => ReactNode | ReactNode;
    /** Show loading button style and spinner. */
    isLoading?: boolean;
    /** Indicates that the button is selected */
    isSelected?: boolean;
    /** Defines the kind (purpose) of a button */
    kind?: keyof typeof KIND;
    onClick?: (a: SyntheticEvent<HTMLButtonElement>) => unknown;
    overrides?: OverridesT;
    /** Defines the shape of the button */
    shape?: keyof typeof SHAPE;
    /** Defines the size of the button */
    size?: keyof typeof SIZE;
    /** A helper rendered at the start of the button. */
    startEnhancer?: (a: any) => ReactNode | ReactNode;
    type?: 'submit' | 'reset' | 'button';
};
export declare type SharedStylePropsT = {
    $kind?: keyof typeof KIND;
    $isSelected?: boolean;
    $shape?: keyof typeof SHAPE;
    $size?: keyof typeof SIZE;
    $isLoading?: boolean;
    $disabled?: boolean;
    $isFocusVisible: boolean;
};
