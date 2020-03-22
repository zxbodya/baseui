import * as React from 'react';
import type { InputPropsT, InternalStateT } from './types';
declare class Input extends React.Component<InputPropsT, InternalStateT> {
    static defaultProps: {
        autoComplete: string;
        autoFocus: boolean;
        disabled: boolean;
        name: string;
        error: boolean;
        onBlur: () => void;
        onFocus: () => void;
        overrides: {};
        required: boolean;
        size: "default";
        startEnhancer: any;
        endEnhancer: any;
    };
    /**
     * This "Stateless" input still has state. This is private state that
     * customers shouldn't have to manage themselves, such as input's focus state.
     */
    state: {
        isFocused: boolean;
    };
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default Input;
