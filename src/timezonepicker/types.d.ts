import type { OverrideT } from '../helpers/overrides';
import type { OptionT } from '../select/index';
import type { SizeT } from '../input/types';
export declare type TimezonePickerStateT = {
    /** List of timezones from the IANA database. */
    timezones: OptionT[];
    /** Value provided to the select component. */
    value: string | undefined | null;
};
export declare type TimezoneT = {
    id: string;
    label: string;
    offset: number;
};
export declare type TimezonePickerPropsT = {
    /**
     * If not provided, defaults to new Date(). Important to note that the timezone picker only
     * displays options related to the provided date. Take Pacific Time for example. On March 9th,
     * Pacific Time equates to the more specific Pacific Standard Time. On March 10th, it operates on
     * Pacific Daylight Time. The timezone picker will never display PST and PDT together. If you need
     * exact specificity, provide a date. Otherwise it will default to the relevant timezone at render.
     */
    date?: Date;
    /**
     * Customize the option's label. Useful for translations and optionally mapping from
     * 'America/Los_Angeles' to 'Pacific Time'.
     */
    mapLabels?: (a: OptionT) => string;
    /** Callback for when the timezone selection changes. */
    onChange?: (value?: TimezoneT | null) => unknown;
    overrides?: {
        Select?: OverrideT<any>;
    };
    /**
     * Optional value that can be provided to fully control the component. If not provided,
     * TimezonePicker will manage state internally.
     */
    value?: string | null;
    disabled?: boolean;
    error?: boolean;
    positive?: boolean;
    size?: SizeT;
};
