/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {
  ProgressBarRounded,
  StyledProgressBarRoundedRoot,
  StyledProgressBarRoundedSvg,
  StyledProgressBarRoundedText,
  StyledProgressBarRoundedTrackBackground,
  StyledProgressBarRoundedTrackForeground,
} from '../progress-bar/index';
export {default as Spinner} from './spinner';
// Styled elements
export {
  Svg as StyledSvg,
  StyledTrackPath,
  StyledActivePath,
  StyledSpinnerNext,
} from './styled-components';
export {SIZE} from './constants';
// Flow
export * from './types';

// Backward compatibility with SpinnerDeterminate
// Deprecated
export {
  ProgressBarRounded as SpinnerDeterminate,
  StyledProgressBarRoundedRoot as StyledSpinnerDeterminateRoot,
  StyledProgressBarRoundedSvg as StyledSpinnerDeterminateSvg,
  StyledProgressBarRoundedTrackBackground as StyledSpinnerDeterminateTrackBackground,
  StyledProgressBarRoundedTrackForeground as StyledSpinnerDeterminateTrackForeground,
  StyledProgressBarRoundedText as StyledSpinnerDeterminateText,
};
