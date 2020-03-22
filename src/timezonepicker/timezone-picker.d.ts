import * as React from 'react';
import type { TimezonePickerPropsT, TimezonePickerStateT } from './types';
declare class TimezonePicker extends React.Component<TimezonePickerPropsT, TimezonePickerStateT> {
    state: TimezonePickerStateT;
    componentDidMount(): void;
    componentDidUpdate(prevProps: TimezonePickerPropsT): void;
    buildTimezones: (compareDate: Date) => {
        offset: number;
        id: string;
        label: string;
    }[];
    render(): JSX.Element;
}
export default TimezonePicker;
