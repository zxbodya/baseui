/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';
import {OverrideT} from '../helpers/overrides';
import {ORIENTATION, STATE_CHANGE_TYPE} from './constants';

import {OptionT} from '../select/index';

// eslint-disable-next-line flowtype/no-weak-types
type LocaleT = any; // see https://github.com/date-fns/date-fns/blob/master/src/locale/index.js.flow

type onChangeT = (a: {date: Date | undefined | null | Array<Date>}) => unknown;

export type DatepickerOverridesT<T> = {
  Root?: OverrideT<T>;
  /** Override for reused Select component. QuickSelect is **not a styled  element** but a react component that can be replaced */
  QuickSelect?: OverrideT<T>;
  QuickSelectContainer?: OverrideT<T>;
  /** Override for reused Select component. QuickSelectFormControl is **not a styled  element** but a react component that can be replaced */
  QuickSelectFormControl?: OverrideT<T>;
  /** Override for reused TimePicker component. TimeSelect is **not a styled  element** but a react component that can be replaced */
  TimeSelect?: OverrideT<T>;
  TimeSelectContainer?: OverrideT<T>;
  /** Override for reused Select component. TimeSelectFormControl is **not a styled  element** but a react component that can be replaced */
  TimeSelectFormControl?: OverrideT<T>;
  CalendarContainer?: OverrideT<T>;
  CalendarHeader?: OverrideT<T>;
  PrevButton?: OverrideT<T>;
  PrevButtonIcon?: OverrideT<T>;
  NextButton?: OverrideT<T>;
  NextButtonIcon?: OverrideT<T>;
  MonthContainer?: OverrideT<T>;
  MonthHeader?: OverrideT<T>;
  MonthYearSelectButton?: OverrideT<T>;
  MonthYearSelectIconContainer?: OverrideT<T>;
  MonthYearSelectPopover?: OverrideT<T>;
  MonthYearSelectStatefulMenu?: OverrideT<T>;
  WeekdayHeader?: OverrideT<T>;
  Month?: OverrideT<T>;
  Week?: OverrideT<T>;
  Day?: OverrideT<T>;
  /** Override for reused Input component. Input is **not a styled  element** but a react component that can be replaced */
  Input?: OverrideT<T>;
  /** Override for reused Popover component. Popover is **not a styled  element** but a react component that can be replaced */
  Popover?: OverrideT<T>;
};

export type DayPropsT = {
  disabled: boolean;
  date: Date;
  filterDate: ((day: Date) => boolean) | undefined | null;
  highlightedDate: Date | undefined | null;
  includeDates: Array<Date> | undefined | null;
  highlighted: boolean;
  range: boolean;
  focusedCalendar: boolean;
  locale: LocaleT | undefined | null;
  maxDate: Date | undefined | null;
  minDate: Date | undefined | null;
  month: number | undefined | null;
  onBlur: (a: {event: Event; date: Date}) => unknown;
  onFocus: (a: {event: Event; date: Date}) => unknown;
  onSelect: (a: {date: Date | undefined | null | Array<Date>}) => unknown;
  onClick: (a: {event: Event; date: Date}) => unknown;
  onMouseOver: (a: {event: Event; date: Date}) => unknown;
  onMouseLeave: (a: {event: Event; date: Date}) => unknown;
  overrides?: DatepickerOverridesT<{}>;
  peekNextMonth: boolean;
  value: Date | undefined | null | Array<Date>;
};

export type DayStateT = {
  isHovered: boolean;
};

export type WeekPropsT = {
  date: Date;
  excludeDates: Array<Date> | undefined | null;
  filterDate: ((day: Date) => boolean) | undefined | null;
  // highlighted while keyboard navigating or hovered
  highlightedDate: Date | undefined | null;
  includeDates: Array<Date> | undefined | null;
  focusedCalendar: boolean;
  range?: boolean;
  locale: LocaleT | undefined | null;
  maxDate: Date | undefined | null;
  minDate: Date | undefined | null;
  month: number | undefined | null;
  onDayBlur: (a: {date: Date; event: Event}) => unknown;
  onDayClick: (a: {date: Date; event: Event}) => unknown;
  onDayFocus: (a: {date: Date; event: Event}) => unknown;
  onDayMouseOver: (a: {date: Date; event: Event}) => unknown;
  onDayMouseLeave: (a: {date: Date; event: Event}) => unknown;
  onChange?: onChangeT;
  overrides?: DatepickerOverridesT<{}>;
  peekNextMonth: boolean;
  value: Date | undefined | null | Array<Date>;
};

export type MonthPropsT = WeekPropsT;

export type CalendarInternalState = {
  highlightedDate: Date;
  focused: boolean;
  date: Date;
  quickSelectId: string | undefined | null;
};

export type CalendarPropsT = {
  /** Defines if the calendar is set to be focused on an initial render. */
  autoFocusCalendar?: boolean;
  /** A list of dates to disable. */
  excludeDates?: Array<Date> | null;
  /** Display select for quickly choosing date ranges. `range` must be true as well. */
  quickSelect?: boolean;
  /** Array of custom options displayed in the quick select. Overrides default options if provided. */
  quickSelectOptions?: Array<{
    id: string;
    beginDate: Date;
  }>;
  /** A filter function that is called to check the disabled state of a day. If `false` is returned the day is considered to be disabled. */
  filterDate?: ((day: Date) => boolean) | null;
  /** Indicates a highlighted date on hover and keyboard navigation */
  highlightedDate?: Date | null;
  /** A list of selectable dates. */
  includeDates?: Array<Date> | null;
  /** Defines if a range of dates can be selected. */
  range?: boolean;
  /** A locale object. See `date-fns` for more details https://github.com/date-fns/date-fns/tree/master/src/locale. */
  locale?: LocaleT | null;
  /** A max date that is selectable. */
  maxDate?: Date | null;
  /** A min date that is selectable. */
  minDate?: Date | null;
  /** A number of months rendered in the calendar. */
  monthsShown?: number;
  /** Day's `click` event handler. */
  onDayClick?: (a: {date: Date; event: Event}) => unknown;
  /** Day's `mouseover` event handler. */
  onDayMouseOver?: (a: {date: Date; event: Event}) => unknown;
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave?: (a: {date: Date; event: Event}) => unknown;
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange?: (a: {date: Date}) => unknown;
  /** Event handler that is called when the current rendered month's year is changed. */
  onYearChange?: (a: {date: Date}) => unknown;
  /** Event handler that is called when a new date is selected. */
  onChange?: onChangeT;
  /** Sets the orientation of the calendar when multiple months are displayed */
  orientation?: typeof ORIENTATION[keyof typeof ORIENTATION];
  overrides?: DatepickerOverridesT<{}>;
  /** Defines if dates outside of the range of the current month are displayed. */
  peekNextMonth?: boolean;
  /** Determines if `TimePicker` component will be enabled for start time */
  timeSelectStart?: boolean;
  /** Determines if `TimePicker` component will be enabled for end time */
  timeSelectEnd?: boolean;
  /** Defines if tabbing inside the calendar is circled within it. */
  trapTabbing?: boolean;
  /** Currently selected date. */
  value?: Date | undefined | null | Array<Date>;
};

export type HeaderPropsT = CalendarPropsT & {
  date: Date;
  order: number;
};

export type DatepickerPropsT = CalendarPropsT & {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string | null;
  disabled?: boolean;
  /** Renders UI in 'error' state. */
  error?: boolean;
  positive?: boolean;
  placeholder?: string;
  required?: boolean;
  formatDisplayValue?: (
    date: Date | undefined | null | Array<Date>,
    formatString: string,
  ) => string;
  formatString?: string;
  /** Where to mount the popover */
  mountNode?: HTMLElement;
  /** Called when calendar is closed */
  onClose?: () => unknown;
  mask?: string;
};

export type SharedStylePropsT = {
  $date: Date;
  $disabled: boolean;
  $isHeader: boolean;
  $isHighlighted: boolean;
  $isHovered: boolean;
  $outsideMonth: boolean;
  $pseudoHighlighted: boolean;
  $pseudoSelected: boolean;
  $selected: boolean;
  $startDate: boolean;
  $range: boolean;
  $hasRangeHighlighted: boolean;
  $hasRangeOnRight: boolean;
  $hasRangeSelected: boolean;
};

export type StateChangeTypeT =
  | typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE]
  | undefined
  | null;

export type ContainerStateT = {
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: Date | undefined | null | Array<Date>;
};

export type NavigationContainerStateT = {
  // indicates a highlighted date on hover and keyboard navigation
  highlightedDate?: Date | null;
  // used to disable keyboard navigation when a month or year select
  // dropdown is opened
  isActive?: boolean;
  // last remembered highlighted date to restore
  // when keyboard navigating after a mouse moved off the cal and reset
  // highlightedDate value
  lastHighlightedDate?: Date;
};

export type StateReducerT = (
  stateType: StateChangeTypeT,
  nextState: ContainerStateT,
  currentState: ContainerStateT,
) => ContainerStateT;

export type NavigationContainerStateReducerT = (
  stateType: StateChangeTypeT,
  nextState: NavigationContainerStateT,
  currentState: NavigationContainerStateT,
) => NavigationContainerStateT;

export type StatefulContainerPropsT<T> = {
  children: (a: T) => React.ReactNode;
  /** Initial state of an uncontrolled datepicker component. */
  initialState: ContainerStateT;
  /** A state change handler. */
  stateReducer: StateReducerT;
  /** Event handler that is called when a date/time is selected. */
  onChange?: onChangeT;
  /** Should the date value be stored as an array or single value. */
  range?: boolean;
};

export type NavigationContainerPropsT = {
  children: (a: CalendarPropsT) => React.ReactNode;
  range?: boolean;
  highlightedDate?: Date | null;
  /** Day's `mouseover` event handler. */
  onDayMouseOver: (params: {date: Date; event: Event}) => unknown;
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave: (params: {date: Date; event: Event}) => unknown;
  /** Event handler that is called when a new date is selected. */
  onChange: onChangeT;
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange?: (a: {date: Date}) => unknown;
  /** Event handler that is called when the current rendered year is changed. */
  onYearChange?: (a: {date: Date}) => unknown;
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: Date | undefined | null | Array<Date>;
  stateReducer: NavigationContainerStateReducerT;
  trapTabbing: boolean;
};

export type StatefulDatepickerPropsT<T> = Omit<
  StatefulContainerPropsT<T>,
  'children'
>;

export type TimePickerPropsT = {
  /** Render options in AM/PM format or 24 hour format. Defaults to 12 hour. */
  format?: '12' | '24';
  /** Callback for when time selection changes. */
  onChange?: (a: Date) => unknown;
  overrides?: {
    Select?: OverrideT<any>;
  };
  /** Set to true to allow times that aren't displayed in the options list to be entered manually. Defaults to false. */
  creatable?: boolean;
  /** Amount of seconds between each option time. Defaults to 900 (15 minutes). */
  step?: number;
  /**
   * Optional value that can be provided to fully control the component. If not provided, TimePicker
   * will manage state internally and default to the closest step to new Date().
   */
  value?: Date | null;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
};
export type TimePickerStateT = {
  /** List of times (in seconds) displayed in the dropdown menu. */
  steps: number[];
  /** Internal value of the selected time as an integer since midnight (0) */
  value: OptionT | undefined | null;
};

export type TimezonePickerStateT = {
  /** List of timezones from the IANA database. */
  timezones: OptionT[];
  /** Value provided to the select component. */
  value: string | undefined | null;
};
export type TimezonePickerPropsT = {
  /**
   * If not provided, defaults to new Date(). Important to note that the timezone picker only
   * displays options related to the provided date. Take Pacific Time for example. On March 9th,
   * Pacific Time equates to the more specific Pacific Standard Time. On March 10th, it operates on
   * Pacific Daylight Time. The timezone picker will never display PST and PDT together. If you need
   * exact specificity, provide a date. Otherwise it will default to the relevant timezone at render.
   */
  date?: Date;
  /**
   * Customize the option's label. Useful for translations and optionally mapping from
   * 'America/Los_Angeles' to 'Pacific Time'.
   */
  mapLabels?: (a: OptionT) => React.ReactNode;
  /** Callback for when the timezone selection changes. */
  onChange?: (value?: {id: string; label: string; offset: number}) => unknown;
  overrides?: {
    Select?: OverrideT<any>;
  };
  /**
   * Optional value that can be provided to fully control the component. If not provided,
   * TimezonePicker will manage state internally.
   */
  value?: string | null;
  disabled?: boolean;
  error?: boolean;
  positive?: boolean;
};
