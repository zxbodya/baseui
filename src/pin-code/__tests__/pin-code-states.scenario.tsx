/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import {StatefulPinCode} from '../index';

export const name = 'pin-code-states';

export const component = () => (
  <>
    <StatefulPinCode disabled />
    <br />
    <StatefulPinCode error />
    <br />
    <StatefulPinCode positive />
    <br />
  </>
);
