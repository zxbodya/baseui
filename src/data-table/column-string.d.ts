import type { ColumnT } from './types';
declare type OptionsT = {
    lineClamp?: number;
    mapDataToValue: (data: any) => string;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    title: string;
};
declare type FilterParametersT = {
    description: string;
    exclude: boolean;
};
declare type StringColumnT = ColumnT<string, FilterParametersT>;
declare function StringColumn(options: OptionsT): StringColumnT;
export default StringColumn;
