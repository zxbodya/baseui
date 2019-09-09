/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable */
import * as React from 'react';
import {StyledInitials, StyledRoot, Avatar} from '../index';

describe('Avatar styled Components flow', () => {
  test('it runs without flow error when we override Initials', () => {
    const CustomInitials = () => <StyledInitials>0_o</StyledInitials>;
    const CustomAvatar = () => (
      <Avatar
        overrides={{
          Initials: {
            component: CustomInitials,
          },
        }}
      />
    );
  });

  test('it provides flow error if we not provide all required props for StyledRoot', () => {
    const CustomRoot = props => {
      const {children, ...rest} = props;
      // todo: Root -> StyledRoot
      // @ts-ignore missing $didImageFailToLoad prop
      const BrokenCustomRootComponent = (
        <StyledRoot>{props.children}</StyledRoot>
      );
      const CustomRootComponent = (
        <StyledRoot {...rest}>{props.children}</StyledRoot>
      );
      return CustomRootComponent;
    };
    const CustomAvatar = () => (
      <Avatar
        overrides={{
          Root: {
            component: CustomRoot,
          },
        }}
      />
    );
  });
});
