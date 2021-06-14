/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import InputBeforeAfter from './input-before-after.scenario';
import InputClearableNoescape from './input-clearable-noescape.scenario';
import InputClearable from './input-clearable.scenario';
import InputDisabledMatchesSelect from './input-disabled-matches-select.scenario';
import InputMask from './input-mask.scenario';
import InputNumber from './input-number.scenario';
import InputPassword from './input-password.scenario';
import InputSelector from './input-selector.scenario';
import InputSizes from './input-sizes.scenario';
import InputStates from './input-states.scenario';
import InputWithButton from './input-with-button.scenario';
import InputDefault from './input.scenario';

export const BeforeAfter = () => <InputBeforeAfter />;
export const ClearableNoescape = () => <InputClearableNoescape />;
export const Clearable = () => <InputClearable />;
export const DisabledMatchesSelect = () => <InputDisabledMatchesSelect />;
export const Mask = () => <InputMask />;
export const Number = () => <InputNumber />;
export const Password = () => <InputPassword />;
export const Selector = () => <InputSelector />;
export const Sizes = () => <InputSizes />;
export const States = () => <InputStates />;
export const WithButton = () => <InputWithButton />;
export const Input = () => <InputDefault />;
