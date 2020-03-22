/// <reference types="react" />
import type { LitePropsT } from './types';
declare function PhoneInputLite(props: LitePropsT): JSX.Element;
declare namespace PhoneInputLite {
    var defaultProps: {
        'aria-label': string;
        'aria-describedby': any;
        'aria-labelledby': any;
        clearable: boolean;
        focusLock: boolean;
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
export default PhoneInputLite;
