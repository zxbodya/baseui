/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {BlockPropsT} from '../block/types.js';

export type AspectRatioBoxPropsT = {
  /** Aspect ratio is width divided by height. */
  readonly aspectRatio: number;
} & BlockPropsT;
