import * as React from 'react';
import { filterOptions } from '../select/index';
import type { OnChangeParamsT } from '../select/index';
import type { TimePickerPropsT, TimePickerStateT } from './types';
export declare function secondsToHourMinute(seconds: number): number[];
declare class TimePicker extends React.Component<TimePickerPropsT, TimePickerStateT> {
    static defaultProps: {
        format: string;
        step: number;
        creatable: boolean;
    };
    state: {
        steps: any[];
        value: any;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: TimePickerPropsT): void;
    onChange: (params: OnChangeParamsT) => void;
    handleChange: (seconds: number) => void;
    buildSteps: () => any[];
    creatableFilterOptions: typeof filterOptions;
    buildSelectedOption(value: Date, format?: '12' | '24'): {
        id: number;
        label: string;
    };
    render(): JSX.Element;
}
export default TimePicker;
