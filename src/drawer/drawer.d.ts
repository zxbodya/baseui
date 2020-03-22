import * as React from 'react';
import type { DrawerPropsT, DrawerStateT, SharedStylePropsArgT, CloseSourceT, ElementRefT } from './types';
declare class Drawer extends React.Component<DrawerPropsT, DrawerStateT> {
    static defaultProps: Partial<DrawerPropsT>;
    animateOutTimer: TimeoutID | undefined | null;
    animateStartTimer: AnimationFrameID | undefined | null;
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
    componentDidUpdate(prevProps: DrawerPropsT, prevState: DrawerStateT): void;
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    disableMountNodeScroll(): void;
    resetMountNodeScroll(): void;
    getMountNode(): HTMLElement;
    onEscape: () => void;
    onBackdropClick: (event: Event) => void;
    onCloseClick: () => void;
    clearTimers(): void;
    didOpen(): void;
    didClose(): void;
    triggerClose(source?: CloseSourceT): void;
    animateOutComplete: () => void;
    getSharedProps(): Omit<SharedStylePropsArgT, 'children'>;
    getChildren(): any;
    getRef(component: string): ElementRefT;
    renderDrawer(renderedContent: React.ReactNode): JSX.Element;
    render(): JSX.Element;
}
export default Drawer;
