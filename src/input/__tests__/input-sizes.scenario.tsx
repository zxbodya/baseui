/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import {StatefulInput, SIZE} from '../index';

export const name = 'input-sizes';

export const component = () => (
  <>
    <StatefulInput
      size={SIZE.compact}
      initialState={{value: 'Compact'}}
      endEnhancer=".com"
    />
    <br />
    <StatefulInput initialState={{value: 'Default'}} endEnhancer=".com" />
    <br />
    <StatefulInput
      size={SIZE.large}
      initialState={{value: 'Large'}}
      endEnhancer=".com"
    />
  </>
);
