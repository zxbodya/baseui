import * as React from 'react';
import type { TablePropsT } from './types';
export default class Table extends React.Component<TablePropsT> {
    static defaultProps: {
        columns: any[];
        data: any[][];
    };
    render(): JSX.Element;
}
