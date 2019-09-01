/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import createTheme from './creator';
import {primitives as lightThemePrimitives} from './light-theme-primitives';

const primaryFontFamily =
  'UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';

const secondaryFontFamily =
  'UberMove, UberMoveText, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif';

export const LightThemeMove = createTheme(
  {
    ...lightThemePrimitives,
    primaryFontFamily,
  },
  {
    name: 'light-theme-with-move',
    typography: {
      font1100: {
        fontFamily: secondaryFontFamily,
      },
    },
  },
);
