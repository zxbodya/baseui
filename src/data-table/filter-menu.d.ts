/// <reference types="react" />
import type { ColumnT } from './types';
declare type PropsT = {
    columns: ColumnT[];
    filters: Map<string, any>;
    rows: any[];
    onSetFilter: (columnTitle: string, filterParams: {
        description: string;
    }) => void;
};
declare function FilterMenu(props: PropsT): JSX.Element;
export default FilterMenu;
