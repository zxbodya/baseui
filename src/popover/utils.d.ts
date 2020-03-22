import type { OffsetT, PopoverPlacementT } from './types';
/**
 * Returns the opposite of the specified position. Useful for tooltip
 * positioning logic.
 * Examples:
 * top -> bottom
 * left -> right
 */
export declare function getOppositePosition(position: string): string;
/**
 * Determines whether or not the specified position is a vertical one (top or bottom)
 */
export declare function isVerticalPosition(position: string): boolean;
/**
 * Simple utility function for capitalizing the first letter of a string
 */
export declare function capitalize(str: string): string;
/**
 * Opposite of function above, converts from Popper.js placement
 * to our placement prop
 */
export declare function fromPopperPlacement(placement: string): PopoverPlacementT | null;
/**
 * Splits something like 'topLeft' to ['top', 'left'] for easier usage
 */
export declare function splitPlacement(placement: PopoverPlacementT): string[];
/**
 * Returns margin styles to add spacing between the popover
 * and its anchor.
 *
 * We may eventually want to make margin a prop that can be overridden.
 */
export declare function getPopoverMarginStyles(showArrow: boolean, placement: PopoverPlacementT): {
    [x: string]: string;
};
/**
 * Returns CSS rules for the popover animation start keyframe
 */
export declare function getStartPosition(offset: OffsetT, placement: PopoverPlacementT, showArrow: boolean): string;
/**
 * Returns CSS rules for the popover animation end keyframe
 */
export declare function getEndPosition(offset: OffsetT): string;
/**
 * Returns top/left styles to position the popover arrow
 */
export declare function getArrowPositionStyles(offsets: OffsetT, placement: PopoverPlacementT): {
    [x: string]: string;
};
