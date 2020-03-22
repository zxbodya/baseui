import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type OverridesT = {
    Svg?: OverrideT<StyledComponentArgsT>;
};
export declare type SizeT = number | string;
export declare type ColorT = string;
export declare type StyledComponentArgsT = {
    $size?: SizeT;
    $color?: ColorT;
};
export declare type IconPropsT = React.SVGAttributes<SVGElement> & {
    children?: React.ReactNode;
    /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
    size?: SizeT;
    /** Color of icon, will be used as svg fill */
    color?: ColorT;
    /** Allows you to set the SVG `<title>` label, which is used for accessibility */
    title?: string;
    overrides?: OverridesT;
};
