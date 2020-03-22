/// <reference types="react" />
import type { CardsPropsT } from './types';
export declare function hasThumbnail(props: {
    readonly thumbnail?: string;
}): boolean;
declare function Card(props: CardsPropsT): JSX.Element;
declare namespace Card {
    var defaultProps: {
        action: any;
        children: any;
        hasThumbnail: typeof hasThumbnail;
        overrides: {};
    };
}
export default Card;
