/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import type {ThemeT} from '../styles/types';
import type {StyledComponentArgsT} from './types';

export function getSvgStyles({
  $theme,
  $size,
  $color,
}: StyledComponentArgsT & {
  $theme: ThemeT;
}) {
  let size = $theme.sizing.scale600;
  if ($size) {
    if ($theme.sizing[$size]) {
      size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      size = `${$size}px`;
    } else {
      size = $size;
    }
  }

  let color = 'currentColor';
  if ($color) {
    if ($theme.colors[$color]) {
      color = $theme.colors[$color];
    } else {
      color = $color;
    }
  }

  return {
    display: 'inline-block',
    fill: color,
    color: color,
    height: size,
    width: size,
  };
}

export const Svg = styled<StyledComponentArgsT>('svg', getSvgStyles);