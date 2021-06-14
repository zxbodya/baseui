/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/generic-spacing */
import type {OverrideT} from '../helpers/overrides';
import type {OptionT} from '../select/index';
import type {SizeT} from '../input/types';
import type {DateIOAdapter} from '../datepicker/utils/types';

export type TimePickerPropsT<T = Date> = {
  /** Render options in AM/PM format or 24 hour format. Defaults to 12 hour. */
  adapter: DateIOAdapter<T>;
  format?: '12' | '24';
  /** Callback for when time selection changes. */
  onChange?: (a: T | null) => unknown;
  overrides?: {
    Select?: OverrideT;
  };
  /** Set to true to allow times that aren't displayed in the options list to be entered manually. Defaults to false. */
  creatable?: boolean;
  /** Amount of seconds between each option time. Defaults to 900 (15 minutes). */
  step?: number;
  /**
   * Optional value that can be provided to fully control the component. If not provided, TimePicker
   * will manage state internally and default to the closest step to new Date().
   */
  value?: T | null;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
  nullable?: boolean;
  placeholder?: string;
  size?: SizeT;
  minTime?: T;
  maxTime?: T;
};
export type TimePickerStateT = {
  /** List of times (in seconds) displayed in the dropdown menu. */
  steps: number[];
  /** Internal value of the selected time as an integer since midnight (0) */
  value: OptionT | undefined | null;
};

export type TimePickerDefaultPropsT = {
  format: '12';
  step: 900;
  creatable: false;
  adapter: DateIOAdapter<Date>;
};
