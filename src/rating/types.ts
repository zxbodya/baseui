/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {ThemeT} from '../styles/types';
import {OverrideT} from '../helpers/overrides';

export type RatingOverridesT = {
  Root?: OverrideT<any>;
  Item?: OverrideT<any>;
};

export type StarRatingPropsT = {
  overrides?: RatingOverridesT;
  /** The current rating value. */
  value?: number;
  /** The total number of items to display. */
  numItems: number;
  /** Callback that's called with the newly selected value. */
  onChange?: (a: {value: number}) => unknown;
};

export type EmoticonRatingPropsT = {
  overrides?: RatingOverridesT;
  /** The current rating value. */
  value?: number;
  /** Callback that's called with the newly selected value. */
  onChange?: (a: {value: number}) => unknown;
};

export type RatingStateT = {
  previewIndex?: number;
};

export type StyledRootPropsT = {
  $theme: ThemeT;
};

export type StyledRatingItemPropsT = {
  $theme: ThemeT;
  $isActive: boolean;
  $isSelected: boolean;
  $index: number;
};
