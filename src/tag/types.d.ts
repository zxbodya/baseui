import type { OverrideT } from '../helpers/overrides';
import { ReactNode } from 'react';
export declare const TagKind: Readonly<{
    readonly neutral: "neutral";
    readonly primary: "primary";
    readonly accent: "accent";
    readonly positive: "positive";
    readonly warning: "warning";
    readonly negative: "negative";
    readonly custom: "custom";
}>;
export declare const TagVariant: Readonly<Readonly<{
    readonly solid: "solid";
    readonly light: "light";
    readonly outlined: "outlined";
}>>;
export declare type TagKindT = keyof typeof TagKind;
export declare type TagVariantT = typeof TagVariant[keyof typeof TagVariant];
export declare type OverridesT = {
    Root?: OverrideT<any>;
    Action?: OverrideT<any>;
    ActionIcon?: OverrideT<any>;
    Text?: OverrideT<any>;
};
export declare type PropsT = {
    overrides?: OverridesT;
    /** Include or exclude the "x" button and click action. */
    closeable?: boolean;
    /** Disable control from being changed. */
    disabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    /** Defines tags look by purpose. Set it to one of KIND[key] values. Defaults to KIND.primary */
    kind?: TagKindT;
    /** Defines tags look. Set it to one of VARIANT[key] values. Defaults to VARIANT.light */
    variant?: TagVariantT;
    /** Component or String value for label of tag. Default is empty string. */
    children?: ReactNode;
    /** The color theme to be applied to a Tag. Default is `KIND.primary`. */
    color?: string;
    /** Text to display in native OS tooltip on long hover. */
    title?: string;
    /** onClick handler for the action button element. */
    onActionClick: (e: Event, children?: ReactNode) => unknown;
    /** keydown handler for the action button element. */
    onActionKeyDown: (e: Event, children?: ReactNode) => unknown;
    /** onClick handler for the tag. Passing an onClick handler also makes the tag clickable. */
    onClick?: null | ((event: Event) => unknown);
    /** onkeydown handler for the tag. */
    onKeyDown?: null | ((event: Event) => unknown);
};
export declare type SharedPropsArgT = {
    $clickable?: boolean;
    $closeable?: boolean;
    $color?: string;
    $disabled?: boolean;
    $isActive?: boolean;
    $isFocused?: boolean;
    $isHovered?: boolean;
    $kind?: string;
    $variant?: string;
    $isFocusVisible: boolean;
};
