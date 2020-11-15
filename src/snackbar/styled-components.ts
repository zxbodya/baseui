/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import {StyledSpinnerNext} from '../spinner/index';
import {styled, withStyle} from '../styles/index';

import {PLACEMENT} from './constants';
import type {PlacementT} from './types';
import type { StyleObject } from 'styletron-standard';

export const StyledRoot = styled<'div', {}>('div', ({$theme}) => {
  return {
    backgroundColor: $theme.colors.backgroundInverseSecondary,
    borderTopLeftRadius: $theme.sizing.scale600,
    borderTopRightRadius: $theme.sizing.scale600,
    borderBottomRightRadius: $theme.sizing.scale600,
    borderBottomLeftRadius: $theme.sizing.scale600,
    boxShadow: '0px 16px 48px rgba(0, 0, 0, 0.22)',
    color: $theme.colors.contentInversePrimary,
    display: 'inline-block',
    maxWidth: '540px',
    minWidth: '320px',
  };
});

export const StyledContent = styled('div', {
  alignItems: 'center',
  display: 'inline-flex',
  width: '100%',
});

export const StyledStartEnhancerContainer = styled<'span', {}>('span', ({$theme}) => {
  const paddingDir =
    $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  return {
    alignItems: 'center',
    display: 'flex',
    [paddingDir]: $theme.sizing.scale600,
  };
});

export const StyledSpinner = withStyle<
  typeof StyledSpinnerNext,
  {
    $height: number;
    $width: number;
  }
>(StyledSpinnerNext, ({$height, $width}) => {
  return {
    boxSizing: 'border-box',
    height: `${$height}px`,
    width: `${$width}px`,
  };
});

export const StyledMessage = styled<'p', {
  $hasSuffix: boolean;
}>(
  'p', // $FlowFixMe - suppressing due to webkit properties
  ({$theme, $hasSuffix}) => {
    const prefixPadding =
      $theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
    const suffixPadding =
      $theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight';
    return {
      ...$theme.typography.ParagraphMedium,
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 3,
      display: '-webkit-box',
      marginTop: $theme.sizing.scale600,
      marginBottom: $theme.sizing.scale600,
      overflow: 'hidden',
      [prefixPadding]: $theme.sizing.scale600,
      [suffixPadding]: $hasSuffix
        ? $theme.sizing.scale300
        : $theme.sizing.scale600,
    };
  },
);

export const StyledWrapActionButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
});

export const StyledActionButtonContainer = styled<'div', {}>('div', ({$theme}) => {
  const marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
  return {
    [marginDir]: 'auto',
  };
});

function placementRules(placement): StyleObject {
  switch (placement) {
    case PLACEMENT.topLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: 0,
      };
    case PLACEMENT.topRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        top: 0,
      };
    case PLACEMENT.bottom:
      return {
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.bottomLeft:
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.bottomRight:
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case PLACEMENT.top:
    default:
      return {
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0,
      };
  }
}

export const StyledPlacementContainer = styled<'div', {
  $animating: boolean;
  $placement: PlacementT;
  $translateHeight: number;
}>('div', ({$animating, $placement, $translateHeight, $theme}): StyleObject => {
  return {
    ...placementRules($placement),
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'none',
    position: 'fixed',
    transform: $animating ? `translateY(${$translateHeight}px)` : null,
    transitionProperty: 'all',
    transitionTimingFunction: $theme.animation.easeOutQuinticCurve,
    transitionDuration: $theme.animation.timing1000,
    right: 0,
    left: 0,
    marginTop: $theme.sizing.scale300,
    marginRight: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    marginLeft: $theme.sizing.scale300,
    [$theme.mediaQuery.medium]: {
      marginTop: $theme.sizing.scale600,
      marginRight: $theme.sizing.scale600,
      marginBottom: $theme.sizing.scale600,
      marginLeft: $theme.sizing.scale600,
    },
  };
});
