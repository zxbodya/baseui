/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import CalendarMultiMonthScenario from './calendar-multi-month.scenario';
import CalendarTimeSelectScenario from './calendar-time-select.scenario';
import CalendarScenario from './calendar.scenario';
import DatepickerI18nChinese from './datepicker-i18n-chinese.scenario';
import DatepickerIntRange from './datepicker-int-range.scenario';
import DatepickerInt from './datepicker-int.scenario';
import DatepickerMask from './datepicker-mask.scenario';
import DatepickerRangeHighlight from './datepicker-range-highlight.scenario';
import DatepickerRangeMultiMonth from './datepicker-range-multi-month.scenario';
import DatepickerRange from './datepicker-range.scenario';
import DatepickerDefault from './datepicker.scenario';
import DatepickersColorStates from './datepickers-color-states.scenario';
import DatepickersComposedRange from './datepickers-composed-range.scenario';
import DatepickersComposedSingle from './datepickers-composed-single.scenario';
import StatefulCalendarOverridesScenario from './stateful-calendar-overrides.scenario';
import StatefulCalendarScenario from './stateful-calendar.scenario';
import StatefulDatepickerMinMaxDate from './stateful-datepicker-min-max-date.scenario';
import StatefulDatepickerQuickSelect from './stateful-datepicker-quick-select.scenario';
import StatefulDatepicker from './stateful-datepicker.scenario';
import StatefulRangeDatepicker from './stateful-range-datepicker.scenario';
import StatefulRangeQuickSelectScenario from './stateful-range-quick-select.scenario';

export const CalendarMultiMonth = () => <CalendarMultiMonthScenario />;
export const CalendarTimeSelect = () => <CalendarTimeSelectScenario />;
export const Calendar = () => <CalendarScenario />;
export const I18nChinese = () => <DatepickerI18nChinese />;
export const IntRange = () => <DatepickerIntRange />;
export const Int = () => <DatepickerInt />;
export const Mask = () => <DatepickerMask />;
export const RangeHighlight = () => <DatepickerRangeHighlight />;
export const RangeMultiMonth = () => <DatepickerRangeMultiMonth />;
export const Range = () => <DatepickerRange />;
export const Datepicker = () => <DatepickerDefault />;
export const StatefulColorStates = () => <DatepickersColorStates />;
export const StatefulComposedRange = () => <DatepickersComposedRange />;
export const StatefulComposedSingle = () => <DatepickersComposedSingle />;
export const StatefulCalendarOverrides = () => (
  <StatefulCalendarOverridesScenario />
);
export const StatefulCalendar = () => <StatefulCalendarScenario />;
export const StatefulMinMaxDate = () => <StatefulDatepickerMinMaxDate />;
export const StatefulQuickSelect = () => <StatefulDatepickerQuickSelect />;
export const Stateful = () => <StatefulDatepicker />;
export const StatefulRange = () => <StatefulRangeDatepicker />;
export const StatefulRangeQuickSelect = () => (
  <StatefulRangeQuickSelectScenario />
);
