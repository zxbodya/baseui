import * as React from 'react';
import type { EmoticonRatingPropsT, RatingStateT } from './types';
declare class EmoticonRating extends React.Component<EmoticonRatingPropsT, RatingStateT> {
    static defaultProps: {
        overrides: {};
    };
    state: RatingStateT;
    selectItem: (value: number) => void;
    updatePreview: (previewIndex?: number) => void;
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    renderRatingContents: () => any[];
    render(): JSX.Element;
}
export default EmoticonRating;
