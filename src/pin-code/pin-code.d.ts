import React from 'react';
import MultiRef from 'react-multi-ref';
import type { PropsT, StateT } from './types';
export default class PinCode extends React.Component<PropsT, StateT> {
    static defaultProps: {
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
    _inputRefs: MultiRef<number, HTMLInputElement>;
    state: {
        hasFocus: boolean;
    };
    componentDidMount(): void;
    render(): JSX.Element;
}
