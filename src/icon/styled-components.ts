/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {ThemeT} from '../styles/types';
import {StyledComponentArgsT} from './types';
import {StyleObject} from 'styletron-standard';

export function getSvgStyles({
  $theme,
  $size,
  $color,
}: StyledComponentArgsT & {
  $theme: ThemeT;
}): StyleObject {
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
    // @ts-ignore todo: 0 instead of number
    height: $size,
    // @ts-ignore
    width: $size,
  };
}

export const Svg = styled<'svg', StyledComponentArgsT>('svg', getSvgStyles);
