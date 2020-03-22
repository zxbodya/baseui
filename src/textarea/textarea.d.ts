import * as React from 'react';
import type { TextareaPropsT } from './types';
declare class Textarea extends React.Component<TextareaPropsT> {
    static defaultProps: {
        autoFocus: boolean;
        disabled: boolean;
        error: boolean;
        name: string;
        onBlur: () => void;
        onChange: () => void;
        onKeyDown: () => void;
        onKeyPress: () => void;
        onKeyUp: () => void;
        onFocus: () => void;
        overrides: {};
        placeholder: string;
        required: boolean;
        rows: number;
        size: "default";
        value: string;
    };
    render(): JSX.Element;
}
export default Textarea;
