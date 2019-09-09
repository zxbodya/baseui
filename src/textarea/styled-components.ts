/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {
  getInputStyles,
  getInputContainerStyles,
} from '../input/styled-components';
import {SharedStylePropsT} from './types';

// $FlowFixMe https://github.com/facebook/flow/issues/7745
export const StyledTextareaContainer = styled<'div', SharedStylePropsT>(
  'div',
  props => ({
    ...getInputContainerStyles(props),
  }),
);

// $FlowFixMe https://github.com/facebook/flow/issues/7745
export const StyledTextarea = styled<'textarea', SharedStylePropsT>(
  'textarea',
  props => ({
    ...getInputStyles(props),
    resize: 'none',
  }),
);
