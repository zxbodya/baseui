import * as React from 'react';
import type { PropsT, StateT } from './types';
export default class Avatar extends React.Component<PropsT, StateT> {
    static defaultProps: Partial<PropsT>;
    constructor(props: PropsT);
    componentDidUpdate(prevProps: PropsT, prevState: StateT): void;
    handleError: () => void;
    render(): JSX.Element;
}
