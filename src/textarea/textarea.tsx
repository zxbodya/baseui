/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {TextareaPropsT} from './types';
import {mergeOverrides} from '../helpers/overrides';
import {BaseInput, SIZE, CUSTOM_INPUT_TYPE} from '../input/index';
import {StyledTextarea, StyledTextareaContainer} from './styled-components';

class Textarea extends React.Component<TextareaPropsT> {
  static defaultProps = {
    autoFocus: false,
    disabled: false,
    error: false,
    name: '',
    onBlur: () => {},
    onChange: () => {},
    onKeyDown: () => {},
    onKeyPress: () => {},
    onKeyUp: () => {},
    onFocus: () => {},
    overrides: {},
    placeholder: '',
    required: false,
    rows: 3,
    size: SIZE.default,
    value: '',
  };

  render() {
    const overrides = mergeOverrides(
      {
        Input: {component: StyledTextarea},
        InputContainer: {component: StyledTextareaContainer},
      },
      this.props.overrides,
    );
    return (
      <BaseInput
        data-baseweb="textarea"
        {...this.props}
        type={CUSTOM_INPUT_TYPE.textarea}
        overrides={overrides}
      />
    );
  }
}

export default Textarea;
