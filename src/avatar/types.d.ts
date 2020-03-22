import type { OverrideT } from '../helpers/overrides';
export declare type InitialsStylePropsT = {};
export declare type AvatarStylePropsT = {
    $size?: string;
};
export declare type RootStylePropsT = {
    $didImageFailToLoad: boolean;
    $size?: string;
};
export declare type StylePropsT = RootStylePropsT;
export declare type OverridesT<T> = {
    Avatar?: OverrideT<T>;
    Initials?: OverrideT<T>;
    Root?: OverrideT<T>;
};
export declare type StateT = {
    noImageAvailable: boolean;
};
export declare type PropsT = {
    /** Bypasses initial generation from provided name with this value. */
    initials?: string;
    /** Defines an alternative text description of the image. */
    name: string;
    overrides?: OverridesT<StylePropsT>;
    /** Defines the width/height of the image. Accepts labels from theme.sizing, or passes value to height/width. */
    size?: string;
    /** Image to display. */
    src?: string;
};
