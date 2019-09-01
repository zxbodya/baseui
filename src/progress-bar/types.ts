/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {OverrideT} from '../helpers/overrides';

export type OverridesT = {
  Root?: OverrideT<any>;
  Bar?: OverrideT<any>;
  BarProgress?: OverrideT<any>;
  Label?: OverrideT<any>;
};

export type ProgressBarPropsT = {
  children?: React.ReactNode;
  /** The function that returns a progress bar label to display. */
  getProgressLabel: (value: number, successValue: number) => React.ReactNode;
  /** The value between `0` and `100 | successValue` of the progress indicator. */
  value: number;
  /** A custom completion value. */
  successValue: number;
  /** If set to false, label is hidden and `getProgressLabel` is ignored. */
  showLabel: boolean;
  overrides?: OverridesT;
};

export type StylePropsT = {
  $successValue: number;
  $value: number;
};
