/// <reference types="react" />
import type { CountrySelectPropsT } from './types';
declare function CountrySelect(props: CountrySelectPropsT): JSX.Element;
declare namespace CountrySelect {
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
export default CountrySelect;
