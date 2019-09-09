/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {ThemeT} from '../styles/types';
import {ADJOINED, ENHANCER_POSITION, SIZE} from './constants';
import {SharedPropsT, SizeT} from './types';
import DeleteAlt from '../icon/delete-alt';

export const StyledClearIconContainer = styled<{
  $alignTop: boolean;
  $theme: ThemeT;
}>('div', ({$alignTop = false, $theme}) => {
  return {
    display: 'flex',
    alignItems: $alignTop ? 'flex-start' : 'center',
    [$theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight']: $theme.sizing
      .scale500,
    paddingTop: $alignTop ? $theme.sizing.scale500 : '0px',
    color: $theme.colors.foregroundAlt,
  };
});

export const StyledClearIcon = styled<typeof DeleteAlt, {}>(DeleteAlt, {
  cursor: 'pointer',
});

function getInputPadding(size, sizing) {
  return {
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale400,
      paddingRight: sizing.scale400,
    },
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.large]: {
      paddingTop: sizing.scale550,
      paddingBottom: sizing.scale550,
      paddingLeft: sizing.scale650,
      paddingRight: sizing.scale650,
    },
  }[size];
}

function getFont(size, typography) {
  return {
    [SIZE.compact]: typography.font300,
    [SIZE.default]: typography.font400,
    [SIZE.large]: typography.font460,
  }[size];
}

export const Root = styled<SharedPropsT>('div', props => {
  const {
    $size,
    $theme: {colors, typography},
  } = props;
  return {
    ...getFont($size, typography),
    color: colors.foreground,
    display: 'flex',
    width: '100%',
  };
});

// InputEnhancer

function getInputEnhancerBorderRadius(position, radius) {
  return {
    [ENHANCER_POSITION.start]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    [ENHANCER_POSITION.end]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
    },
  }[position];
}

function getInputEnhancerPadding($size, sizing) {
  return {
    [SIZE.compact]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.default]: {
      paddingRight: sizing.scale600,
      paddingLeft: sizing.scale600,
    },
    [SIZE.large]: {
      paddingRight: sizing.scale650,
      paddingLeft: sizing.scale650,
    },
  }[$size];
}

function getInputEnhancerColors(
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors,
) {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputEnhancerFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.foregroundInv,
      backgroundColor: colors.primary400,
    };
  }

  if ($error) {
    return {
      color: colors.foreground,
      backgroundColor: colors.inputBorderError,
    };
  }

  if ($positive) {
    return {
      color: colors.foreground,
      backgroundColor: colors.inputBorderPositive,
    };
  }

  return {
    color: colors.foreground,
    backgroundColor: colors.inputEnhancerFill,
  };
}

export const InputEnhancer = styled<SharedPropsT>('div', props => {
  const {
    $position,
    $size,
    $disabled,
    $isFocused,
    $error,
    $positive,
    $theme: {borders, colors, sizing, typography, animation},
  } = props;
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transitionProperty: 'color, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getInputEnhancerBorderRadius($position, borders.inputBorderRadius),
    ...getFont($size, typography),
    ...getInputEnhancerPadding($size, sizing),
    ...getInputEnhancerColors($disabled, $isFocused, $error, $positive, colors),
  };
});

// InputContainer

function getInputContainerBorderRadius(adjoined, radius) {
  return {
    [ADJOINED.none]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
    },
    [ADJOINED.left]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: radius,
      borderBottomRightRadius: radius,
    },
    [ADJOINED.right]: {
      borderTopLeftRadius: radius,
      borderBottomLeftRadius: radius,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    [ADJOINED.both]: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  }[adjoined];
}

function getInputContainerColors(
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors,
) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.foreground,
      borderColor: colors.primary400,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.foreground,
      borderColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.foreground,
      borderColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.foreground,
    borderColor: colors.inputFill,
    backgroundColor: colors.inputFill,
  };
}

export const getInputContainerStyles = (props: {
  $adjoined: keyof typeof ADJOINED;
  $isFocused: boolean;
  $error: boolean;
  $disabled: boolean;
  $positive: boolean;
  $size: SizeT;
  $theme: ThemeT;
}) => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $positive,
    $size,
    $theme: {borders, colors, typography, animation},
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    borderWidth: '2px',
    borderStyle: 'solid',
    transitionProperty: 'border, background-color',
    transitionDuration: animation.timing100,
    transitionTimingFunction: animation.easeOutCurve,
    ...getInputContainerBorderRadius($adjoined, borders.inputBorderRadius),
    ...getFont($size, typography),
    ...getInputContainerColors(
      $disabled,
      $isFocused,
      $error,
      $positive,
      colors,
    ),
  };
};

export const InputContainer = styled<SharedPropsT>(
  'div',
  getInputContainerStyles,
);

function getInputColors($disabled, $isFocused, $error, colors) {
  if ($disabled) {
    return {
      color: colors.foregroundAlt,
      caretColor: colors.foreground,
      '::placeholder': {
        color: colors.inputTextDisabled,
      },
    };
  }

  return {
    color: colors.foreground,
    caretColor: colors.foreground,
    '::placeholder': {
      color: colors.foregroundAlt,
    },
  };
}

export const getInputStyles = (
  props: SharedPropsT & {
    $theme: ThemeT;
  },
) => {
  const {
    $disabled,
    $isFocused,
    $error,
    $size,
    $theme: {colors, sizing, typography},
  } = props;
  return {
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderStyle: 'none',
    outline: 'none',
    width: '100%',
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    ...getFont($size, typography),
    ...getInputPadding($size, sizing),
    ...getInputColors($disabled, $isFocused, $error, colors),
  };
};

export const Input = styled<SharedPropsT>('input', getInputStyles);
