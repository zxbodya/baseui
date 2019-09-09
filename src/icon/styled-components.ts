/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {ThemeT} from '../styles/types';
import {StyledComponentArgsT} from './types';

export function getSvgStyles({
  $theme,
  $size,
  $color,
}: StyledComponentArgsT & {
  $theme: ThemeT;
}) {
  if ($size) {
    if ($theme.sizing[$size]) {
      $size = $theme.sizing[$size];
    } else if (typeof $size === 'number') {
      $size = `${$size}px`;
    }
  } else {
    $size = $theme.sizing.scale600;
  }
  return {
    display: 'inline-block',
    fill: $color || 'currentColor',
    color: $color || 'currentColor',
    height: $size,
    width: $size,
  };
}

export const Svg = styled<StyledComponentArgsT>('svg', getSvgStyles);
