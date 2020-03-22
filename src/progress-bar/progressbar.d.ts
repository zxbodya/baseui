import * as React from 'react';
import type { ProgressBarPropsT } from './types';
declare class ProgressBar extends React.Component<ProgressBarPropsT> {
    static defaultProps: {
        getProgressLabel: (value: number, successValue: number) => string;
        successValue: number;
        value: number;
        overrides: {};
        showLabel: boolean;
        infinite: boolean;
    };
    render(): JSX.Element;
}
export default ProgressBar;
