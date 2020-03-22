import * as React from 'react';
import type { ColumnT } from './types';
declare type OptionsT<ValueT, FilterParamsT> = {
    filterable?: boolean;
    mapDataToValue: (data: any) => ValueT;
    maxWidth?: number;
    minWidth?: number;
    renderCell: React.ComponentType<{
        value: ValueT;
        isMeasured?: boolean;
    }>;
    renderFilter?: React.ComponentType<{
        close: () => void;
        data: ValueT[];
        filterParams?: FilterParamsT;
        setFilter: (a: FilterParamsT) => void;
    }>;
    buildFilter?: (a: FilterParamsT) => (a: ValueT) => boolean;
    sortable?: boolean;
    sortFn?: (b: ValueT, a: ValueT) => number;
    title: string;
};
declare function CustomColumn<ValueT, FilterParamsT>(options: OptionsT<ValueT, FilterParamsT>): ColumnT<ValueT, FilterParamsT>;
export default CustomColumn;
