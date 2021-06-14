/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Button} from '../../button/index';
import Upload from '../upload';

export default function Scenario() {
  return (
    <div>
      <Button startEnhancer={Upload}>Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer="hello">Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={() => <span>fn</span>}>Start Enhancer</Button>
      <br />
      <br />
      <Button startEnhancer={<span>node</span>}>Start Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={Upload}>End Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={21}>End Enhancer</Button>
      <br />
      <br />
      <Button endEnhancer={['a', 'b']}>End Enhancer</Button>
      <br />
      <br />
      <Button>
        <Upload />
      </Button>
    </div>
  );
}
