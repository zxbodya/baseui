import * as React from 'react';
import { COLUMNS, SORT_DIRECTIONS } from './constants';
import { SyntheticEvent } from 'react';
export declare type SortDirectionsT = typeof SORT_DIRECTIONS.ASC | typeof SORT_DIRECTIONS.DESC | null;
export declare type ColumnsT = typeof COLUMNS.ANCHOR | typeof COLUMNS.BOOLEAN | typeof COLUMNS.CATEGORICAL | typeof COLUMNS.CUSTOM | typeof COLUMNS.DATETIME | typeof COLUMNS.NUMERICAL | typeof COLUMNS.STRING;
export declare type ColumnT<ValueT = any, FilterParamsT = any> = {
    kind: ColumnsT;
    title: string;
    sortable: boolean;
    filterable: boolean;
    mapDataToValue: (data: any) => ValueT;
    renderCell: React.ComponentType<{
        value: ValueT;
        isMeasured?: boolean;
        isSelected?: boolean;
        onSelect?: () => void;
        textQuery?: string;
    }>;
    renderFilter: React.ComponentType<{
        close: () => void;
        data: ValueT[];
        filterParams?: FilterParamsT;
        setFilter: (a: FilterParamsT) => void;
    }>;
    buildFilter: (a: FilterParamsT) => (a: ValueT) => boolean;
    sortFn: (b: ValueT, a: ValueT) => number;
    maxWidth?: number;
    minWidth?: number;
};
export declare type RowT = {
    id: number | string;
    data: any;
};
export declare type BatchActionT = {
    label: string;
    onClick: (a: {
        clearSelection: () => unknown;
        event: SyntheticEvent<HTMLButtonElement>;
        selection: RowT[];
    }) => unknown;
    renderIcon?: React.ComponentType<{
        size: number;
    }>;
};
export declare type RowActionT = {
    label: string;
    onClick: (a: {
        event: SyntheticEvent<HTMLButtonElement>;
        row: RowT;
    }) => unknown;
    renderIcon: React.ComponentType<{
        size: number;
    }>;
};
export declare type StatefulDataTablePropsT = {
    batchActions?: BatchActionT[];
    columns: ColumnT[];
    emptyMessage?: string | React.ComponentType<{}>;
    filterable?: boolean;
    initialFilters?: Map<string, {
        description: string;
    }>;
    loading?: boolean;
    loadingMessage?: string | React.ComponentType<{}>;
    onFilterAdd?: (b: string, a: {
        description: string;
    }) => unknown;
    onFilterRemove?: (a: string) => unknown;
    onRowHighlightChange?: (rowIndex: number, row: RowT) => void;
    onSelectionChange?: (a: RowT[]) => unknown;
    resizableColumnWidths?: boolean;
    rows: RowT[];
    rowActions?: RowActionT[];
    rowHeight?: number;
    rowHighlightIndex?: number;
    searchable?: boolean;
};
export declare type DataTablePropsT = {
    emptyMessage?: string | React.ComponentType<{}>;
    filters?: Map<string, {
        description: string;
    }>;
    loading?: boolean;
    loadingMessage?: string | React.ComponentType<{}>;
    onRowHighlightChange?: (rowIndex: number, row: RowT) => void;
    onSelectMany?: (rows: RowT[]) => void;
    onSelectNone?: () => void;
    onSelectOne?: (row: RowT) => void;
    onSort?: (columnIndex: number) => void;
    resizableColumnWidths?: boolean;
    rowHighlightIndex?: number;
    selectedRowIds?: Set<string | number>;
    sortIndex?: number;
    sortDirection?: SortDirectionsT;
    textQuery?: string;
} & StatefulDataTablePropsT;
export declare type StatefulContainerPropsT = {
    children: (a: {
        filters: Map<string, {
            description: string;
        }>;
        onFilterAdd: (title: string, filterParams: {
            description: string;
        }) => void;
        onFilterRemove: (title: string) => void;
        onRowHighlightChange: (rowIndex: number, row: RowT) => void;
        onSelectMany: (rows: RowT[]) => void;
        onSelectNone: () => void;
        onSelectOne: (row: RowT) => void;
        onSort: (columnIndex: number) => void;
        onTextQueryChange: (query: string) => void;
        resizableColumnWidths: boolean;
        rowHighlightIndex?: number;
        selectedRowIds: Set<string | number>;
        sortIndex: number;
        sortDirection: SortDirectionsT;
        textQuery: string;
    }) => React.ReactNode;
} & StatefulDataTablePropsT;
