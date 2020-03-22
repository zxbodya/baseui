import * as React from 'react';
import type { StarRatingPropsT, RatingStateT } from './types';
declare class StarRating extends React.Component<StarRatingPropsT, RatingStateT> {
    static defaultProps: {
        overrides: {};
        numItems: number;
    };
    state: RatingStateT;
    selectItem: (value: number) => void;
    updatePreview: (previewIndex?: number) => void;
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    renderRatingContents: () => any[];
    render(): JSX.Element;
}
export default StarRating;
