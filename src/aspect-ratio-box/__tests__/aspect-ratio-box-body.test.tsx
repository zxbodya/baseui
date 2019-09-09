/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {mount} from 'enzyme';

import AspectRatioBoxBody from '../aspect-ratio-box-body.js';

describe('AspectRatioBoxBody', () => {
  it('renders', () => {
    const wrapper = mount(<AspectRatioBoxBody />);
    expect(wrapper).toMatchSnapshot('with default styles');

    wrapper.setProps({
      overrides: {
        Block: {style: {marginBottom: '10px'}},
      },
    });
    expect(wrapper).toMatchSnapshot('with overridden styles');
  });
});
