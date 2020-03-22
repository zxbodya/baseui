/// <reference types="react" />
import type { CountrySelectPropsT } from './types';
declare function CountryPicker(props: CountrySelectPropsT): JSX.Element;
declare namespace CountryPicker {
    var defaultProps: {
        disabled: boolean;
        inputRef: {
            current: any;
        };
        maxDropdownHeight: string;
        maxDropdownWidth: string;
        overrides: {};
        size: "default";
        error: boolean;
        positive: boolean;
        required: boolean;
    };
}
export default CountryPicker;
