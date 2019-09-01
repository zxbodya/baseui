/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Button} from '../../button/index';
import Upload from '../upload';

export const name = 'icon-buttons';

export const component = () => (
  <div>
    <Button startEnhancer={Upload}>Start Enhancer</Button>
    <br />
    <br />
    <Button endEnhancer={Upload}>End Enhancer</Button>
    <br />
    <br />
    <Button>
      <Upload />
    </Button>
  </div>
);
