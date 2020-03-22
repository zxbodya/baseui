import * as React from 'react';
import type { ResponsiveT } from '../block/index';
import type { ThemeT } from '../styles/index';
export declare const flexGridItemMediaQueryStyle: ({ $theme, flexGridColumnCount: colCount, flexGridColumnGap, flexGridRowGap, flexGridItemIndex: itemIndex, flexGridItemCount: itemCount, }: {
    $theme: ThemeT;
    flexGridColumnCount: number;
    flexGridColumnGap: string | 0;
    flexGridRowGap: string | 0;
    flexGridItemIndex: number;
    flexGridItemCount: number;
}) => Readonly<{
    [x: string]: any;
    width: string;
    marginBottom: any;
}>;
export declare const getResponsiveValue: <T extends any>(responsive: ResponsiveT<T>, i: number) => T;
export declare const flexGridItemStyle: ({ $flexGridColumnCount, $flexGridColumnGap, $flexGridRowGap, $flexGridItemIndex, $flexGridItemCount, $theme, }: {
    $flexGridColumnCount?: ResponsiveT<number>;
    $flexGridColumnGap?: ResponsiveT<string | 0>;
    $flexGridRowGap?: ResponsiveT<string | 0>;
    $flexGridItemIndex?: number;
    $flexGridItemCount?: number;
    $theme: ThemeT;
}) => import("../helpers/overrides").ConfigurationOverrideT;
declare const FlexGridItemComponent: React.ForwardRefExoticComponent<{
    flexGridItemIndex?: number;
    flexGridItemCount?: number;
} & {
    flexGridColumnCount?: ResponsiveT<number>;
    flexGridColumnGap?: ResponsiveT<string | 0>;
    flexGridRowGap?: ResponsiveT<string | 0>;
} & import("../block").BlockPropsT & React.RefAttributes<HTMLElement>>;
export default FlexGridItemComponent;
