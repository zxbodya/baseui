/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {getSvgStyles} from '../icon/styled-components';

type StylePropsT = {
  $size?: number | string;
  $color?: string;
};

const spin = {
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
};

/**
 * Spinner icon overrides
 */
export const Svg = styled<StylePropsT>('svg', props => {
  const {$theme, $color} = props;
  return {
    ...getSvgStyles(props),
    fill: $color || $theme.colors.primary400,
    cursor: 'wait',
    animationName: spin,
    animationDuration: $theme.animation.timing700,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
  };
});

export const StyledTrackPath = styled<StylePropsT>('path', props => ({
  fill: props.$theme.colors.spinnerTrackFill,
  opacity: 0.16,
}));

export const StyledActivePath = styled<StylePropsT>('path', props => ({
  fill: props.$color || props.$theme.colors.primary400,
}));
