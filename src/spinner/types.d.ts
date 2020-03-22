import { SIZE } from './constants';
import type { OverrideT } from '../helpers/overrides';
export declare type SizeT = keyof typeof SIZE;
export declare type SpinnerPropsT = {
    /** Sets aria-label attribute. */
    'aria-label'?: string;
    /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
    size?: number | string;
    /** Color of icon, will be used as svg fill */
    color?: string;
    /** Allows you to set the SVG `<title>` label, which is used for accessibility */
    title?: string;
    overrides?: {
        Svg?: OverrideT<any>;
        ActivePath?: OverrideT<any>;
        TrackPath?: OverrideT<any>;
    };
};
