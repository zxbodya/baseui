/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import InputMask from 'react-input-mask';

import Input from './input';
import {Input as StyledInput} from './styled-components';
import {MaskedInputPropsT} from './types';

const MaskOverride = React.forwardRef<HTMLElement, MaskedInputPropsT>(
  (
    {
      startEnhancer,
      endEnhancer,
      error,
      onChange,
      onFocus,
      onBlur,
      value,
      disabled,
      ...restProps
    }: MaskedInputPropsT,
    ref,
  ) => {
    return (
      <InputMask
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        {...restProps}
      >
        {props => (
          <StyledInput
            ref={ref}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            disabled={disabled}
            {...props}
          />
        )}
      </InputMask>
    );
  },
);

export default function MaskedInput(props: MaskedInputPropsT) {
  const {
    // @ts-ignore
    overrides: {Input: inputOverride, ...restOverrides} = {},
    ...restProps
  } = props;
  const nextOverrides = {
    Input: {
      component: MaskOverride,
      props: restProps,
      ...(typeof inputOverride === 'object' ? inputOverride : {}),
    },
    ...restOverrides,
  };

  return <Input {...props} overrides={nextOverrides} />;
}

MaskedInput.defaultProps = {
  ...Input.defaultProps,
  maskChar: ' ',
};
