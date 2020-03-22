/// <reference types="react" />
import type { StatefulPinCodePropsT } from './types';
declare function StatefulPinCode(props: StatefulPinCodePropsT): JSX.Element;
declare namespace StatefulPinCode {
    var defaultProps: {
        'aria-label': string;
        'aria-labelledby': any;
        'aria-describedby': any;
        autoComplete: string;
        autoFocus: boolean;
        disabled: boolean;
        error: boolean;
        id: any;
        name: any;
        onChange: () => void;
        overrides: {};
        placeholder: string;
        positive: boolean;
        required: boolean;
        size: "default";
        manageFocus: boolean;
        values: string[];
    };
}
export default StatefulPinCode;
