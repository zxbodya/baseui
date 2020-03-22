/// <reference types="react" />
import type { PropsT, OptionsT, ValueT } from '../types';
export declare function normalizeOptions(options: OptionsT): ValueT;
export declare const expandValue: (value: Readonly<{
    [x: string]: any;
    id?: import("react").ReactText;
    label?: string;
    disabled?: boolean;
    clearableValue?: boolean;
    isCreatable?: boolean;
    __optgroup?: string;
}>, props: Partial<PropsT>) => Readonly<{
    [x: string]: any;
    id?: import("react").ReactText;
    label?: string;
    disabled?: boolean;
    clearableValue?: boolean;
    isCreatable?: boolean;
    __optgroup?: string;
}>;
