import type { ThemeT } from '../styles/types';
import type { OverrideT } from '../helpers/overrides';
export declare type RatingOverridesT = {
    Root?: OverrideT<any>;
    Item?: OverrideT<any>;
};
export declare type StarRatingPropsT = {
    overrides?: RatingOverridesT;
    /** The current rating value. */
    value?: number;
    /** The total number of items to display. */
    numItems: number;
    /** Callback that's called with the newly selected value. */
    onChange?: (a: {
        value: number;
    }) => unknown;
};
export declare type EmoticonRatingPropsT = {
    overrides?: RatingOverridesT;
    /** The current rating value. */
    value?: number;
    /** Callback that's called with the newly selected value. */
    onChange?: (a: {
        value: number;
    }) => unknown;
};
export declare type RatingStateT = {
    previewIndex?: number;
    isFocusVisible?: boolean;
};
export declare type StyledRootPropsT = {
    $theme: ThemeT;
};
export declare type StyledRatingItemPropsT = {
    $theme: ThemeT;
    $isActive: boolean;
    $isSelected: boolean;
    $isFocusVisible: boolean;
    $index: number;
};
