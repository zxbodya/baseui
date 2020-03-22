/// <reference types="react" />
import type { PropsT } from './types';
declare function PhoneInput(props: PropsT): JSX.Element;
declare namespace PhoneInput {
    var defaultProps: {
        'aria-label': string;
        'aria-describedby': any;
        'aria-labelledby': any;
        clearable: boolean;
        focusLock: boolean;
        country: {
            label: string;
            id: string;
            dialCode: string;
        };
        disabled: boolean;
        error: boolean;
        id: any;
        maxDropdownHeight: string;
        maxDropdownWidth: string;
        name: any;
        onCountryChange: () => void;
        onTextChange: () => void;
        overrides: {};
        positive: boolean;
        required: boolean;
        size: "default";
        text: string;
    };
}
export default PhoneInput;
