import { DATETIME_OPERATIONS } from './constants';
import type { ColumnT } from './types';
declare type OptionsT = {
    filterable?: boolean;
    formatString?: string;
    mapDataToValue: (data: any) => Date;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    title: string;
};
declare type DatetimeOperationsT = typeof DATETIME_OPERATIONS.RANGE_DATETIME | typeof DATETIME_OPERATIONS.RANGE_DATE | typeof DATETIME_OPERATIONS.RANGE_TIME | typeof DATETIME_OPERATIONS.WEEKDAY | typeof DATETIME_OPERATIONS.MONTH | typeof DATETIME_OPERATIONS.QUARTER | typeof DATETIME_OPERATIONS.HALF | typeof DATETIME_OPERATIONS.YEAR;
declare type FilterParametersT = {
    operation: DatetimeOperationsT;
    range: Date[];
    selection: number[];
    description: string;
    exclude: boolean;
};
declare type DatetimeColumnT = ColumnT<Date, FilterParametersT>;
declare function DatetimeColumn(options: OptionsT): DatetimeColumnT;
export default DatetimeColumn;
