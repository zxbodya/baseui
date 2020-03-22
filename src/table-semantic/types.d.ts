import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
export declare type OverridesT = {
    Root?: OverrideT<any>;
    Table?: OverrideT<any>;
    TableHead?: OverrideT<any>;
    TableHeadRow?: OverrideT<any>;
    TableHeadCell?: OverrideT<any>;
    TableBody?: OverrideT<any>;
    TableBodyRow?: OverrideT<any>;
    TableBodyCell?: OverrideT<any>;
};
export declare type TablePropsT = {
    overrides?: OverridesT;
    columns: Array<React.ReactNode>;
    data: Array<Array<React.ReactNode>>;
    horizontalScrollWidth?: string;
};
export declare type BuilderOverridesT = {
    TableHeadCellSortable?: OverrideT<any>;
    SortAscIcon?: OverrideT<any>;
    SortDescIcon?: OverrideT<any>;
    SortNoneIcon?: OverrideT<any>;
} & OverridesT;
export declare type TableBuilderPropsT<RowT> = {
    overrides?: BuilderOverridesT;
    children?: React.ReactNode;
    data: Array<RowT>;
    horizontalScrollWidth?: string;
    sortColumn?: string | null;
    sortOrder?: 'ASC' | 'DESC' | null;
    onSort?: (columnId: string) => void;
};
export declare type ColumnOverridesT = {
    TableHeadCell?: OverrideT<any>;
    TableHeadCellSortable?: OverrideT<any>;
    TableBodyCell?: OverrideT<any>;
    SortAscIcon?: OverrideT<any>;
    SortDescIcon?: OverrideT<any>;
    SortNoneIcon?: OverrideT<any>;
};
export declare type TableBuilderColumnPropsT<RowT> = {
    overrides?: ColumnOverridesT;
    children: (row: RowT, rowIndex?: number) => React.ReactNode;
    id?: string;
    header?: React.ReactNode;
    numeric?: boolean;
    sortable?: boolean;
};
