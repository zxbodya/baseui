/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {component as Checkbox} from './checkbox.scenario';
import {ThemeProvider, LightTheme} from '../../index';

export const name = 'checkbox-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div dir="rtl">
      <Checkbox />
    </div>
  </ThemeProvider>
);
