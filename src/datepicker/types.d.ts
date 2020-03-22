import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import type { SizeT } from '../input/types';
import { ORIENTATION, STATE_CHANGE_TYPE } from './constants';
declare type LocaleT = any;
declare type onChangeT = (a: {
    date: Date | undefined | null | Array<Date>;
}) => unknown;
export declare type DatepickerOverridesT<T> = {
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
    InputWrapper?: OverrideT<T>;
    /** Override for reused Popover component. Popover is **not a styled  element** but a react component that can be replaced */
    Popover?: OverrideT<T>;
};
export declare type DayPropsT = {
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
    onBlur: (a: {
        event: Event;
        date: Date;
    }) => unknown;
    onFocus: (a: {
        event: Event;
        date: Date;
    }) => unknown;
    onSelect: (a: {
        date: Date | undefined | null | Array<Date>;
    }) => unknown;
    onClick: (a: {
        event: Event;
        date: Date;
    }) => unknown;
    onMouseOver: (a: {
        event: Event;
        date: Date;
    }) => unknown;
    onMouseLeave: (a: {
        event: Event;
        date: Date;
    }) => unknown;
    overrides?: DatepickerOverridesT<{}>;
    peekNextMonth: boolean;
    value: Date | undefined | null | Array<Date>;
};
export declare type DayStateT = {
    isHovered: boolean;
    isFocusVisible: boolean;
};
export declare type WeekPropsT = {
    date: Date;
    excludeDates: Array<Date> | undefined | null;
    filterDate: ((day: Date) => boolean) | undefined | null;
    highlightedDate: Date | undefined | null;
    includeDates: Array<Date> | undefined | null;
    focusedCalendar: boolean;
    range?: boolean;
    locale: LocaleT | undefined | null;
    maxDate: Date | undefined | null;
    minDate: Date | undefined | null;
    month: number | undefined | null;
    onDayBlur: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    onDayClick: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    onDayFocus: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    onDayMouseOver: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    onDayMouseLeave: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    onChange?: onChangeT;
    overrides?: DatepickerOverridesT<{}>;
    peekNextMonth: boolean;
    value: Date | undefined | null | Array<Date>;
};
export declare type MonthPropsT = WeekPropsT;
export declare type CalendarInternalState = {
    highlightedDate: Date;
    focused: boolean;
    date: Date;
    quickSelectId: string | undefined | null;
    rootElement: HTMLElement | undefined | null;
};
export declare type CalendarPropsT = {
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
        endDate?: Date;
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
    onDayClick?: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Day's `focus` event handler. */
    onDayFocus?: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Day's `mouseover` event handler. */
    onDayMouseOver?: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Day's `mouseleave` event handler. */
    onDayMouseLeave?: (a: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Event handler that is called when the current rendered month is changed. */
    onMonthChange?: (a: {
        date: Date;
    }) => unknown;
    /** Event handler that is called when the current rendered month's year is changed. */
    onYearChange?: (a: {
        date: Date;
    }) => unknown;
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
export declare type HeaderPropsT = CalendarPropsT & {
    date: Date;
    order: number;
};
export declare type DatepickerPropsT = CalendarPropsT & {
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
    formatDisplayValue?: (date: Date | undefined | null | Array<Date>, formatString: string) => string;
    formatString?: string;
    /** Where to mount the popover */
    mountNode?: HTMLElement;
    /** Called when calendar is closed */
    onClose?: () => unknown;
    mask?: string | null;
};
export declare type SharedStylePropsT = {
    $date: Date;
    $disabled: boolean | undefined | null;
    $endDate: boolean | undefined | null;
    $endOfMonth: boolean | undefined | null;
    $isHighlighted: boolean | undefined | null;
    $isHovered: boolean | undefined | null;
    $isFocusVisible: boolean | undefined | null;
    $outsideMonth: boolean | undefined | null;
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
};
export declare type StateChangeTypeT = typeof STATE_CHANGE_TYPE[keyof typeof STATE_CHANGE_TYPE] | undefined | null;
export declare type ContainerStateT = {
    /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
    value?: Date | undefined | null | Array<Date>;
};
export declare type NavigationContainerStateT = {
    highlightedDate?: Date | null;
    isActive?: boolean;
    lastHighlightedDate?: Date;
};
export declare type StateReducerT = (stateType: StateChangeTypeT, nextState: ContainerStateT, currentState: ContainerStateT) => ContainerStateT;
export declare type NavigationContainerStateReducerT = (stateType: StateChangeTypeT, nextState: NavigationContainerStateT, currentState: NavigationContainerStateT) => NavigationContainerStateT;
export declare type StatefulContainerPropsT<T> = {
    children: (a: T) => React.ReactNode;
    /** Initial state of an uncontrolled datepicker component. */
    initialState?: ContainerStateT;
    /** A state change handler. */
    stateReducer?: StateReducerT;
    /** Event handler that is called when a date/time is selected. */
    onChange?: onChangeT;
    /** Should the date value be stored as an array or single value. */
    range?: boolean;
};
export declare type NavigationContainerPropsT = {
    children: (a: CalendarPropsT) => React.ReactNode;
    range?: boolean;
    highlightedDate?: Date | null;
    /** Day's `mouseover` event handler. */
    onDayMouseOver: (params: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Day's `mouseleave` event handler. */
    onDayMouseLeave: (params: {
        date: Date;
        event: Event;
    }) => unknown;
    /** Event handler that is called when a new date is selected. */
    onChange: onChangeT;
    /** Event handler that is called when the current rendered month is changed. */
    onMonthChange?: (a: {
        date: Date;
    }) => unknown;
    /** Event handler that is called when the current rendered year is changed. */
    onYearChange?: (a: {
        date: Date;
    }) => unknown;
    /** Selected `Date`. If `range` is set, `value` is an array of 2 values. */
    value?: Date | undefined | null | Array<Date>;
    stateReducer: NavigationContainerStateReducerT;
    trapTabbing: boolean;
};
export declare type StatefulDatepickerPropsT<T> = Omit<StatefulContainerPropsT<T>, 'children'>;
export {};
