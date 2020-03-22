import * as React from 'react';
import type { ColumnT } from './types';
declare type ValueT = {
    content: string;
    href: string;
};
declare type OptionsT = {
    elementAs?: React.ElementType;
    mapDataToValue: (data: any) => ValueT;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    title: string;
};
declare type FilterParametersT = {};
declare type AnchorColumnT = ColumnT<ValueT, FilterParametersT>;
declare function AnchorColumn(options: OptionsT): AnchorColumnT;
export default AnchorColumn;
