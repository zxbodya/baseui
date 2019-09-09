/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {ProgressBar} from '../index.js';

export const name = 'progress-bar-negative';

export const component = () => (
  <ProgressBar
    value={20}
    overrides={{
      BarProgress: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.negative,
        }),
      },
    }}
  />
);
