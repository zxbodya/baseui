import * as React from 'react';
import { ALIGNMENT, BEHAVIOR } from './constants';
import Cell from './cell';
import type { OverrideT } from '../helpers/overrides';
export declare type ResponsiveT<T> = T | Array<T>;
export declare type AlignmentT = typeof ALIGNMENT.start | typeof ALIGNMENT.center | typeof ALIGNMENT.end;
export declare type BehaviorT = typeof BEHAVIOR.fixed | typeof BEHAVIOR.fluid;
export declare type CSSLengthUnitT = 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'px' | 'pt' | 'em' | 'ex' | 'ch' | 'rem' | 'lh' | 'vw' | 'vh' | 'vmin' | 'vmax' | '%';
export declare type GridPropsT = {
    /** Control vertical alignment of cells at each breakpoint. */
    align?: ResponsiveT<AlignmentT>;
    /** Grid container behavior beyond max width. Fluid will continue to expand. Fixed will limit grid container to max width and center the container horizontally within parent element. */
    behavior?: BehaviorT;
    /** Children should be Cells. */
    children: React.ReactElement<React.ComponentProps<typeof Cell | null>> | React.ReactElement<React.ComponentProps<typeof Cell | null>>[];
    /** Number of columns at each breakpoint. */
    gridColumns?: ResponsiveT<number>;
    /** Gap between rows at each breakpoint. */
    gridGaps?: ResponsiveT<number>;
    /** Gap between columns at each breakpoint. */
    gridGutters?: ResponsiveT<number>;
    /** Gap on either side of grid container at each breakpoint. */
    gridMargins?: ResponsiveT<number>;
    /** Maximum width of the grid container. Does not include Margins. Only applies when `behavior` is `fluid`. */
    gridMaxWidth?: number;
    /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
    gridUnit?: CSSLengthUnitT;
    /** Overrides for your grid. */
    overrides?: {
        Grid?: OverrideT<any>;
    };
};
export declare type StyledGridPropsT = {
    /** Control vertical alignment of cells at each breakpoint. */
    $align?: ResponsiveT<AlignmentT>;
    /** Grid container behavior beyond max width. Fluid will continue to expand. Fixed will limit grid container to max width and center the container horizontally within parent element. */
    $behavior?: BehaviorT;
    /** Gap between columns at each breakpoint. */
    $gridGutters?: ResponsiveT<number>;
    /** Gap on either side of grid container at each breakpoint. */
    $gridMargins?: ResponsiveT<number>;
    /** Maximum width of the grid container. Does not include Margins. Only applies when `behavior` is `fluid`. */
    $gridMaxWidth?: number;
    /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
    $gridUnit?: CSSLengthUnitT;
};
export declare type CellPropsT = {
    /** Control vertical alignment of individual cell at each breakpoint. Limited proxy for `align-self` CSS property. */
    align?: ResponsiveT<AlignmentT>;
    /** Content to be placed in Cell. */
    children?: React.ReactNode;
    /** Number of columns at each breakpoint. */
    gridColumns?: ResponsiveT<number>;
    /** Gap between rows at each breakpoint. */
    gridGaps?: ResponsiveT<number>;
    /** Gap between columns at each breakpoint. */
    gridGutters?: ResponsiveT<number>;
    /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
    gridUnit?: CSSLengthUnitT;
    /** Control placement order of cell in flex row at each breakpoint. Proxy for `order` CSS property. */
    order?: ResponsiveT<number>;
    /** Control number of columns to offset cell at each breakpoint. */
    skip?: ResponsiveT<number>;
    /** Control number of columns the cell should span. */
    span?: ResponsiveT<number>;
    /** Overrides for a single cell. */
    overrides?: {
        Cell?: OverrideT<any>;
    };
};
export declare type StyledCellPropsT = {
    /** Control vertical alignment of individual cell at each breakpoint. Limited proxy for `align-self` CSS property. */
    $align?: ResponsiveT<AlignmentT>;
    /** Number of columns at each breakpoint. */
    $gridColumns?: ResponsiveT<number>;
    /** Gap between rows at each breakpoint. */
    $gridGaps?: ResponsiveT<number>;
    /** Gap between columns at each breakpoint. */
    $gridGutters?: ResponsiveT<number>;
    /** Modify the CSS length unit used to measure columns and rows. Defaults to theme value. */
    $gridUnit?: CSSLengthUnitT;
    /** Control placement order of cell in flex row at each breakpoint. Proxy for `order` CSS property. */
    $order?: ResponsiveT<number>;
    /** Control number of columns to offset cell at each breakpoint. */
    $skip?: ResponsiveT<number>;
    /** Control number of columns the cell should span. */
    $span?: ResponsiveT<number>;
};
