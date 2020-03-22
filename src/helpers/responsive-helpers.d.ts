import type { BreakpointsT } from '../styles/types';
/**
 * Helper function that generates media queries based on breakpoint, e.g.
 * getMediaQuery(720) => '@media screen and (min-width: 720px)'
 */
export declare const getMediaQuery: (breakpoint: number) => string;
export declare const getMediaQueries: (breakpoints: BreakpointsT) => string[];
