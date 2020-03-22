import * as React from 'react';
import type { BaseInputPropsT, InternalStateT } from './types';
declare class BaseInput<T extends EventTarget> extends React.Component<BaseInputPropsT<T>, InternalStateT> {
    static defaultProps: {
        'aria-errormessage': any;
        'aria-label': any;
        'aria-labelledby': any;
        'aria-describedby': any;
        adjoined: "none";
        autoComplete: string;
        autoFocus: boolean;
        disabled: boolean;
        error: boolean;
        positive: boolean;
        name: string;
        inputMode: string;
        onBlur: () => void;
        onChange: () => void;
        onKeyDown: () => void;
        onKeyPress: () => void;
        onKeyUp: () => void;
        onFocus: () => void;
        onClear: () => void;
        clearable: boolean;
        overrides: {};
        pattern: any;
        placeholder: string;
        required: boolean;
        size: "default";
        type: string;
    };
    inputRef: React.RefObject<any>;
    state: {
        isFocused: boolean;
        isMasked: boolean;
        initialType: string;
        isFocusVisibleForClear: boolean;
        isFocusVisibleForMaskToggle: boolean;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    clearValue(): void;
    onInputKeyDown: (e: KeyboardEvent) => void;
    onClearIconClick: () => void;
    onFocus: (e: React.FocusEvent<T>) => void;
    onBlur: (e: React.FocusEvent<T>) => void;
    getInputType(): string;
    handleFocusForMaskToggle: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlurForMaskToggle: (event: React.SyntheticEvent<Element, Event>) => void;
    renderMaskToggle(): JSX.Element;
    handleFocusForClear: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlurForClear: (event: React.SyntheticEvent<Element, Event>) => void;
    renderClear(): JSX.Element;
    render(): JSX.Element;
}
export default BaseInput;
