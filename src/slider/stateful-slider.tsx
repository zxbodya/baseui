/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulSliderContainer from './stateful-slider-container';
import Slider from './slider';
import type {StatefulSliderPropsT} from './types';

export default function StatefulSlider(props: StatefulSliderPropsT) {
  return (
    // @ts-ignore
    <StatefulSliderContainer {...props}>
      {childrenProps => <Slider {...childrenProps} />}
    </StatefulSliderContainer>
  );
}
