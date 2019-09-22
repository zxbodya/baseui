import * as React from 'react';
import type { ModalPropsT, ModalStateT, SharedStylePropsArgT, CloseSourceT, ElementRefT } from './types';
declare class Modal extends React.Component<ModalPropsT, ModalStateT> {
    static defaultProps: Partial<ModalPropsT>;
    animateOutTimer: any | undefined | null;
    animateStartTimer: any | undefined | null;
    lastFocus: HTMLElement | undefined | null;
    lastMountNodeOverflowStyle: string | undefined | null;
    _refs: {
        [x: string]: ElementRefT;
    };
    state: {
        isVisible: boolean;
        mounted: boolean;
        isFocusVisible: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ModalPropsT, prevState: ModalStateT): void;
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    disableMountNodeScroll(): void;
    resetMountNodeScroll(): void;
    onEscape: () => void;
    onDocumentClick: (e: MouseEvent) => void;
    onBackdropClick: () => void;
    onCloseClick: () => void;
    clearTimers(): void;
    didOpen(): void;
    didClose(): void;
    triggerClose(source?: CloseSourceT): void;
    animateOutComplete: () => void;
    getSharedProps(): Omit<SharedStylePropsArgT, 'children'>;
    getMountNode(): HTMLElement;
    getChildren(): any;
    getRef(component: string): ElementRefT;
    renderModal(): JSX.Element;
    render(): JSX.Element;
}
export default Modal;
