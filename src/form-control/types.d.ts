import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type FormControlStateT = {
    captionId: string;
};
export declare type FormControlPropsT = {
    overrides: {
        /** Customizes the label element. */
        Label?: OverrideT<any>;
        /** Customizes the caption element. */
        Caption?: OverrideT<any>;
        /** Customizes the container element. */
        ControlContainer?: OverrideT<any>;
    };
    /** A label rendered above the input field. */
    label: React.ReactNode | ((props: {}) => React.ReactNode) | undefined | null;
    /** A caption rendered below the input field. */
    caption: React.ReactNode | ((props: {}) => React.ReactNode) | undefined | null;
    /** Displays label in light gray color if true */
    disabled?: boolean;
    /** Error state of the input. If an error prop passed it will be rendered in place of caption as an error message. */
    error: React.ReactNode | ((props: {}) => React.ReactNode);
    /** Positive state of the input. If an error prop passed it will be rendered in place of positive as an error message. */
    positive: React.ReactNode | ((props: {}) => React.ReactNode);
    children: React.ReactNode;
};
export declare type StylePropsT = {
    $disabled?: boolean;
    $error?: boolean;
    $positive?: boolean;
};
