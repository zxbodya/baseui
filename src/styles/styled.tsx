/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {
  createStyled,
  withStyle as styletronWithStyle,
  useStyletron as styletronUseStyletron,
} from 'styletron-react';
import {driver, getInitialStyle} from 'styletron-standard';
import {StyleObject} from 'styletron-standard';
import {ThemeT} from './types';

import {ThemeContext} from './theme-provider';
import {Ref} from 'react';

type $Call1<F extends (...args: any) => any, A> = F extends (
  a: A,
  ...args: any
) => infer R
  ? R
  : never;

const wrapper = StyledComponent => {
  return React.forwardRef((props, ref) => (
    <ThemeContext.Consumer>
      {theme => <StyledComponent ref={ref} {...props} $theme={theme} />}
    </ThemeContext.Consumer>
  ));
};

/* eslint-disable flowtype/generic-spacing */
/* eslint-disable flowtype/no-weak-types */
export type StyletronComponent<Props> = React.FunctionComponent<
  Props & {
    // todo: can be specific component
    ref?: Ref<any>;
  }
> & {
  __STYLETRON__: any;
};

type StyleFn<Theme> = {
  <
    C extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
    P extends object
  >(
    component: C,
    style:
      | StyleObject
      | ((
          props: P & {
            $theme: Theme;
          },
        ) => StyleObject),
  ): StyletronComponent<
    Pick<
      React.ComponentProps<C>,
      Exclude<keyof React.ComponentProps<C>, {className: string}>
    > &
      P
  >;
  <C extends keyof JSX.IntrinsicElements | React.ComponentType<any>>(
    component: C,
    style: StyleObject,
  ): StyletronComponent<
    Pick<
      React.ComponentProps<C>,
      Exclude<keyof React.ComponentProps<C>, {className: string}>
    >
  >;
};

type WithStyleFn<Theme> = {
  <C extends StyletronComponent<any>, P extends object>(
    component: C,
    style:
      | ((
          props: P & {
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
  return (createStyled({
    wrapper,
    getInitialStyle,
    driver,
    // eslint-disable-next-line flowtype/no-weak-types
  }) as any) as StyleFn<Theme>;
}

export const styled = createThemedStyled<ThemeT>();

export function createThemedWithStyle<Theme>(): WithStyleFn<Theme> {
  // eslint-disable-next-line flowtype/no-weak-types
  return (styletronWithStyle as any) as WithStyleFn<Theme>;
}

export const withStyle = createThemedWithStyle<ThemeT>();

type UseStyletronFn<Theme> = () => [(a: StyleObject) => string, Theme];

export function createThemedUseStyletron<Theme>(): UseStyletronFn<Theme> {
  return function() {
    // eslint-disable-next-line flowtype/no-weak-types
    const theme = (React.useContext(ThemeContext) as any) as Theme;
    const [css] = styletronUseStyletron();
    return [css, theme];
  };
}

export const useStyletron = createThemedUseStyletron<ThemeT>();
