import * as React from 'react';
import type { HeaderPropsT } from './types';
import type { LocaleT } from '../locale/types';
import type { ThemeT } from '../styles/types';
export default class CalendarHeader extends React.Component<HeaderPropsT, {
    isMonthYearDropdownOpen: boolean;
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        date: Date;
        locale: any;
        maxDate: any;
        minDate: any;
        onYearChange: () => void;
        overrides: {};
    };
    state: {
        isMonthYearDropdownOpen: boolean;
        isFocusVisible: boolean;
    };
    handleMonthChange: ({ value, }: {
        value: {
            id: number;
        }[];
    }) => void;
    handleYearChange: ({ value, }: {
        value: {
            id: number;
        }[];
    }) => void;
    increaseMonth: () => void;
    decreaseMonth: () => void;
    isMultiMonthHorizontal: () => boolean;
    isHiddenPaginationButton: (direction: "next" | "previous") => boolean;
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    renderPreviousMonthButton: ({ locale, theme, }: {
        locale: LocaleT;
        theme: ThemeT;
    }) => JSX.Element;
    renderNextMonthButton: ({ locale, theme, }: {
        locale: LocaleT;
        theme: ThemeT;
    }) => JSX.Element;
    canArrowsOpenDropdown: (event: KeyboardEvent) => boolean;
    renderMonthYearDropdown: () => JSX.Element;
    render(): JSX.Element;
}
