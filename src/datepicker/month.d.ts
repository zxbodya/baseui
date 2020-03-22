import * as React from 'react';
import type { MonthPropsT } from './types';
export default class CalendarMonth extends React.Component<MonthPropsT> {
    static defaultProps: {
        date: Date;
        excludeDates: any;
        filterDate: any;
        highlightDates: any;
        includeDates: any;
        locale: any;
        maxDate: any;
        minDate: any;
        month: any;
        onDayClick: () => void;
        onDayFocus: () => void;
        onDayBlur: () => void;
        onDayMouseOver: () => void;
        onDayMouseLeave: () => void;
        overrides: {};
        peekNextMonth: boolean;
        value: any;
    };
    isWeekInMonth: (startOfWeek: Date) => boolean;
    renderWeeks: () => any[];
    render(): JSX.Element;
}
