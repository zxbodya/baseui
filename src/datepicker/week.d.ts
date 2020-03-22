import * as React from 'react';
import type { WeekPropsT } from './types';
export default class Week extends React.Component<WeekPropsT> {
    static defaultProps: {
        date: Date;
        highlightedDate: any;
        onDayClick: () => void;
        onDayFocus: () => void;
        onDayBlur: () => void;
        onDayMouseOver: () => void;
        onDayMouseLeave: () => void;
        onChange: () => void;
        overrides: {};
        peekNextMonth: boolean;
    };
    renderDays: () => any[];
    render(): JSX.Element;
}
