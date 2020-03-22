import * as React from 'react';
import type { BaseInputPropsT, StateReducerT, StateT } from '../input/types';
import { ADJOINED, SIZE } from '../input/constants';
import { SyntheticEvent } from 'react';
declare type SyntheticTextareaEvent = SyntheticEvent<HTMLTextAreaElement>;
export declare type SizeT = keyof typeof SIZE;
export declare type SharedStylePropsT = {
    $adjoined: keyof typeof ADJOINED;
    $disabled: boolean;
    $error: boolean;
    $isFocused: boolean;
    $positive?: boolean;
    $required: boolean;
    $size: SizeT;
};
export declare type TextareaPropsT = {
    /** Sets the size and number of visible text lines
     of the texarea element. */
    rows?: number;
} & BaseInputPropsT<HTMLTextAreaElement>;
export declare type StatefulContainerPropsT = {
    children: (props: any) => React.ReactNode;
    initialState?: StateT;
    stateReducer?: StateReducerT;
    onChange?: (e: SyntheticTextareaEvent) => unknown;
    onKeyDown?: (e: SyntheticTextareaEvent) => unknown;
    onKeyPress?: (e: SyntheticTextareaEvent) => unknown;
    onKeyUp?: (e: SyntheticTextareaEvent) => unknown;
};
declare type OmitPropsT = {
    children: (props: any) => React.ReactNode;
};
declare type FullStPropsT = TextareaPropsT & StatefulContainerPropsT;
export declare type StatefulTextareaPropsT = Partial<Omit<FullStPropsT, keyof OmitPropsT>>;
export {};
