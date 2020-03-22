import type { TetherPlacementT, PopperOffsetT, NormalizedOffsetT } from './types';
export declare function toPopperPlacement(placement: TetherPlacementT): string;
/**
 * Takes the offset passed from popper.js and normalizes it
 */
export declare function parsePopperOffset(offset: PopperOffsetT): NormalizedOffsetT;
