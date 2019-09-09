/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides';

export type SpinnerPropsT = {
  /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
  size?: number | string;
  /** Color of icon, will be used as svg fill */
  color?: string;
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string;
  overrides?: {
    Svg?: OverrideT<any>;
    ActivePath?: OverrideT<any>;
    TrackPath?: OverrideT<any>;
  };
};
