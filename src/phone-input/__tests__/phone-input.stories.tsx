/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import CountrySelectDropdownScenario from './country-select-dropdown.scenario';
import CountrySelectSmallDropdownScenario from './country-select-small-dropdown.scenario';
import PhoneInputCustomFlags from './phone-input-custom-flags.scenario';
import PhoneInputNextDropdown from './phone-input-next-dropdown.scenario';
import PhoneInputNext from './phone-input-next.scenario';
import PhoneInputOverrides from './phone-input-overrides.scenario';
import PhoneInputDefault from './phone-input.scenario';

export const CountrySelectDropdown = () => <CountrySelectDropdownScenario />;
export const CountrySelectSmallDropdown = () => (
  <CountrySelectSmallDropdownScenario />
);
export const CustomFlags = () => <PhoneInputCustomFlags />;
export const NextDropdown = () => <PhoneInputNextDropdown />;
export const Next = () => <PhoneInputNext />;
export const Overrides = () => <PhoneInputOverrides />;
export const PhoneInput = () => <PhoneInputDefault />;
