/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {
  createStyled,
  withStyle as styletronWithStyle,
  useStyletron as styletronUseStyletron,
  withWrapper as styletronWithWrapper,
  StyletronProps,
} from 'styletron-react';
import {driver, getInitialStyle} from 'styletron-standard';
import type {StyleObject} from 'styletron-standard';
import type {ThemeT} from './types';

import {ThemeContext} from './theme-provider';

const wrapper = StyledComponent => {
  return React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
      {theme => <StyledComponent ref={ref} {...props} $theme={theme} />}
    </ThemeContext.Consumer>
  ));
};

/* eslint-disable flowtype/generic-spacing */
/* eslint-disable flowtype/no-weak-types */
export type StyletronComponent<Props extends object> = React.FunctionComponent<
  Props & StyletronProps<Props>
> & {
  __STYLETRON__: any;
};

type StyleFn<DefaultTheme> = {
  <
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    P extends object,
    Theme = DefaultTheme
  >(
    component: C,
    style:
      | StyleObject
      | ((
          props: Omit<P, '$theme'> & {
            $theme: Theme;
          },
        ) => StyleObject),
  ): StyletronComponent<
    Omit<
      React.ComponentProps<C>,
      'className'
    > &
      P
  >;
  <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
    component: C,
    style: StyleObject,
  ): StyletronComponent<
    Omit<
      React.ComponentProps<C>,
      'className'
    >
  >;
};

type WithStyleFn<DefaultTheme> = {
  <C extends StyletronComponent<any>, P extends object, Theme = DefaultTheme>(
    component: C,
    style:
      | ((
          props: Omit<P, '$theme'> & {
            $theme: Theme;
          },
        ) => StyleObject)
      | StyleObject,
  ): StyletronComponent<React.ComponentProps<C> & P>;
  <C extends StyletronComponent<any>>(
    component: C,
    style: StyleObject,
  ): StyletronComponent<React.ComponentProps<C>>;
};

/* eslint-enable flowtype/generic-spacing */
/* eslint-enable flowtype/no-weak-types */

export function createThemedStyled<Theme>(): StyleFn<Theme> {
  return createStyled({
    wrapper,
    getInitialStyle,
    driver,
    // eslint-disable-next-line flowtype/no-weak-types
  }) as any as StyleFn<Theme>;
}

export const styled = createThemedStyled<ThemeT>();

export function createThemedWithStyle<Theme>(): WithStyleFn<Theme> {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithStyle as any as WithStyleFn<Theme>;
}

export const withStyle = createThemedWithStyle<ThemeT>();

type UseStyletronFn<Theme> = () => [(a: StyleObject) => string, Theme];

export function createThemedUseStyletron<Theme>(): UseStyletronFn<Theme> {
  return function () {
    // eslint-disable-next-line flowtype/no-weak-types
    const theme = React.useContext(ThemeContext) as any as Theme;
    const [css] = styletronUseStyletron();
    return [css, theme];
  };
}

export const useStyletron = createThemedUseStyletron<ThemeT>();

export function withWrapper(
  // eslint-disable-next-line flowtype/no-weak-types
  StyledElement: StyletronComponent<any>,
  wrapperFn: (
    // eslint-disable-next-line flowtype/no-weak-types
    // eslint-disable-next-line flowtype/no-weak-types
    a: StyletronComponent<any>,
  ) => (a: any) => any,
) {
  // eslint-disable-next-line flowtype/no-weak-types
  return styletronWithWrapper<StyletronComponent<any>, any>(
    StyledElement,
    Styled => {
      return React.forwardRef((props, ref) => (
        <ThemeContext.Consumer>
          {theme => wrapperFn(Styled)({ref: ref, ...props, $theme: theme})}
        </ThemeContext.Consumer>
      ));
    },
  );
}
