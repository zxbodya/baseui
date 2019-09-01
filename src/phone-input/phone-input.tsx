/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, {useRef} from 'react';
import {Input as DefaultInput} from '../input/index';
import CountrySelect from './country-select';
import {getOverrides, mergeOverrides} from '../helpers/overrides';
import defaultProps from './default-props';
import {PropsT} from './types';

PhoneInput.defaultProps = defaultProps;

export default function PhoneInput(props: PropsT) {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    country,
    disabled,
    error,
    id,
    mapIsoToLabel,
    name,
    onTextChange,
    onCountryChange,
    overrides,
    placeholder,
    positive,
    required,
    size,
    text,
    ...restProps
  } = props;
  const inputRef = useRef(null);
  const baseOverrides = {
    Input: {
      style: ({$theme: {sizing}}) => ({
        paddingLeft: sizing.scale100,
      }),
    },
    Before: {
      component: CountrySelect,
      props: {
        country,
        disabled,
        error,
        inputRef,
        mapIsoToLabel,
        onCountryChange,
        overrides,
        positive,
        required,
        size,
      },
    },
  };
  const [Input, inputProps] = getOverrides(overrides.Input, DefaultInput);
  // @ts-ignore
  inputProps.overrides = mergeOverrides(baseOverrides, inputProps.overrides);
  return (
    <Input
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      autoComplete="tel"
      data-baseweb="phone-input"
      disabled={disabled}
      error={error}
      id={id}
      inputRef={inputRef}
      name={name}
      onChange={onTextChange}
      positive={positive}
      placeholder={placeholder}
      size={size}
      type="tel"
      value={text}
      {...restProps}
      {...inputProps}
    />
  );
}
