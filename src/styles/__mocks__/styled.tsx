/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import {getInitialStyle} from 'styletron-standard';
import {LightTheme} from '../../themes/index';
import createMockTheme from '../../test/create-mock-theme';
import {ThemeT} from '../../styles/types';
type ObjOrFnT = {} | ((a: {}) => {});

type PropsT = {
  $style?: ObjOrFnT;
  $theme?: ThemeT;
  // eslint-disable-next-line flowtype/no-weak-types
  forwardedRef: any;
};

type StateT = {
  styles?: {};
};

const MOCK_THEME = createMockTheme(LightTheme);
const IDENTITY = x => x;

export function styled(ElementName: string, objOrFn: ObjOrFnT = {}) {
  class MockStyledComponent extends React.Component<PropsT, StateT> {
    static displayName = 'MockStyledComponent';

    state = {} as StateT;

    static getDerivedStateFromProps(props: PropsT) {
      const styleFnArg = {
        ...props,
        // If we use defaultProps, $theme unnecessarily ends up in snapshots
        $theme: props.$theme || MOCK_THEME,
      };

      let styles =
        typeof objOrFn === 'function' ? objOrFn(styleFnArg) : objOrFn;

      // Check for runtime overrides
      let {$style} = props;
      if (typeof $style === 'function') {
        $style = $style(styleFnArg);
      }
      if ($style) {
        styles = {...styles, ...$style};
      }

      return {styles};
    }

    getPassedProps() {
      const {forwardedRef, ...restProps} = this.props;
      return Object.keys(restProps).reduce((acc, key) => {
        if (key[0] !== '$') {
          acc[key] = restProps[key];
        }
        return acc;
      }, {});
    }

    render() {
      return (
        // @ts-ignore
        <ElementName
          ref={this.props.forwardedRef}
          styled-component="true"
          test-style={this.state.styles}
          {...this.getPassedProps()}
        />
      );
    }
  }

  // @ts-ignore
  MockStyledComponent.__STYLETRON__ = {
    getInitialStyle,
    wrapper: IDENTITY,
    base: ElementName,
  };

  return React.forwardRef<PropsT, HTMLElement>((props, ref) => (
    <MockStyledComponent forwardedRef={ref} {...props} />
  ));
}
