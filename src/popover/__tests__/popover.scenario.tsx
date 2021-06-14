/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Button} from '../../button/index';
import {Popover} from '../index';

export default function Scenario() {
  return (
    <Popover accessibilityType={'tooltip'} isOpen content={<div>content</div>}>
      <Button>Open</Button>
    </Popover>
  );
}
