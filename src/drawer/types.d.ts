import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { SIZE, CLOSE_SOURCE, ANCHOR } from './constants';
export declare type SizeT = keyof typeof SIZE;
export declare type SizePropT = SizeT | string;
export declare type AnchorT = keyof typeof ANCHOR;
export declare type AnchorPropT = AnchorT | string;
export declare type CloseSourceT = keyof typeof CLOSE_SOURCE;
export declare type OverridesT = {
    Root?: OverrideT<SharedStylePropsArgT>;
    Backdrop?: OverrideT<SharedStylePropsArgT>;
    DrawerBody?: OverrideT<SharedStylePropsArgT>;
    DrawerContainer?: OverrideT<SharedStylePropsArgT>;
    Close?: OverrideT<SharedStylePropsArgT>;
};
export declare type ElementRefT = {
    current: React.RefObject<any> | null;
};
export declare type DrawerPropsT = {
    /** Sets whether the Drawer should be displayed by easing in and out */
    animate: boolean;
    isOpen: boolean;
    /** If true, focus will shift to the first interactive element within the drawer.
     * If false, the drawer container itself will receive focus.
     * Moving focus into a newly opened drawer is important for accessibility purposes, so please be careful!
     */
    autoFocus: boolean;
    /** Renders all drawer content for SEO purposes regardless of drawer isOpen state */
    renderAll?: boolean;
    /** Where to mount the modal */
    mountNode?: HTMLElement;
    /** Drawer content. The children-as-function API may be preferable
     * for performance reasons (wont render until opened) */
    children?: React.ReactNode | (() => React.ReactNode);
    /** Whether the modal should be closeable by the user
     *  (either via escape, backdrop click, etc). You can set this to
     * false if your modal has an action that the user must take before closing.*/
    closeable: boolean;
    onClose?: (a: {
        closeSource?: CloseSourceT;
    }) => unknown;
    overrides: OverridesT;
    /** Controls the size of the modal (primarily width).
     * Can be a SIZE constant or css width property value. */
    size: SizePropT;
    anchor: AnchorPropT;
    /** Whether the backdrop should be present */
    showBackdrop: boolean;
    /**Function to be called when backdrop is clicked */
    onBackdropClick?: (e: Event) => unknown;
    onEscapeKeyDown?: (e: Event) => unknown;
};
export declare type DrawerPropsWithoutChildrenT = Omit<DrawerPropsT, 'children'>;
export declare type DrawerStateT = {
    isVisible: boolean;
    mounted: boolean;
    isFocusVisible: boolean;
};
export declare type SharedStylePropsArgT = {
    children?: React.ReactNode;
    $animating: boolean;
    $isVisible: boolean;
    $isOpen: boolean;
    $size: SizePropT;
    $closeable: boolean;
    $anchor: AnchorPropT;
    $isFocusVisible: boolean;
};
