/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import type {OverrideT} from '../helpers/overrides';
import type {IconPropsT} from '../icon/types';
import {ARTWORK_SIZES} from './constants';

export type ArtworkSizesT =
  | typeof ARTWORK_SIZES.SMALL
  | typeof ARTWORK_SIZES.MEDIUM
  | typeof ARTWORK_SIZES.LARGE;

export type StyledArtworkContainerPropsT = {
  $artworkSize: ArtworkSizesT | number;
  $sublist?: boolean;
};
export type StyledContentPropsT = {
  $mLeft: boolean;
  $sublist: boolean;
};

export type OverridesT = {
  Root?: OverrideT;
  ArtworkContainer?: OverrideT;
  Content?: OverrideT;
  EndEnhancerContainer?: OverrideT;
};

export type PropsT = {
  artwork?: React.ComponentType<
    {
      size: IconPropsT['size'];
    } & IconPropsT
  >;
  artworkSize?: ArtworkSizesT | number;
  children: React.ReactNode;
  endEnhancer?: React.ComponentType<{}>;
  overrides?: OverridesT;
  sublist?: boolean;
};

export type LabelPropsT = {
  children: React.ReactNode;
  description?: React.ReactNode;
  sublist?: boolean;
  overrides?: {
    LabelContent?: OverrideT;
    LabelDescription?: OverrideT;
    LabelSublistContent?: OverrideT;
  };
};

export type MenuAdapterPropsT = {
  // eslint-disable-next-line flowtype/no-weak-types
  item?: any;
  onMouseEnter?: (a: MouseEvent) => unknown;
  onClick?: (a: MouseEvent) => unknown;
  $size?: string;
  $isHighlighted?: boolean;
  $disabled?: boolean;
} & PropsT;
