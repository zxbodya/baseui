/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationItem as NavigationItem,
  StyledNavigationList as NavigationList,
} from '../index';
import {Button} from '../../button/index';
import {StyledLink as Link} from '../../link/index';
import Menu from '../../icon/menu';

export const name = 'header-navigation';

export const component = () => (
  <HeaderNavigation>
    <NavigationList $align={ALIGN.left}>
      <NavigationItem>
        <Menu />
      </NavigationItem>
      <NavigationItem>Uber</NavigationItem>
    </NavigationList>
    <NavigationList $align={ALIGN.center} />
    <NavigationList $align={ALIGN.right}>
      <NavigationItem>
        <Link>Tab Link One</Link>
      </NavigationItem>
      <NavigationItem>
        <Link>Tab Link Two</Link>
      </NavigationItem>
      <NavigationItem>
        <Link>Tab Link Three</Link>
      </NavigationItem>
    </NavigationList>
    <NavigationList $align={ALIGN.right}>
      <NavigationItem>
        <Button>Get started</Button>
      </NavigationItem>
    </NavigationList>
  </HeaderNavigation>
);
