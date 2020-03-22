/// <reference types="react" />
import type { ColumnT } from './types';
declare type OptionsT = {
    filterable?: boolean;
    mapDataToValue: (data: any) => string;
    maxWidth?: number;
    minWidth?: number;
    sortable?: boolean;
    title: string;
};
declare type FilterParametersT = {
    description: string;
    exclude: boolean;
    selection: Set<string>;
};
declare type CategoricalColumnT = ColumnT<string, FilterParametersT>;
declare type CategoricalFilterProps = {
    data: string[];
    close: () => void;
    setFilter: (a: FilterParametersT) => void;
    filterParams?: FilterParametersT;
};
export declare function CategoricalFilter(props: CategoricalFilterProps): JSX.Element;
declare function CategoricalColumn(options: OptionsT): CategoricalColumnT;
export default CategoricalColumn;
