/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable */
import * as React from 'react';
import {mount} from 'enzyme';

import ThemeProvider from '../theme-provider';
import {styled} from '../styled';
import {withStyletronProvider} from '../../test/test-utils';

jest.unmock('../styled.js');

test('<ThemeProvider />', () => {
  const StyledMockButton = styled('button', ({theme}) => ({
    backgroundColor: 'red',
  }));

  const TestComponent = withStyletronProvider(() => (
    <ThemeProvider theme="red">
      <StyledMockButton id="testButton" />
    </ThemeProvider>
  ));
  const wrapper = mount(<TestComponent />);
  const button = wrapper
    .find('#testButton')
    .children()
    .at(0);
  expect(button.props().$theme).toBe('red');
  wrapper.unmount();
});
