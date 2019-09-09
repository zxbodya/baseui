/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Button} from '../../button/index';
import {StatefulPopover} from '../index';

export const name = 'popover-click';

export const component = () => (
  <StatefulPopover accessibilityType={'tooltip'} content={<div>content</div>}>
    <Button>Open</Button>
  </StatefulPopover>
);
