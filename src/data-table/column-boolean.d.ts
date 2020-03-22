import type { ColumnT } from './types';
declare type OptionsT = {
    filterable?: boolean;
    mapDataToValue: (data: any) => boolean;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    title: string;
};
declare type FilterParametersT = {
    selection: Set<boolean>;
    description: string;
    exclude: boolean;
};
declare type BooleanColumnT = ColumnT<boolean, FilterParametersT>;
declare function BooleanColumn(options: OptionsT): BooleanColumnT;
export default BooleanColumn;
