/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {BaseInputPropsT, StateReducerT, StateT} from '../input/types';
import {ADJOINED, SIZE} from '../input/constants';

import {SyntheticEvent} from 'react';

type SyntheticTextareaEvent = SyntheticEvent<HTMLTextAreaElement>;

export type SizeT = keyof typeof SIZE;

export type SharedStylePropsT = {
  $adjoined: keyof typeof ADJOINED;
  $disabled: boolean;
  $error: boolean;
  $isFocused: boolean;
  $positive?: boolean;
  $required: boolean;
  $size: SizeT;
};

export type TextareaPropsT = {
  /** Sets the size and number of visible text lines
   of the texarea element. */
  rows?: number;
} & BaseInputPropsT<HTMLTextAreaElement>;

export type StatefulContainerPropsT = {
  children: (props: any) => React.ReactNode;
  initialState?: StateT;
  stateReducer?: StateReducerT;
  onChange?: (e: SyntheticTextareaEvent) => unknown;
  onKeyDown?: (e: SyntheticTextareaEvent) => unknown;
  onKeyPress?: (e: SyntheticTextareaEvent) => unknown;
  onKeyUp?: (e: SyntheticTextareaEvent) => unknown;
};

type OmitPropsT = {
  children: (props: any) => React.ReactNode;
};

type FullStPropsT = TextareaPropsT & StatefulContainerPropsT;

export type StatefulTextareaPropsT = Omit<FullStPropsT, keyof OmitPropsT>;
