/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {StylePropsT} from './types';

const DEFAULT = 0;
const HOVERED = 1;
const ACTIVE = 2;
type State = typeof DEFAULT | typeof HOVERED | typeof ACTIVE;
function getState(props): State {
  if (props.$isActive) return ACTIVE;
  if (props.$isHovered) return HOVERED;
  return DEFAULT;
}

function getOuterColor(props) {
  const {colors} = props.$theme;

  if (!props.$checked) {
    if (props.$disabled) return colors.tickMarkFillDisabled;
    if (props.$isError) return colors.tickBorderError;
    return colors.tickBorder;
  } else {
    if (props.$isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillErrorSelected;
        case HOVERED:
          return colors.tickFillErrorSelectedHover;
        case ACTIVE:
          return colors.tickFillErrorSelectedHoverActive;
      }
    } else {
      if (props.$disabled) return colors.tickFillDisabled;
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillSelected;
        case HOVERED:
          return colors.tickFillSelectedHover;
        case ACTIVE:
          return colors.tickFillSelectedHoverActive;
      }
    }
  }

  return null;
}

function getInnerColor(props) {
  const {colors} = props.$theme;

  if (props.$disabled) {
    return colors.tickMarkFillDisabled;
  }

  if (!props.$checked) {
    if (props.$isError) {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFillError;
        case HOVERED:
          return colors.tickFillErrorHover;
        case ACTIVE:
          return colors.tickFillErrorHoverActive;
      }
    } else {
      switch (getState(props)) {
        case DEFAULT:
          return colors.tickFill;
        case HOVERED:
          return colors.tickFillHover;
        case ACTIVE:
          return colors.tickFillActive;
      }
    }
  } else {
    return colors.tickMarkFill;
  }
}

function getLabelPadding(props) {
  const {$labelPlacement = '', $theme} = props;
  let paddingDirection;
  switch ($labelPlacement) {
    case 'top':
      paddingDirection = 'Bottom';
      break;
    case 'bottom':
      paddingDirection = 'Top';
      break;
    case 'left':
      paddingDirection = $theme.direction === 'rtl' ? 'Left' : 'Right';
      break;
    default:
    case 'right':
      paddingDirection = $theme.direction === 'rtl' ? 'Right' : 'Left';
      break;
  }
  const {sizing} = $theme;
  const {scale300} = sizing;
  return {
    [`padding${paddingDirection}`]: scale300,
  };
}

function getLabelColor(props) {
  const {$disabled, $theme} = props;
  const {colors} = $theme;
  return $disabled ? colors.foregroundAlt : colors.foreground;
}

export const RadioGroupRoot = styled<StylePropsT>('div', props => {
  const {$disabled, $align} = props;
  return {
    flexDirection: $align === 'horizontal' ? 'row' : 'column',
    display: 'flex',
    alignItems: $align === 'horizontal' ? 'center' : 'flex-start',
    cursor: $disabled ? 'not-allowed' : 'pointer',
  };
});

export const Root = styled<StylePropsT>('label', props => {
  const {$disabled, $hasDescription, $labelPlacement, $theme} = props;
  const {sizing} = $theme;
  return {
    flexDirection:
      $labelPlacement === 'top' || $labelPlacement === 'bottom'
        ? 'column'
        : 'row',
    display: 'flex',
    alignItems: 'center',
    cursor: $disabled ? 'not-allowed' : 'pointer',
    marginTop: sizing.scale200,
    marginBottom: $hasDescription ? null : sizing.scale200,
  } as {};
});

export const RadioMarkInner = styled<StylePropsT>('div', props => {
  const {animation, sizing} = props.$theme;

  return {
    backgroundColor: getInnerColor(props),
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    height: props.$checked ? sizing.scale200 : sizing.scale600,
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    width: props.$checked ? sizing.scale200 : sizing.scale600,
  };
});

export const RadioMarkOuter = styled<StylePropsT>('div', props => {
  const {sizing} = props.$theme;

  return {
    alignItems: 'center',
    backgroundColor: getOuterColor(props),
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
    display: 'flex',
    height: sizing.scale700,
    justifyContent: 'center',
    marginTop: sizing.scale0,
    marginRight: sizing.scale0,
    marginBottom: sizing.scale0,
    marginLeft: sizing.scale0,
    verticalAlign: 'middle',
    width: sizing.scale700,
    flexShrink: 0,
  } as {};
});

export const Label = styled<StylePropsT>('div', props => {
  const {
    $theme: {typography},
  } = props;
  return {
    verticalAlign: 'middle',
    ...getLabelPadding(props),
    color: getLabelColor(props),
    ...typography.font450,
  };
});

// tricky style for focus event cause display: none doesn't work
export const Input = styled('input', {
  opacity: 0,
  width: 0,
  overflow: 'hidden',
  margin: 0,
  padding: 0,
  position: 'absolute',
});

export const Description = styled<StylePropsT>('div', props => {
  return {
    ...props.$theme.typography.font300,
    color: props.$theme.colors.colorSecondary,
    cursor: 'auto',
    [props.$theme.direction === 'rtl' ? 'marginRight' : 'marginLeft']: props
      .$theme.sizing.scale900,
    maxWidth: '240px',
  };
});
