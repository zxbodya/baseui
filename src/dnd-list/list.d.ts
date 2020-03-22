import * as React from 'react';
import type { ListPropsT } from './types';
declare class StatelessList extends React.Component<ListPropsT, {
    isFocusVisible: boolean;
}> {
    static defaultProps: Partial<ListPropsT>;
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
export default StatelessList;
