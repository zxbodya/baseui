/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import {Button} from '../index';
import {SIZE} from '../constants';

export const name = 'button-sizes';

export const component = () => (
  <React.Fragment>
    <Button size={SIZE.compact}>Primary</Button>
    <Button size={SIZE.default}>Primary</Button>
    <Button size={SIZE.large}>Primary</Button>
  </React.Fragment>
);
