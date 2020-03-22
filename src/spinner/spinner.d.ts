import * as React from 'react';
import type { SpinnerPropsT } from './types';
declare class Spinner extends React.Component<SpinnerPropsT> {
    static defaultProps: Partial<SpinnerPropsT>;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Spinner;
