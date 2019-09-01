/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {STATE_CHANGE_TYPE, SIZE, COUNTRIES} from './constants';
import {OverrideT} from '../helpers/overrides';
import {OnChangeParamsT} from '../select/types';

import {ChangeEvent} from 'react';

export type SizeT = keyof typeof SIZE;

export type CountryIsoT = keyof typeof COUNTRIES;

export type CountryT = Readonly<{
  dialCode: string;
  id: CountryIsoT;
  label: string;
}>;

export type CountriesT = Readonly<CountryT>;

export type StateT = {
  country: CountryT;
  text?: string;
};

export type StateChangeT = keyof typeof STATE_CHANGE_TYPE;

export type StateReducerT = (
  type: StateChangeT,
  nextState: StateT,
  currentState: StateT,
) => StateT;

export type mapIsoToLabelT = (iso: string) => string;

// Props

export type CountrySelectDropdownPropsT = {
  // eslint-disable-next-line flowtype/no-weak-types
  children: ReadonlyArray<React.ReactElement<any>>;
  $country: CountryT;
  $mapIsoToLabel?: mapIsoToLabelT;
  $maxDropdownHeight: string;
  $overrides: {
    CountrySelectDropdown?: OverrideT<any>;
    CountrySelectDropdownListItem?: OverrideT<any>;
    CountrySelectDropdownFlagColumn?: OverrideT<any>;
    CountrySelectDropdownNameColumn?: OverrideT<any>;
    CountrySelectDropdownDialcodeColumn?: OverrideT<any>;
    FlagContainer?: OverrideT<any>;
  };
};

export type CountrySelectPropsT = {
  country: CountryT;
  disabled: boolean;
  error: boolean;
  inputRef: {
    current: HTMLInputElement | null;
  };
  onCountryChange: (event: OnChangeParamsT) => unknown;
  mapIsoToLabel?: mapIsoToLabelT;
  maxDropdownHeight: string;
  maxDropdownWidth: string;
  overrides: {
    CountrySelectDropdown?: OverrideT<any>;
    CountrySelectDropdownListItem?: OverrideT<any>;
    CountrySelectDropdownFlagColumn?: OverrideT<any>;
    CountrySelectDropdownNameColumn?: OverrideT<any>;
    CountrySelectDropdownDialcodeColumn?: OverrideT<any>;
    DialCode?: OverrideT<any>;
    CountrySelect?: OverrideT<any>;
    FlagContainer?: OverrideT<any>;
  };
  positive: boolean;
  required: boolean;
  size: SizeT;
};

export type PropsT = {
  /** Sets aria-label attribute of the input element. */
  'aria-label': string | undefined | null;
  /** Sets aria-labelledby attribute of the input element. */
  'aria-labelledby': string | undefined | null;
  /** Sets aria-describedby attribute of the input element. */
  'aria-describedby': string | undefined | null;
  /** Defines the value of the country select. */
  country: CountryT;
  /** Defines if the component is disabled. */
  disabled: boolean;
  /** Renders component in 'error' state. */
  error: boolean;
  /** Sets the id attribute of the input element. */
  id: string | undefined | null;
  /** Sets the max height of the country select dropdown. */
  maxDropdownHeight: string;
  /** Sets the max width of the country select dropdown. */
  maxDropdownWidth: string;
  /** Function for mapping ISO codes to country names. Useful for localization of the country select dropdown. */
  mapIsoToLabel?: mapIsoToLabelT;
  /** Sets the name attribute of the input element. */
  name: string | undefined | null;
  /** A handler for the country select's change events. */
  onCountryChange: (event: OnChangeParamsT) => unknown;
  /** A handler for the input element's change events. */
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => unknown;
  overrides: {
    Input?: OverrideT<any>;
    CountrySelectDropdown?: OverrideT<any>;
    CountrySelectDropdownListItem?: OverrideT<any>;
    CountrySelectDropdownFlagColumn?: OverrideT<any>;
    CountrySelectDropdownNameColumn?: OverrideT<any>;
    CountrySelectDropdownDialcodeColumn?: OverrideT<any>;
    DialCode?: OverrideT<any>;
    CountrySelect?: OverrideT<any>;
    FlagContainer?: OverrideT<any>;
  };
  /** Sets the placeholder text for the input element.  */
  placeholder?: string;
  /** Renders component in 'positive' state. */
  positive: boolean;
  /** Sets the 'required' attribute of the input element. The country select will always have a value so does has no need for 'require'. */
  required: boolean;
  /** Sets the size of the component. */
  size: SizeT;
  /** Defines the value of the input element. */
  text: string;
};

export type StatefulPhoneInputContainerPropsT = {
  children: (a: PropsT) => React.ReactNode;
  initialState: StateT;
  stateReducer: StateReducerT;
  onTextChange: (event: ChangeEvent<HTMLInputElement>) => unknown;
  onCountryChange: (event: OnChangeParamsT) => unknown;
};

export type StatefulPhoneInputPropsT = PropsT & {
  initialState?: StateT;
  stateReducer?: StateReducerT;
  onTextChange?: (event: ChangeEvent<HTMLInputElement>) => unknown;
  onCountryChange?: (event: OnChangeParamsT) => unknown;
};
