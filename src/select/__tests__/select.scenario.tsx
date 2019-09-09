/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {StatefulSelect} from '../index.js';

export const name = 'select';

export const component = () => (
  <StatefulSelect
    aria-label="Select a color"
    options={[
      {id: 'AliceBlue', color: '#F0F8FF'},
      {id: 'AntiqueWhite', color: '#FAEBD7'},
      {id: 'Aqua', color: '#00FFFF'},
      {id: 'Aquamarine', color: '#7FFFD4'},
      {id: 'Azure', color: '#F0FFFF'},
      {id: 'Beige', color: '#F5F5DC'},
    ]}
    overrides={{ValueContainer: {props: {'data-id': 'selected'}}}}
    labelKey="id"
    valueKey="color"
  />
);
