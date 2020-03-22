import type { BlockPropsT, ResponsiveT, ScaleT } from '../block/types';
export declare type FlexGridPropsT = {
    /** Number of equal-width columns to allow for */
    flexGridColumnCount?: ResponsiveT<number>;
    /** Grid gap between columns */
    flexGridColumnGap?: ResponsiveT<ScaleT>;
    /** Grid gap between rows */
    flexGridRowGap?: ResponsiveT<ScaleT>;
} & BlockPropsT;
export declare type FlexGridItemPropsT = {
    /** Index of item in FlexGrid, used to determine gaps **/
    flexGridItemIndex?: number;
    /** Total count of items in FlexGrid, used to determine gaps **/
    flexGridItemCount?: number;
} & FlexGridPropsT;
