/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import createTheme from './creator';
import {primitives as lightThemePrimitives} from './light-theme-primitives';
import {primitives as darkThemePrimitives} from './dark-theme-primitives';
import {LightThemeMove} from './light-theme-with-move';
import {DarkThemeMove} from './dark-theme-with-move';
import {DarkTheme} from './dark-theme';

export const LightTheme = createTheme(lightThemePrimitives, {
  name: 'light-theme',
});

export {
  createTheme,
  LightThemeMove,
  lightThemePrimitives,
  darkThemePrimitives,
  DarkTheme,
  DarkThemeMove,
};

export * from './types';
