/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {ThemeProvider, LightTheme} from '../../index';
import {component as RadioScenario} from './radio.scenario';

export const name = 'radio-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div dir="rtl">
      <RadioScenario />
    </div>
  </ThemeProvider>
);
