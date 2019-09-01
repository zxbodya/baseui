/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const KIND = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  minimal: 'minimal',
} as const;

export const SHAPE = {
  default: 'default',
  round: 'round',
  square: 'square',
} as const;

export const SIZE = {
  default: 'default',
  compact: 'compact',
  large: 'large',
} as const;
