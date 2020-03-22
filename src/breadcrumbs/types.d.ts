import type { ReactNode } from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type OverridesT = {
    Root?: OverrideT<any>;
    Separator?: OverrideT<any>;
    List?: OverrideT<any>;
    ListItem?: OverrideT<any>;
    Icon?: OverrideT<any>;
};
export declare type BreadcrumbsPropsT = {
    children?: ReactNode;
    overrides?: OverridesT;
    ariaLabel?: string;
};
