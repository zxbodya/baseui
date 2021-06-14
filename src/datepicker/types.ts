/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';
import type {OverrideT} from '../helpers/overrides';
import type {SizeT} from '../input/types';
import {ORIENTATION, STATE_CHANGE_TYPE} from './constants';
import type {DateIOAdapter} from './utils/types';
import type {
  TimePickerPropsT as TimePickerPropsTBase,
  TimePickerStateT as TimePickerStateTBase,
} from '../timepicker/types';

import type {OptionT} from '../select/index';

// eslint-disable-next-line flowtype/no-weak-types
type LocaleT = any; // see https://github.com/date-fns/date-fns/blob/master/src/locale/index.js.flow

type onChangeT<T> = (a: {date: T | undefined | null | Array<T>}) => unknown;

export type DatepickerOverridesT = {
  Root?: OverrideT;
  /** Override for reused Select component. QuickSelect is **not a styled  element** but a react component that can be replaced */
  QuickSelect?: OverrideT;
  QuickSelectContainer?: OverrideT;
  /** Override for reused Select component. QuickSelectFormControl is **not a styled  element** but a react component that can be replaced */
  QuickSelectFormControl?: OverrideT;
  /** Override for reused TimePicker component. TimeSelect is **not a styled  element** but a react component that can be replaced */
  TimeSelect?: OverrideT;
  TimeSelectContainer?: OverrideT;
  /** Override for reused Select component. TimeSelectFormControl is **not a styled  element** but a react component that can be replaced */
  TimeSelectFormControl?: OverrideT;
  CalendarContainer?: OverrideT;
  CalendarHeader?: OverrideT;
  PrevButton?: OverrideT;
  PrevButtonIcon?: OverrideT;
  NextButton?: OverrideT;
  NextButtonIcon?: OverrideT;
  MonthContainer?: OverrideT;
  MonthHeader?: OverrideT;
  MonthYearSelectButton?: OverrideT;
  MonthYearSelectIconContainer?: OverrideT;
  MonthYearSelectPopover?: OverrideT;
  MonthYearSelectStatefulMenu?: OverrideT;
  WeekdayHeader?: OverrideT;
  Month?: OverrideT;
  Week?: OverrideT;
  Day?: OverrideT;
  DayLabel?: OverrideT;
  /** Override for reused Input component. Input is **not a styled  element** but a react component that can be replaced */
  Input?: OverrideT;
  InputWrapper?: OverrideT;
  /** Override for reused Popover component. Popover is **not a styled  element** but a react component that can be replaced */
  Popover?: OverrideT;
};

export type DayPropsT<T = Date> = {
  disabled: boolean;
  date: T;
  dateLabel: ((day: T) => React.ReactNode) | undefined | null;
  filterDate: ((day: T) => boolean) | undefined | null;
  highlightedDate: T | undefined | null;
  includeDates: Array<T> | undefined | null;
  highlighted: boolean;
  range: boolean;
  focusedCalendar: boolean;
  locale: LocaleT | undefined | null;
  maxDate: T | undefined | null;
  adapter: DateIOAdapter<T>;
  minDate: T | undefined | null;
  month: number | undefined | null;
  onBlur: (a: {event: Event; date: T}) => unknown;
  onFocus: (a: {event: Event; date: T}) => unknown;
  onSelect: (a: {date: T | undefined | null | Array<T>}) => unknown;
  onClick: (a: {event: Event; date: T}) => unknown;
  onMouseOver: (a: {event: Event; date: T}) => unknown;
  onMouseLeave: (a: {event: Event; date: T}) => unknown;
  overrides?: DatepickerOverridesT;
  peekNextMonth: boolean;
  value: T | undefined | null | Array<T>;
};

export type DayStateT = {
  isHovered: boolean;
  isFocusVisible: boolean;
};

export type WeekPropsT<T = Date> = {
  date: T;
  dateLabel: ((date: T) => React.ReactNode) | undefined | null;
  excludeDates: Array<T> | undefined | null;
  filterDate: ((day: T) => boolean) | undefined | null;
  // highlighted while keyboard navigating or hovered
  highlightedDate: T | undefined | null;
  includeDates: Array<T> | undefined | null;
  focusedCalendar: boolean;
  range?: boolean;
  locale: LocaleT | undefined | null;
  maxDate: T | undefined | null;
  minDate: T | undefined | null;
  adapter: DateIOAdapter<T>;
  month: number | undefined | null;
  onDayBlur: (a: {date: T; event: Event}) => unknown;
  onDayClick: (a: {date: T; event: Event}) => unknown;
  onDayFocus: (a: {date: T; event: Event}) => unknown;
  onDayMouseOver: (a: {date: T; event: Event}) => unknown;
  onDayMouseLeave: (a: {date: T; event: Event}) => unknown;
  onChange?: onChangeT<T>;
  overrides?: DatepickerOverridesT;
  peekNextMonth: boolean;
  value: T | undefined | null | Array<T>;
};

export type MonthPropsT<T = Date> = WeekPropsT<T>;

export type CalendarInternalState<T = Date> = {
  highlightedDate: T;
  focused: boolean;
  date: T;
  quickSelectId: string | undefined | null;
  rootElement: HTMLElement | undefined | null;
  time: Array<T>;
};

export type CalendarPropsT<T = Date> = {
  /** Defines if the calendar is set to be focused on an initial render. */
  autoFocusCalendar?: boolean;
  /** A list of dates to disable. */
  excludeDates?: Array<T> | null;
  /** Display select for quickly choosing date ranges. `range` must be true as well. */
  quickSelect?: boolean;
  /** Array of custom options displayed in the quick select. Overrides default options if provided. */
  quickSelectOptions?: Array<{
    id: string;
    beginDate: T;
    endDate?: T;
  }>;
  /** A filter function that is called to check the disabled state of a day. If `false` is returned the day is considered to be disabled. */
  filterDate?: ((day: T) => boolean) | null;
  /** A function that is called with the current date to render the label text under that day on the calendar. */
  dateLabel?: ((day: T) => React.ReactNode) | null;
  /** Indicates a highlighted date on hover and keyboard navigation */
  highlightedDate?: T | null;
  /** A list of selectable dates. */
  includeDates?: Array<T> | null;
  /** Defines if a range of dates can be selected. */
  range?: boolean;
  /** A locale object. See `date-fns` for more details https://github.com/date-fns/date-fns/tree/master/src/locale. */
  locale?: LocaleT | null;
  /** A max date that is selectable. */
  maxDate?: T | null;
  /** A min date that is selectable. */
  minDate?: T | null;
  adapter: DateIOAdapter<T>;
  /** A number of months rendered in the calendar. */
  monthsShown?: number;
  /** Day's `click` event handler. */
  onDayClick?: (a: {date: T; event: Event}) => unknown;
  /** Day's `focus` event handler. */
  onDayFocus?: (a: {date: T; event: Event}) => unknown;
  /** Day's `mouseover` event handler. */
  onDayMouseOver?: (a: {date: T; event: Event}) => unknown;
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave?: (a: {date: T; event: Event}) => unknown;
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange?: (a: {date: T}) => unknown;
  /** Event handler that is called when the current rendered month's year is changed. */
  onYearChange?: (a: {date: T}) => unknown;
  /** Event handler that is called when a new date is selected. */
  onChange?: onChangeT<T>;
  /** Sets the orientation of the calendar when multiple months are displayed */
  orientation?: typeof ORIENTATION[keyof typeof ORIENTATION];
  overrides?: DatepickerOverridesT;
  /** Defines if dates outside of the range of the current month are displayed. */
  peekNextMonth?: boolean;
  /** Determines if `TimePicker` component will be enabled for start time */
  timeSelectStart?: boolean;
  /** Determines if `TimePicker` component will be enabled for end time */
  timeSelectEnd?: boolean;
  /** Defines if tabbing inside the calendar is circled within it. */
  trapTabbing?: boolean;
  /** Currently selected date. */
  value?: T | undefined | null | Array<T>;
};

export type HeaderPropsT<T = Date> = CalendarPropsT<T> & {
  date: T;
  order: number;
};

export type DatepickerPropsT<T = Date> = CalendarPropsT<T> & {
  'aria-label'?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string | null;
  disabled?: boolean;
  size?: SizeT;
  /** Renders UI in 'error' state. */
  error?: boolean;
  positive?: boolean;
  placeholder?: string;
  required?: boolean;
  clearable?: boolean;
  displayValueAtRangeIndex?: number;
  formatDisplayValue?: (
    date: T | undefined | null | Array<T>,
    formatString: string,
  ) => string;
  formatString: string;
  /** Where to mount the popover */
  mountNode?: HTMLElement;
  /** Called when calendar is closed */
  onClose?: () => unknown;
  mask?: string | null;
};

export type SharedStylePropsT = {
  // eslint-disable-next-line flowtype/no-weak-types
  $date: any;
  $disabled: boolean | undefined | null;
  $endDate: boolean | undefined | null;
  $endOfMonth: boolean | undefined | null;
  $isHighlighted: boolean | undefined | null;
  $isHovered: boolean | undefined | null;
  $isFocusVisible: boolean | undefined | null;
  $outsideMonth: boolean | undefined | null;
  $outsideMonthWithinRange: boolean | undefined | null;
  $peekNextMonth: boolean | undefined | null;
  $pseudoHighlighted: boolean | undefined | null;
  $pseudoSelected: boolean | undefined | null;
  $selected: boolean | undefined | null;
  $startDate: boolean | undefined | null;
  $startOfMonth: boolean | undefined | null;
  $range: boolean | undefined | null;
  $hasRangeHighlighted: boolean | undefined | null;
  $hasRangeOnRight: boolean | undefined | null;
  $hasRangeSelected: boolean | undefined | null;
  $order: number | undefined | null;
  $hasDateLabel: boolean | undefined | null;
};

export type StateChangeTypeT =
  | typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE]
  | undefined
  | null;

export type ContainerStateT<T = Date> = {
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: T | undefined | null | Array<T>;
};

export type NavigationContainerStateT<T = Date> = {
  // indicates a highlighted date on hover and keyboard navigation
  highlightedDate?: T | null;
  // used to disable keyboard navigation when a month or year select
  // dropdown is opened
  isActive?: boolean;
  // last remembered highlighted date to restore
  // when keyboard navigating after a mouse moved off the cal and reset
  // highlightedDate value
  lastHighlightedDate?: T;
};

export type StateReducerT<T = Date> = (
  stateType: StateChangeTypeT,
  nextState: ContainerStateT<T>,
  currentState: ContainerStateT<T>,
) => ContainerStateT<T>;

export type NavigationContainerStateReducerT<T = Date> = (
  stateType: StateChangeTypeT,
  nextState: NavigationContainerStateT<T>,
  currentState: NavigationContainerStateT<T>,
) => NavigationContainerStateT<T>;

export type StatefulContainerPropsT<PropsT, T = Date> = {
  children: (a: PropsT) => React.ReactNode;
  /** Initial state of an uncontrolled datepicker component. */
  initialState: ContainerStateT<T>;
  /** A state change handler. */
  stateReducer: StateReducerT<T>;
  /** Event handler that is called when a date/time is selected. */
  onChange?: onChangeT<T>;
  adapter?: DateIOAdapter<T>;
  /** Should the date value be stored as an array or single value. */
  range?: boolean;
};

// This type is seemingly not used anywhere
export type NavigationContainerPropsT<T = Date> = {
  children: (a: CalendarPropsT<T>) => React.ReactNode;
  range?: boolean;
  highlightedDate?: Date | null;
  /** Day's `mouseover` event handler. */
  onDayMouseOver: (params: {date: Date; event: Event}) => unknown;
  /** Day's `mouseleave` event handler. */
  onDayMouseLeave: (params: {date: Date; event: Event}) => unknown;
  /** Event handler that is called when a new date is selected. */
  onChange: onChangeT<T>;
  /** Event handler that is called when the current rendered month is changed. */
  onMonthChange?: (a: {date: T}) => unknown;
  /** Event handler that is called when the current rendered year is changed. */
  onYearChange?: (a: {date: T}) => unknown;
  /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
  value?: T | undefined | null | Array<T>;
  stateReducer: NavigationContainerStateReducerT<T>;
  trapTabbing: boolean;
};

export type StatefulDatepickerPropsT<PropsT, T = Date> = Omit<
  StatefulContainerPropsT<PropsT, T>,
  'children'
>;

export type TimePickerPropsT<T = Date> = TimePickerPropsTBase<T>;
export type TimePickerStateT = TimePickerStateTBase;

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
  onChange?: (
    value?: {
      id: string;
      label: string;
      offset: number;
    } | null,
  ) => unknown;
  overrides?: {
    Select?: OverrideT;
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
