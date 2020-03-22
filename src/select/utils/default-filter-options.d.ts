/// <reference types="react" />
import type { OptionT, ValueT } from '../types';
declare type defaultPropsT = {
    filterOption: ((option: OptionT, filterValue: string) => boolean) | undefined | null;
    ignoreCase: boolean;
    labelKey: string;
    matchPos: 'any' | 'start';
    matchProp: 'any' | 'label' | 'value';
    trimFilter: boolean;
    valueKey: string;
};
declare const filterOptions: (options: ValueT, filterValue: string, excludeOptions?: ValueT, newProps?: Partial<defaultPropsT>) => Readonly<{
    [x: string]: any;
    id?: import("react").ReactText;
    label?: string;
    disabled?: boolean;
    clearableValue?: boolean;
    isCreatable?: boolean;
    __optgroup?: string;
}>[];
export default filterOptions;
