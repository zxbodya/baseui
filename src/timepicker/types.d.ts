import type { OverrideT } from '../helpers/overrides';
import type { OptionT } from '../select/index';
import type { SizeT } from '../input/types';
export declare type TimePickerPropsT = {
    /** Render options in AM/PM format or 24 hour format. Defaults to 12 hour. */
    format?: '12' | '24';
    /** Callback for when time selection changes. */
    onChange?: (a: Date) => unknown;
    overrides?: {
        Select?: OverrideT<any>;
    };
    /** Set to true to allow times that aren't displayed in the options list to be entered manually. Defaults to false. */
    creatable?: boolean;
    /** Amount of seconds between each option time. Defaults to 900 (15 minutes). */
    step?: number;
    /**
     * Optional value that can be provided to fully control the component. If not provided, TimePicker
     * will manage state internally and default to the closest step to new Date().
     */
    value?: Date | null;
    disabled?: boolean;
    error?: boolean;
    positive?: boolean;
    nullable?: boolean;
    placeholder?: string;
    size?: SizeT;
};
export declare type TimePickerStateT = {
    /** List of times (in seconds) displayed in the dropdown menu. */
    steps: number[];
    /** Internal value of the selected time as an integer since midnight (0) */
    value: OptionT | undefined | null;
};
