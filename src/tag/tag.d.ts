import * as React from 'react';
import type { PropsT } from './types';
declare class Tag extends React.Component<PropsT, {
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        closeable: boolean;
        disabled: boolean;
        isFocused: boolean;
        isHovered: boolean;
        onActionClick: () => void;
        onActionKeyDown: () => void;
        onClick: any;
        onKeyDown: any;
        overrides: {};
        kind: "primary";
        variant: "light";
    };
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
export default Tag;
