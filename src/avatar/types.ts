/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides.js';

export type InitialsStylePropsT = {};
export type AvatarStylePropsT = {
  $size?: string;
};
export type RootStylePropsT = {
  $didImageFailToLoad: boolean;
  $size?: string;
};
export type StylePropsT = RootStylePropsT;

export type OverridesT<T> = {
  Avatar?: OverrideT<T>;
  Initials?: OverrideT<T>;
  Root?: OverrideT<T>;
};

export type StateT = {
  noImageAvailable: boolean;
};

export type PropsT = {
  /** Defines an alternative text description of the image. */
  name: string;
  overrides?: OverridesT<StylePropsT>;
  /** Defines the width/height of the image. Accepts labels from theme.sizing, or passes value to height/width. */
  size?: string;
  /** Image to display. */
  src?: string;
};
