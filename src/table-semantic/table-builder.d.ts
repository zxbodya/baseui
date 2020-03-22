import * as React from 'react';
import type { TableBuilderPropsT } from './types';
export default class TableBuilder<T> extends React.Component<TableBuilderPropsT<T>, {
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        data: any[];
    };
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    render(): JSX.Element;
}
