/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {mount} from 'enzyme';

import {Notification} from '../index';
import {Toast, StyledBody, StyledCloseIcon} from '../../toast/index';

jest.useFakeTimers();

describe('Toast', () => {
  test('basic inline rendering', () => {
    const wrapper = mount(<Notification>Notification</Notification>);

    expect(wrapper.find(Toast).first()).toExist();
    expect(wrapper.find(StyledBody).first()).toExist();
    expect(wrapper.find(StyledCloseIcon).first()).not.toExist();
  });
});
