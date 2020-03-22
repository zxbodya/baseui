import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { ARTWORK_SIZES } from './constants';
export declare type ArtworkSizesT = typeof ARTWORK_SIZES.SMALL | typeof ARTWORK_SIZES.MEDIUM | typeof ARTWORK_SIZES.LARGE;
export declare type StyledArtworkContainerPropsT = {
    $artworkSize: ArtworkSizesT;
};
export declare type StyledContentPropsT = {
    $mLeft: boolean;
    $sublist: boolean;
};
export declare type OverridesT = {
    Root?: OverrideT<{}>;
    ArtworkContainer?: OverrideT<StyledArtworkContainerPropsT>;
    Content?: OverrideT<StyledContentPropsT>;
    EndEnhancerContainer?: OverrideT<{}>;
};
export declare type PropsT = {
    artwork?: React.ComponentType<{
        size: number;
    }>;
    artworkSize?: ArtworkSizesT;
    children: React.ReactNode;
    endEnhancer?: React.ComponentType<{}>;
    overrides?: OverridesT;
    sublist?: boolean;
};
export declare type LabelPropsT = {
    children: React.ReactNode;
    description?: React.ReactNode;
    sublist?: boolean;
};
export declare type MenuAdapterPropsT = {
    item: any;
    onMouseEnter: (a: MouseEvent) => unknown;
    onClick: (a: MouseEvent) => unknown;
    $size: string;
    $isHighlighted: boolean;
    $disabled: boolean;
} & PropsT;
