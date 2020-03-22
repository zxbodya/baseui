import * as React from 'react';
import type { CalendarPropsT, CalendarInternalState } from './types';
export default class Calendar extends React.Component<CalendarPropsT, CalendarInternalState> {
    static defaultProps: {
        autoFocusCalendar: boolean;
        excludeDates: any;
        filterDate: any;
        highlightedDate: any;
        includeDates: any;
        range: boolean;
        locale: any;
        maxDate: any;
        minDate: any;
        onDayClick: () => void;
        onDayFocus: () => void;
        onDayMouseOver: () => void;
        onDayMouseLeave: () => void;
        onMonthChange: () => void;
        onYearChange: () => void;
        onChange: () => void;
        orientation: "vertical";
        overrides: {};
        peekNextMonth: boolean;
        value: any;
        trapTabbing: boolean;
    };
    calendar: any;
    constructor(props: CalendarPropsT);
    componentDidMount(): void;
    componentDidUpdate(prevProps: CalendarPropsT): void;
    isInView(date: Date): boolean;
    getSingleDate(value: Date | undefined | null | Array<Date>): Date | undefined | null;
    getDateInView: () => Date;
    handleMonthChange: (date: Date) => void;
    handleYearChange: (date: Date) => void;
    changeMonth: ({ date }: {
        date: Date;
    }) => void;
    changeYear: ({ date }: {
        date: Date;
    }) => void;
    renderCalendarHeader: (date: Date, order: number) => JSX.Element;
    onKeyDown: (event: KeyboardEvent) => void;
    handleArrowKey: (key: string) => void;
    focusCalendar: () => void;
    blurCalendar: () => void;
    handleTabbing: (event: KeyboardEvent) => void;
    onDayFocus: (data: {
        event: Event;
        date: Date;
    }) => void;
    onDayMouseOver: (data: {
        event: Event;
        date: Date;
    }) => void;
    onDayMouseLeave: (data: {
        event: Event;
        date: Date;
    }) => void;
    handleDateChange: (data: {
        date: Date | Date[];
    }) => void;
    handleTimeChange: (time: Date, index: number) => void;
    setHighlightedDate(date: Date): void;
    renderMonths: (translations: {
        ariaRoleDescCalMonth: string;
    }) => JSX.Element;
    renderTimeSelect: (value: Date, onChange: Function, label: string) => JSX.Element;
    renderQuickSelect: () => JSX.Element;
    render(): JSX.Element;
}
