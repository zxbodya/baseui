import * as React from 'react';
import type { DatepickerPropsT } from './types';
declare type StateT = {
    calendarFocused: boolean;
    isOpen: boolean;
    isPseudoFocused: boolean;
    lastActiveElm: HTMLElement | undefined | null;
    inputValue?: string;
    isInputUsed?: boolean;
};
export default class Datepicker extends React.Component<DatepickerPropsT, StateT> {
    static defaultProps: {
        'aria-describedby': string;
        value: any;
    };
    calendar: HTMLElement | undefined | null;
    state: StateT;
    onChange: (data: {
        date: Date | Date[];
    }) => void;
    formatDate(date: Date | undefined | null | Array<Date>, formatString: string): any;
    formatDisplayValue(date: Date | undefined | null | Array<Date>): any;
    open: () => void;
    close: () => void;
    handleEsc: () => void;
    handleInputBlur: () => void;
    getMask: () => string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    focusCalendar: () => void;
    normalizeDashes: (inputValue: string) => string;
    componentDidUpdate(prevProps: DatepickerPropsT): void;
    render(): JSX.Element;
}
export {};
