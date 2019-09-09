/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides.js';
import {STATE_CHANGE_TYPE} from './constants.js';

import {ReactNode} from 'react';

export type ChangeActionT = keyof typeof STATE_CHANGE_TYPE;
export type ParamsT = {
  value: Array<number>;
};
export type OverridesT = {
  Root?: OverrideT<any>;
  Track?: OverrideT<any>;
  InnerTrack?: OverrideT<any>;
  Tick?: OverrideT<any>;
  TickBar?: OverrideT<any>;
  Thumb?: OverrideT<any>;
  InnerThumb?: OverrideT<any>;
  ThumbValue?: OverrideT<any>;
};

export type PropsT = {
  /** Position of the thumbs. It can be a single point (one thumb) or 2 points array (range thumbs). */
  value: Array<number>;
  /** The minimum allowed value of the slider. Should not be bigger than max. */
  min: number;
  /** The maximum allowed value of the slider. Should not be smaller than min. */
  max: number;
  /** The granularity the slider can step through value. Default step is 1. */
  step: number;
  overrides?: OverridesT;
  /** Disable control from being changed. */
  disabled: boolean;
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange: (a: {} & ParamsT) => unknown;
};

export type StateT = {
  value: Array<number>;
};

export type StateReducerT = (
  stateType: string,
  nextState: StateT,
  currentState: StateT,
) => StateT;

export type StatefulContainerPropsT = {
  overrides?: OverridesT;
  children: (a: any) => ReactNode;
  min: number;
  max: number;
  step: number;
  /** Initial state populated into the component */
  initialState: StateT;
  /** Reducer function to manipulate internal state updates. */
  stateReducer: StateReducerT;
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange: (a: {} & ParamsT) => unknown;
};

export type StatefulSliderPropsT = {
  overrides?: OverridesT;
  /** Initial state populated into the component */
  initialState?: StateT;
  min?: number;
  max?: number;
  step?: number;
  /** Handler for events on trigger element, each time thumbs change selection, which is passed in `value`. */
  onChange?: (a: {} & ParamsT) => unknown;
};

export type StylePropsT = {
  $disabled?: boolean;
  $isDragged?: boolean;
  $max?: number;
  $min?: number;
  $thumbIndex?: number;
  $value?: Array<number>;
};
