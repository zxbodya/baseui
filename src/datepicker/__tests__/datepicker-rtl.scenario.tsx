/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {ThemeProvider, LightTheme} from '../../index.js';
import {component as DatepickerScenario} from './datepicker.scenario.js';

export const name = 'datepicker-rtl';

export const component = () => (
  <ThemeProvider theme={{...LightTheme, direction: 'rtl'}}>
    <div dir="rtl">
      <DatepickerScenario />
    </div>
  </ThemeProvider>
);
