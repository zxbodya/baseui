/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import createTheme from './creator';
import {primitives} from './dark-theme-primitives';
import colors from './dark-theme-colors';

export const DarkTheme = createTheme(
  {
    ...primitives,
  },
  {
    name: 'dark-theme',
    ...colors,
  },
);
