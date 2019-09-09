/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled, hexToRgb} from '../styles/index';

import {StylePropsT} from './types';

export const Root = styled<StylePropsT>('div', props => {
  return {
    width: '100%',
  };
});

export const Bar = styled<StylePropsT>('div', props => {
  const {$theme} = props;
  const {colors, sizing, borders} = $theme;
  const borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    marginLeft: sizing.scale500,
    marginRight: sizing.scale500,
    marginTop: sizing.scale500,
    marginBottom: sizing.scale500,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: hexToRgb(colors.progressbarTrackFill, '0.16'),
    height: '4px',
  } as {};
});

export const BarProgress = styled<StylePropsT>('div', props => {
  const {$theme, $value, $successValue} = props;
  const {colors, sizing, borders} = $theme;
  const width = `${($value / $successValue) * 100}%`;
  const borderRadius = borders.useRoundedCorners ? sizing.scale0 : 0;
  return {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    backgroundColor: colors.primary400,
    width: width,
    transition: 'width 0.5s',
    height: '100%',
  };
});

export const Label = styled<StylePropsT>('div', props => {
  return {
    textAlign: 'center',
    ...props.$theme.typography.font250,
    color: props.$theme.colors.mono700,
  };
});
