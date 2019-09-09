/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index.js';
import {TYPE} from './constants.js';
import {StyledList, StyledListItem} from '../menu/index.js';
import {SIZE} from './constants.js';
import {SharedStylePropsArgT} from './types.js';
import {ellipsisText} from '../styles/util.js';
import {ThemeT} from '../styles/types.js';

function getFont(size = SIZE.default, typography) {
  return {
    [SIZE.compact]: typography.font300,
    [SIZE.default]: typography.font400,
    [SIZE.large]: typography.font460,
  }[size];
}

function getControlPadding(props, emptyValue) {
  const {
    $theme,
    $theme: {sizing},
    $size = SIZE.default,
    $type,
    $multi,
  } = props;
  const isSearch = $type === TYPE.search;
  const paddingLeft = isSearch ? sizing.scale1000 : sizing.scale500;
  return {
    [SIZE.compact]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !emptyValue
          ? `calc(${sizing.scale200} - ${sizing.scale0})`
          : sizing.scale200,
      paddingBottom:
        $multi && !emptyValue
          ? `calc(${sizing.scale200} - ${sizing.scale0})`
          : sizing.scale200,
      [$theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft']:
        $multi && !emptyValue
          ? `calc(${paddingLeft} - ${sizing.scale0})`
          : paddingLeft,
      [$theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight']: '0',
    },
    [SIZE.default]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !emptyValue
          ? `calc(${sizing.scale400} - ${sizing.scale0})`
          : sizing.scale400,
      paddingBottom:
        $multi && !emptyValue
          ? `calc(${sizing.scale400} - ${sizing.scale0})`
          : sizing.scale400,
      [$theme.direction === 'rtl'
        ? 'paddingRight'
        : 'paddingLeft']: paddingLeft,
      [$theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight']: 0,
    },
    [SIZE.large]: {
      // `sizing.scale0` based on the multi value component (Tag) top and bottom margin
      paddingTop:
        $multi && !emptyValue
          ? `calc(${sizing.scale550} - ${sizing.scale0})`
          : sizing.scale550,
      paddingBottom:
        $multi && !emptyValue
          ? `calc(${sizing.scale550} - ${sizing.scale0})`
          : sizing.scale550,
      [$theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft']:
        $multi && !emptyValue
          ? `calc(${paddingLeft} - ${sizing.scale0})`
          : paddingLeft,
      [$theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight']: 0,
    },
  }[$size];
}

export const StyledDropdownContainer = styled<SharedStylePropsArgT>(
  'div',
  props => {
    return {
      width: `${String(props.$width)}px`,
    };
  },
);

export const StyledDropdown = StyledList;

export const StyledDropdownListItem = StyledListItem;

export const StyledOptionContent = styled<SharedStylePropsArgT>(
  'div',
  props => {
    const {$isHighlighted, $selected, $disabled, $theme} = props;

    return {
      cursor: $disabled ? 'not-allowed' : 'pointer',
      color:
        $selected && !$isHighlighted ? $theme.colors.menuFontSelected : null,
      fontWeight: $selected ? 'bold' : 'normal',
    } as {};
  },
);

export const StyledRoot = styled<SharedStylePropsArgT>('div', props => {
  const {
    $theme: {typography},
    $size,
  } = props;
  return {
    ...getFont($size, typography),
    boxSizing: 'border-box',
    position: 'relative',
  };
});

function getControlContainerColors(
  $disabled,
  $isFocused,
  $isPseudoFocused,
  $positive,
  $error,
  colors,
) {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      borderColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused || $isPseudoFocused) {
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

export const StyledControlContainer = styled<SharedStylePropsArgT>(
  'div',
  props => {
    const {
      $disabled,
      $error,
      $positive,
      $isFocused,
      $isPseudoFocused,
      $type,
      $searchable,
      $theme: {borders, colors, animation},
    } = props;
    return {
      borderTopLeftRadius: borders.inputBorderRadius,
      borderTopRightRadius: borders.inputBorderRadius,
      borderBottomRightRadius: borders.inputBorderRadius,
      borderBottomLeftRadius: borders.inputBorderRadius,
      boxSizing: 'border-box',
      overflow: 'hidden',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      cursor: $disabled
        ? 'not-allowed'
        : $searchable || $type === TYPE.search
        ? 'text'
        : 'pointer',
      borderWidth: '2px',
      borderStyle: 'solid',
      transitionProperty: 'border, box-shadow, background-color',
      transitionDuration: animation.timing100,
      transitionTimingFunction: animation.easeOutCurve,
      ...getControlContainerColors(
        $disabled,
        $isFocused,
        $isPseudoFocused,
        $positive,
        $error,
        colors,
      ),
    };
  },
);

export const StyledValueContainer = styled<SharedStylePropsArgT>(
  'span',
  props => {
    const padding = getControlPadding(props);
    return {
      boxSizing: 'border-box',
      position: 'relative',
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: '0%',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      overflow: 'hidden',
      ...padding,
    };
  },
);

export const StyledPlaceholder = styled<SharedStylePropsArgT>('div', props => {
  const {
    $disabled,
    $theme: {colors},
  } = props;
  return {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    color: $disabled ? colors.inputTextDisabled : colors.foregroundAlt,
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    ...getControlPadding(props, true),
  };
});

export const StyledSingleValue = styled<SharedStylePropsArgT>('div', props => {
  const {
    $searchable,
    $size,
    $theme,
    $theme: {typography},
  } = props;
  const font = getFont($size, typography);
  return {
    lineHeight: !$searchable ? font.lineHeight : 'inherit',
    boxSizing: 'border-box',
    position: 'absolute',
    top: 0,
    [$theme.direction === 'rtl' ? 'right' : 'left']: 0,
    height: '100%',
    maxWidth: '100%',
    ...ellipsisText,
    ...getControlPadding(props),
  };
});

export const StyledInputContainer = styled<SharedStylePropsArgT>(
  'div',
  props => {
    const {
      $size,
      $searchable,
      $theme: {typography},
    } = props;
    const font = getFont($size, typography);
    return {
      position: 'relative',
      display: 'inline-block',
      maxWidth: '100%',
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      boxSizing: 'border-box',
      outline: 'none',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      height: String(!$searchable ? font.lineHeight : 'auto'),
      maxHeight: font.lineHeight,
    };
  },
);

export const StyledInput = styled<SharedStylePropsArgT>('input', props => {
  const {
    $theme: {typography},
    $size,
    $disabled,
    $searchable,
    $width,
  } = props;
  return {
    ...getFont($size, typography),
    boxSizing: 'content-box',
    width: $disabled || !$searchable ? '1px' : $width || '100%',
    maxWidth: '100%',
    background: 'transparent',
    border: 'none',
    boxShadow: 'none',
    display: 'inline-block',
    outline: 'none',
    marginTop: '0',
    marginBottom: '0',
    marginLeft: '0',
    marginRight: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
  };
});

export const StyledInputSizer = styled<SharedStylePropsArgT>(
  'div',
  ({$size, $theme, $theme: {typography}}) => ({
    ...getFont($size, typography),
    position: 'absolute',
    top: 0,
    [$theme.direction === 'rtl' ? 'right' : 'left']: 0,
    visibility: 'hidden',
    height: 0,
    overflow: 'scroll',
    whiteSpace: 'pre',
  }),
);

export const StyledIconsContainer = styled<SharedStylePropsArgT>(
  'div',
  ({$theme, $theme: {sizing}}) => {
    return {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      alignSelf: 'stretch',
      [$theme.direction === 'rtl'
        ? 'paddingLeft'
        : 'paddingRight']: sizing.scale500,
    };
  },
);

function getSvgStyles({$theme}) {
  return {
    display: 'inline-block',
    fill: 'currentColor',
    color: 'currentColor',
    height: $theme.sizing.scale600,
    width: $theme.sizing.scale600,
  };
}

export const StyledSelectArrow = styled<SharedStylePropsArgT>('svg', props => {
  const {$theme, $disabled} = props;
  const {colors} = $theme;
  return {
    ...getSvgStyles({$theme}),
    color: $disabled ? colors.inputTextDisabled : colors.foregroundAlt,
    cursor: $disabled ? 'not-allowed' : 'pointer',
  };
});

export const StyledClearIcon = styled<SharedStylePropsArgT>('svg', props => {
  const {$theme} = props;
  const {colors} = $theme;
  return {
    ...getSvgStyles({$theme}),
    color: colors.foregroundAlt,
    cursor: 'pointer',
  };
});

export const getLoadingIconStyles = (props: {$theme: ThemeT}) => {
  const {$theme} = props;
  const {colors} = $theme;
  return {
    ...getSvgStyles({$theme}),
    color: colors.foregroundAlt,
  };
};

export const StyledSearchIcon = styled<SharedStylePropsArgT>('div', props => {
  const {$disabled, $theme} = props;
  const {colors, sizing} = $theme;
  return {
    ...getSvgStyles(props),
    color: $disabled ? colors.inputTextDisabled : colors.foregroundAlt,
    cursor: $disabled ? 'not-allowed' : 'pointer',
    position: 'absolute',
    [$theme.direction === 'rtl' ? 'right' : 'left']: sizing.scale500,
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  };
});
