/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Button} from '../../button/index';
import {StatefulButtonGroup, MODE} from '../index';

export const name = 'button-group-checkbox';

export const component = () => (
  <StatefulButtonGroup mode={MODE.checkbox}>
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </StatefulButtonGroup>
);
