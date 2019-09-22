import * as React from 'react';
import type { AnchorPropsT, PopoverPropsT, PopoverPrivateStateT, SharedStylePropsArgT } from './types';
import type { PopperDataObjectT, NormalizedOffsetsT } from '../layer/types';
declare class Popover extends React.Component<PopoverPropsT, PopoverPrivateStateT> {
    static defaultProps: Partial<PopoverPropsT>;
    animateInTimer?: any;
    animateOutTimer?: any;
    animateOutCompleteTimer?: any;
    onMouseEnterTimer?: any;
    onMouseLeaveTimer?: any;
    generatedId: string;
    anchorRef: {
        current: any;
    };
    popperRef: {
        current: any;
    };
    arrowRef: {
        current: any;
    };
    /**
     * Yes our "Stateless" popover still has state. This is private state that
     * customers shouldn't have to manage themselves, such as positioning and
     * other internal flags for managing animation states.
     */
    state: {
        isAnimating: boolean;
        arrowOffset: {
            left: number;
            top: number;
        };
        popoverOffset: {
            left: number;
            top: number;
        };
        placement: "auto" | "bottom" | "left" | "right" | "top" | "topLeft" | "topRight" | "rightTop" | "rightBottom" | "bottomRight" | "bottomLeft" | "leftBottom" | "leftTop";
        isMounted: boolean;
        isLayerMounted: boolean;
        autoFocusAfterPositioning: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: PopoverPropsT, prevState: PopoverPrivateStateT): void;
    init(prevProps: PopoverPropsT, prevState: PopoverPrivateStateT): void;
    componentWillUnmount(): void;
    getDefaultState(props: PopoverPropsT): {
        isAnimating: boolean;
        arrowOffset: {
            left: number;
            top: number;
        };
        popoverOffset: {
            left: number;
            top: number;
        };
        placement: "auto" | "bottom" | "left" | "right" | "top" | "topLeft" | "topRight" | "rightTop" | "rightBottom" | "bottomRight" | "bottomLeft" | "leftBottom" | "leftTop";
        isMounted: boolean;
        isLayerMounted: boolean;
        autoFocusAfterPositioning: boolean;
    };
    animateIn: () => void;
    animateOut: () => void;
    clearTimers(): void;
    onAnchorClick: (e: Event) => void;
    onAnchorMouseEnter: () => void;
    onAnchorMouseLeave: () => void;
    onPopoverMouseEnter: () => void;
    onPopoverMouseLeave: () => void;
    onPopperUpdate: (normalizedOffsets: NormalizedOffsetsT, data: PopperDataObjectT) => PopperDataObjectT;
    triggerOnMouseLeaveWithDelay(): void;
    triggerOnMouseLeave: () => void;
    triggerOnMouseEnterWithDelay(): void;
    triggerOnMouseEnter: () => void;
    onDocumentClick: (evt: MouseEvent) => void;
    isClickTrigger(): boolean;
    isHoverTrigger(): boolean;
    isAccessibilityTypeMenu(): boolean;
    isAccessibilityTypeTooltip(): boolean;
    getAnchorIdAttr(): string;
    getPopoverIdAttr(): string;
    getAnchorProps(): AnchorPropsT;
    getPopoverBodyProps(): React.HTMLAttributes<"body">;
    getSharedProps(): Omit<SharedStylePropsArgT, 'children'>;
    getAnchorFromChildren(): React.ReactNode;
    renderAnchor(): any;
    renderPopover(renderedContent: React.ReactNode): JSX.Element;
    renderContent(): any;
    render(): any[];
}
export default Popover;
