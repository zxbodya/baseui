/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Textarea from './textarea';
import {StatefulTextareaPropsT, TextareaPropsT} from './types';

export default function StatefulTextarea(props: StatefulTextareaPropsT) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: TextareaPropsT) => <Textarea {...childrenProps} />}
    </StatefulContainer>
  );
}
