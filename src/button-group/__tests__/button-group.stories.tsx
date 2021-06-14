/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import ButtonGroupCheckbox from './button-group-checkbox.scenario';
import ButtonGroupDisabled from './button-group-disabled.scenario';
import ButtonGroupOverrides from './button-group-overrides.scenario';
import ButtonGroupPill from './button-group-pill.scenario';
import ButtonGroupRadio from './button-group-radio.scenario';
import ButtonGroupSizes from './button-group-sizes.scenario';

export const Checkbox = () => <ButtonGroupCheckbox />;
export const Disabled = () => <ButtonGroupDisabled />;
export const Overrides = () => <ButtonGroupOverrides />;
export const Pill = () => <ButtonGroupPill />;
export const Radio = () => <ButtonGroupRadio />;
export const Sizes = () => <ButtonGroupSizes />;
