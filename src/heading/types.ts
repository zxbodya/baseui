/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {BlockPropsT} from '../block/types';

export type HeadingPropsT = {
  /** Set and fix the style level independently on the hierarchy context. */
  styleLevel?: number;
} & BlockPropsT;
export type HeadingLevelPropsT = {
  /** Content to be rendered in the HeadingLevel. */
  children: React.ReactNode;
};
