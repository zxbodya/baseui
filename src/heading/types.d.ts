import * as React from 'react';
import type { BlockPropsT } from '../block/types';
export declare type HeadingPropsT = {
    /** Set and fix the style level independently on the hierarchy context. */
    styleLevel?: number;
} & BlockPropsT;
export declare type HeadingLevelPropsT = {
    /** Content to be rendered in the HeadingLevel. */
    children: React.ReactNode;
};
