/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {SIZE} from './constants';
import type {OverrideT} from '../helpers/overrides';

export type SizeT = keyof typeof SIZE;
export type SpinnerPropsT = {
  /** Sets aria-label attribute. */
  'aria-label'?: string;
  /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
  size?: number | string;
  /** Color of icon, will be used as svg fill */
  color?: string;
  /** Silence should only be used in baseui. Used to not spam console on composed components like Select */
  $silenceV11DeprecationWarning?: boolean;
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string;
  overrides?: {
    Svg?: OverrideT;
    ActivePath?: OverrideT;
    TrackPath?: OverrideT;
  };
};