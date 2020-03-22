/// <reference types="react" />
import type { ColumnT, RowT } from './types';
declare type MeasureColumnWidthsPropsT = {
    columns: ColumnT[];
    isSelectable: boolean;
    onWidthsChange: (a: number[]) => void;
    rows: RowT[];
    widths: number[];
};
export default function MeasureColumnWidths(props: MeasureColumnWidthsPropsT): JSX.Element;
export {};
