/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Avatar} from '../index';

export const name = 'avatar-no-src';

export const component = () => (
  <React.Fragment>
    {['scale800', 'scale1000', 'scale1200', 'scale1400', '64px'].map(
      (size, index) => (
        <Avatar name={`username`} size={size} key={size} />
      ),
    )}
  </React.Fragment>
);
