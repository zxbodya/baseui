/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const VARIANT = Object.freeze({
  solid: 'solid',
  light: 'light',
  outlined: 'outlined',
} as const);

// todo: dynamic identity map generation
export const KIND = {
  neutral: 'neutral',
  primary: 'primary',
  positive: 'positive',
  warning: 'warning',
  negative: 'negative',
  custom: 'custom',
} as const;
