import { NUMERICAL_FORMATS, NUMERICAL_OPERATIONS } from './constants';
import type { ColumnT } from './types';
declare type NumericalFormats = typeof NUMERICAL_FORMATS.DEFAULT | typeof NUMERICAL_FORMATS.ACCOUNTING | typeof NUMERICAL_FORMATS.PERCENTAGE;
declare type NumericalOperations = typeof NUMERICAL_OPERATIONS.EQ | typeof NUMERICAL_OPERATIONS.GT | typeof NUMERICAL_OPERATIONS.GTE | typeof NUMERICAL_OPERATIONS.LT | typeof NUMERICAL_OPERATIONS.LTE;
declare type OptionsT = {
    filterable?: boolean;
    format?: NumericalFormats | ((value: number) => string);
    highlight?: (a: number) => boolean;
    mapDataToValue: (data: any) => number;
    maxWidth?: number;
    minWidth?: number;
    precision?: number;
    sortable?: boolean;
    title: string;
};
declare type FilterParametersT = {
    comparisons: Array<{
        value: number;
        operation: NumericalOperations;
    }>;
    description: string;
    exclude: boolean;
};
declare type NumericalColumnT = ColumnT<number, FilterParametersT>;
declare function NumericalColumn(options: OptionsT): NumericalColumnT;
export default NumericalColumn;
