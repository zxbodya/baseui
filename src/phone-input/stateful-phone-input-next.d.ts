/// <reference types="react" />
import type { StatefulPhoneInputPropsT } from './types';
declare function StatefulPhoneInputNext(props: StatefulPhoneInputPropsT): JSX.Element;
declare namespace StatefulPhoneInputNext {
    var defaultProps: {
        clearable: boolean;
        'aria-label': string;
        'aria-describedby': any;
        'aria-labelledby': any;
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
export default StatefulPhoneInputNext;
