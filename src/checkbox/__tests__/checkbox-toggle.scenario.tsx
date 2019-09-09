/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {StatefulCheckbox, STYLE_TYPE} from '../index.js';

export const name = 'checkbox-toggle';

export const component = () => (
  <div style={{width: '200px'}}>
    <StatefulCheckbox checkmarkType={STYLE_TYPE.toggle}>
      click me
    </StatefulCheckbox>
  </div>
);
