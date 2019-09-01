/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {InputPropsT, BaseInputPropsT, InternalStateT} from './types';

export function getSharedProps<T>(
  props: BaseInputPropsT<T> | InputPropsT,
  state: InternalStateT,
) {
  const {disabled, error, positive, adjoined, size, required} = props;
  const {isFocused} = state;
  return {
    $isFocused: isFocused,
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $adjoined: adjoined,
    $size: size,
    $required: required,
  };
}
