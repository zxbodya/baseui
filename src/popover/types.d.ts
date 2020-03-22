import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import type { TetherPlacementT } from '../layer/types';
import { ACCESSIBILITY_TYPE, STATE_CHANGE_TYPE, TRIGGER_TYPE } from './constants';
export type { PopperDataObjectT, PopperOffsetT, PopperOptionsT, } from '../layer/types';
export declare type PopoverPlacementT = TetherPlacementT;
export declare type TriggerTypeT = keyof typeof TRIGGER_TYPE;
export declare type AccessibilityTypeT = keyof typeof ACCESSIBILITY_TYPE;
export declare type StateT = {
    isOpen: boolean;
};
export declare type StateChangeTypeT = keyof typeof STATE_CHANGE_TYPE;
export declare type StateReducerT = (stateChangeType: StateChangeTypeT, nextState: StateT, currentState: StateT) => StateT;
export declare type ContentRenderPropT = () => React.ReactNode;
export declare type StatefulContentRenderPropT = (a: {
    close: () => void;
}) => React.ReactNode;
export declare type OverridesT = {
    Body?: OverrideT<SharedStylePropsArgT>;
    Arrow?: OverrideT<SharedStylePropsArgT>;
    Inner?: OverrideT<SharedStylePropsArgT>;
};
export declare type ChildT = React.ReactNode;
export declare type ChildrenT = Array<ChildT> | ChildT;
export declare type BasePopoverPropsT = {
    /** Controls how this popover behaves for screen readers and other assistive devices.
     * See the A11Y section at the bottom of this document for more details.
     */
    accessibilityType?: AccessibilityTypeT;
    /** If true, focus will be locked to elements within the popover.
     */
    focusLock?: boolean;
    /** If true, focus will shift to the first interactive element within the popover.
     * If false, the popover container itself will receive focus.
     * Moving focus into a newly opened popover is important for accessibility purposes, so please be careful!
     */
    autoFocus?: boolean;
    /** If true, focus will shift back to the original element that triggered the popover
     * Becareful with elements that open the popover on focus (e.g. input) this will cause the popover to reopen on close!
     */
    returnFocus?: boolean;
    'data-baseweb'?: string;
    id?: string;
    /** If true, popover element will not avoid element boundaries. */
    ignoreBoundary?: boolean;
    /** Number of milliseconds to wait before showing the popover after mouse enters the trigger element (for triggerType `hover`). */
    onMouseEnterDelay?: number;
    /** Number of milliseconds to wait before showing the popover after mouse leaves the trigger element (for triggerType `hover`). */
    onMouseLeaveDelay?: number;
    /** Handler for click events on trigger element. */
    onClick?: (e: Event) => unknown;
    overrides?: OverridesT;
    /** How to position the popover relative to the target. */
    placement: TetherPlacementT;
    /** Whether or not to show the arrow pointing from the popover to the trigger. */
    showArrow?: boolean;
    /** Whether to toggle the popover when trigger is clicked or hovered. */
    triggerType: TriggerTypeT;
    /** Where to mount the popover */
    mountNode?: HTMLElement;
    /** How long should be fade out animation in ms, default 0ms */
    animateOutTime?: number;
    /** Popper options override
     * https://github.com/popperjs/popper.js/blob/v1.x/docs/_includes/popper-documentation.md
     */
    popperOptions?: any;
    /** Renders all popover content for SEO purposes regardless of popover isOpen state */
    renderAll?: boolean;
};
export declare type PopoverPropsT = BasePopoverPropsT & {
    /** Content that should trigger the popover to be shown (also acts as the anchor against
     * which the popover will be positioned).
     */
    children: React.ReactNode;
    /** Content to render within the popover when it's shown. */
    content: React.ReactNode | ContentRenderPropT;
    /** Whether or not to show the popover. */
    isOpen: boolean;
    /** Handler for blur events on trigger element. */
    onBlur?: () => unknown;
    /** Handler for clicks outside the anchor/popover elements. */
    onClickOutside?: (event: MouseEvent) => unknown;
    /** Handler for click events on trigger element. */
    onEsc?: () => unknown;
    /** Handler for 'Esc' keypress events */
    onFocus?: () => unknown;
    /** Handler for mouseenter events on trigger element. */
    onMouseEnter?: () => unknown;
    /** Handler for mouseleave events on trigger element. */
    onMouseLeave?: () => unknown;
};
export declare type StatefulPopoverPropsT = BasePopoverPropsT & {
    /** Content that should trigger the popover to be shown (also acts as the anchor against
     * which the popover will be positioned).
     */
    children: React.ReactNode;
    /** Content to render within the popover when it's shown. */
    content: React.ReactNode | StatefulContentRenderPropT;
    /** Whether to hide the popover when the user clicks anywhere outside the trigger/popover. */
    dismissOnClickOutside: boolean;
    /** Whether to hide the popover when the user presses the escape key. */
    dismissOnEsc: boolean;
    /** Initial state populated into the component */
    initialState?: StateT;
    /** Event handler when popover is hidden. */
    onClose?: () => unknown;
    /** Event handler when popover is shown. */
    onOpen?: () => unknown;
    /** Reducer function to manipulate internal state updates. */
    stateReducer?: StateReducerT;
};
export declare type StatefulPopoverContainerPropsT = Omit<StatefulPopoverPropsT, 'children'> & {
    children: (props: Omit<PopoverPropsT, 'children'>) => React.ReactNode;
};
export declare type PopoverPropsWithoutChildrenT = Omit<PopoverPropsT, 'children'>;
export declare type OffsetT = {
    top: number;
    left: number;
};
export declare type PopoverPrivateStateT = {
    isAnimating: boolean;
    arrowOffset: OffsetT;
    popoverOffset: OffsetT;
    placement: TetherPlacementT;
    isLayerMounted: boolean;
    isMounted: boolean;
    autoFocusAfterPositioning: boolean;
};
export declare type ArrowStylePropsArgT = {
    $arrowOffset: OffsetT;
    $placement: TetherPlacementT;
};
export declare type BodyStylePropsArgT = {
    $isAnimating: boolean;
    $isOpen: boolean;
    $popoverOffset: OffsetT;
    $placement: TetherPlacementT;
    $showArrow: boolean;
};
export declare type InnerStylePropsArgT = {};
export declare type SharedStylePropsArgT = {} & ArrowStylePropsArgT & BodyStylePropsArgT;
export declare type AnchorPropsT = {
    'aria-controls'?: string | null;
    'aria-describedby'?: string | null;
    'aria-expanded'?: string;
    'aria-haspopup'?: string;
    'aria-owns'?: string | null;
    id?: string | null;
    onBlur?: () => unknown;
    onClick?: (e: Event) => unknown;
    onFocus?: () => unknown;
    onMouseEnter?: (e: Event) => unknown;
    onMouseLeave?: (e: Event) => unknown;
    ref?: React.Ref<any>;
    tabIndex?: number;
};
