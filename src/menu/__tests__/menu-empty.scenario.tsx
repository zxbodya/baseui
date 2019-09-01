/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {Menu} from '../index';

export const name = 'menu-empty';

export const component = () => (
  <Menu
    items={[]}
    overrides={{
      List: {
        style: {
          width: '270px',
        },
      },
    }}
  />
);
