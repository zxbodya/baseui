import * as React from 'react';
import type { ToasterPropsT, ToasterContainerStateT, ToastPropsT } from './types';
export declare class ToasterContainer extends React.Component<Partial<ToasterPropsT>, ToasterContainerStateT> {
    static defaultProps: ToasterPropsT;
    constructor(props: ToasterPropsT);
    state: {
        isMounted: boolean;
        toasts: any[];
    };
    dismissHandlers: {};
    toastId: number;
    componentDidMount(): void;
    getToastProps: (props: ToastPropsT) => ToastPropsT & {
        key: React.ReactText;
    };
    show: (props?: ToastPropsT) => React.ReactText;
    update: (key: React.ReactText, props: ToastPropsT) => void;
    dismiss: (key: React.ReactText) => void;
    clearAll: () => void;
    clear: (key?: React.ReactText) => void;
    internalOnClose: (key: React.ReactText) => void;
    getOnCloseHandler: (key: React.ReactText, onClose?: () => unknown) => () => void;
    renderToast: (toastProps: ToastPropsT & {
        key: React.ReactText;
    }) => React.ReactNode;
    getSharedProps: () => {
        $placement: "bottom" | "top" | "topLeft" | "topRight" | "bottomRight" | "bottomLeft";
    };
    render(): JSX.Element;
}
declare const toaster: {
    getRef: () => ToasterContainer;
    show: (children: React.ReactNode, props?: Partial<Pick<ToastPropsT, "key" | "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "overrides" | "data-baseweb" | "autoFocus" | "kind" | "onClose" | "closeable" | "__updated" | "autoHideDuration" | "notificationType">>) => React.ReactText;
    info: (children: React.ReactNode, props?: Partial<Pick<ToastPropsT, "key" | "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "overrides" | "data-baseweb" | "autoFocus" | "kind" | "onClose" | "closeable" | "__updated" | "autoHideDuration" | "notificationType">>) => React.ReactText;
    positive: (children: React.ReactNode, props?: Partial<Pick<ToastPropsT, "key" | "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "overrides" | "data-baseweb" | "autoFocus" | "kind" | "onClose" | "closeable" | "__updated" | "autoHideDuration" | "notificationType">>) => React.ReactText;
    warning: (children: React.ReactNode, props?: Partial<Pick<ToastPropsT, "key" | "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "overrides" | "data-baseweb" | "autoFocus" | "kind" | "onClose" | "closeable" | "__updated" | "autoHideDuration" | "notificationType">>) => React.ReactText;
    negative: (children: React.ReactNode, props?: Partial<Pick<ToastPropsT, "key" | "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "overrides" | "data-baseweb" | "autoFocus" | "kind" | "onClose" | "closeable" | "__updated" | "autoHideDuration" | "notificationType">>) => React.ReactText;
    update: (key: React.ReactText, props: Partial<ToastPropsT>) => void;
    clear: (key?: React.ReactText) => void;
};
export default toaster;
