/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';

import {SharedPropsT} from './types';

export const StyledRoot = styled<'nav', SharedPropsT>('nav', props => {
  const {
    $theme: {colors, typography},
  } = props;
  return {
    ...typography.font400,
    color: colors.foreground,
    listStyleType: 'none',
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  };
});

export const StyledNavItemContainer = styled('li', {});

export const StyledNavLink = styled('a', {
  color: 'inherit',
  textDecoration: 'none',
});

export const StyledNavItem = styled<'div', SharedPropsT>('div', props => {
  const {
    $active,
    $selectable,
    $level,
    $theme,
    $theme: {colors, sizing},
  } = props;
  return {
    backgroundColor: $active ? colors.primary : 'transparent',
    backgroundImage: $active
      ? `linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92))`
      : null,
    boxSizing: 'border-box',
    [$theme.direction === 'rtl'
      ? 'borderRightWidth'
      : 'borderLeftWidth']: '4px',
    [$theme.direction === 'rtl'
      ? 'borderRightStyle'
      : 'borderLeftStyle']: 'solid',
    [$theme.direction === 'rtl'
      ? 'borderRightColor'
      : 'borderLeftColor']: $active ? colors.primary : 'transparent',
    color: $active ? colors.primary : null,
    cursor: $selectable ? 'pointer' : 'default',
    // outline: 'none',
    paddingTop: sizing.scale500,
    paddingBottom: sizing.scale500,
    [$theme.direction === 'rtl'
      ? 'paddingRight'
      : 'paddingLeft']: `calc(${sizing.scale800} * ${$level})`,
    [$theme.direction === 'rtl'
      ? 'paddingLeft'
      : 'paddingRight']: sizing.scale500,
    ':hover': {
      color: $selectable ? colors.primary : null,
    },
    ':focus': {
      color: $selectable ? colors.primary : null,
    },
  } as {};
});

export const StyledSubNavContainer = styled('ul', {
  listStyleType: 'none',
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0,
});
