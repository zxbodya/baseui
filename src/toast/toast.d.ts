import * as React from 'react';
import type { ToastPropsT, ToastPropsShapeT, ToastPrivateStateT, SharedStylePropsArgT } from './types';
declare class Toast extends React.Component<ToastPropsT, ToastPrivateStateT> {
    static defaultProps: ToastPropsShapeT;
    autoHideTimeout: TimeoutID | undefined | null;
    animateInTimer: TimeoutID | undefined | null;
    animateOutCompleteTimer: TimeoutID | undefined | null;
    closeRef: {
        current: SVGElement | HTMLElement | undefined | null;
    } | undefined | null;
    previouslyFocusedElement: SVGElement | HTMLElement | undefined | null;
    state: {
        isVisible: boolean;
        isRendered: boolean;
        isFocusVisible: boolean;
    };
    constructor(props: ToastPropsT);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ToastPropsT): void;
    componentWillUnmount(): void;
    handleFocus: (event: React.FocusEvent<Element>) => void;
    handleBlur: (event: React.FocusEvent<Element>) => void;
    startTimeout(): void;
    clearTimeout(): void;
    animateIn: () => void;
    animateOut: (callback?: () => unknown) => void;
    dismiss: () => void;
    onFocus: (e: React.FocusEvent<Element>) => void;
    onMouseEnter: (e: React.MouseEvent<Element, MouseEvent>) => void;
    onBlur: (e: React.FocusEvent<Element>) => void;
    onMouseLeave: (e: React.MouseEvent<Element, MouseEvent>) => void;
    getSharedProps(): Partial<SharedStylePropsArgT>;
    render(): JSX.Element;
}
export default Toast;
