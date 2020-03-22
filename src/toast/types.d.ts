import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { KIND, PLACEMENT, TYPE } from './constants';
export declare type KindTypeT = typeof KIND[keyof typeof KIND];
export declare type NotificationTypeT = typeof TYPE[keyof typeof TYPE];
export declare type PlacementTypeT = typeof PLACEMENT[keyof typeof PLACEMENT];
export declare type SharedStylePropsArgT = {
    $kind: KindTypeT;
    $type: NotificationTypeT;
    $closeable: boolean;
    $isRendered: boolean;
    $isVisible: boolean;
    $isFocusVisible: boolean;
};
export declare type ToasterSharedStylePropsArgT = {
    $placement: PlacementTypeT;
};
export declare type OverridesT = {
    Body?: OverrideT<SharedStylePropsArgT>;
    CloseIcon?: OverrideT<SharedStylePropsArgT>;
    InnerContainer?: OverrideT<SharedStylePropsArgT>;
};
export declare type ComponentRenderPropT = (props: {
    dismiss: () => void;
}) => React.ReactNode;
export declare type ChildT = React.ReactNode;
export declare type ChildrenT = Array<ChildT> | ChildT;
export declare type ToastPrivateStateT = {
    isVisible: boolean;
    isRendered: boolean;
    isFocusVisible: boolean;
};
export declare type ToastPropsT = {
    /** This is a private property to detect manual changes to a toast
     *  i.e. calling toaster.info() with the same key twice
     *  currently the change detection is used to reset the autohide timer
     */
    __updated?: number;
    /** If true, the toast close icon will receive focus on mount
        and restore focus to previously focused element on unmount.
        This should only be used when there is no autoHideDuration
        and the toast for some reason has an action within it.
        Focusing alerts is bad for screenreaders! */
    autoFocus: boolean;
    /** The number of milliseconds to wait before automatically dismissing a
     * notification. This behavior is disabled when the value is set to 0.*/
    autoHideDuration: number;
    /** Toast notification content. The children-as-function
     *  receives a dismiss method that can be called to
     * dismiss the notification and can be used as a
     * handler for an action inside the toast content. */
    children: ChildrenT | ComponentRenderPropT;
    /** When set to true a close button is displayed and the notification can be dismissed by a user. */
    closeable: boolean;
    /** Defines the type of notification. */
    kind: KindTypeT;
    notificationType: NotificationTypeT;
    /** A callback function called when a notification is dismissed. */
    onClose: () => unknown;
    onBlur: (e: React.FocusEvent) => unknown;
    onFocus: (e: React.FocusEvent) => unknown;
    onMouseEnter: (e: React.MouseEvent) => unknown;
    onMouseLeave: (e: React.MouseEvent) => unknown;
    'data-baseweb'?: string;
    overrides: OverridesT;
    key: React.Key;
};
export declare type ToastPropsShapeT = Partial<Omit<ToastPropsT, 'children'>>;
export declare type ToasterOverridesT = {
    Root?: OverrideT<ToasterSharedStylePropsArgT>;
    ToastBody?: OverrideT<SharedStylePropsArgT>;
    ToastCloseIcon?: OverrideT<SharedStylePropsArgT>;
    ToastInnerContainer?: OverrideT<SharedStylePropsArgT>;
};
export declare type ToasterPropsT = {
    children: React.ReactNode;
    overrides: ToasterOverridesT;
    placement: PlacementTypeT;
    usePortal: boolean;
    /** If true, the toast close icon will receive focus on mount
        and restore focus to previously focused element on unmount.
        This should only be used when there is no autoHideDuration
        and toasts for some reason have actions within them.
        Focusing alerts is bad for screenreaders! */
    autoFocus: boolean;
    /** The number of milliseconds to wait before automatically dismissing a
     * notification. This behavior is disabled when the value is set to 0.*/
    autoHideDuration: number;
    /** Defines if updating a toast resets the autohide timer */
    resetAutoHideTimerOnUpdate?: boolean;
};
export declare type ToasterContainerStateT = {
    isMounted: boolean;
    toasts: Array<ToastPropsT>;
};
