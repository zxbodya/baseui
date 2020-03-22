import * as React from 'react';
import type { PropsT, DefaultPropsT, StatelessStateT } from './types';
declare class StatelessCheckbox extends React.Component<PropsT, StatelessStateT> {
    static defaultProps: DefaultPropsT;
    state: {
        isFocused: boolean;
        isFocusVisible: boolean;
        isHovered: boolean;
        isActive: boolean;
    };
    componentDidMount(): void;
    onMouseEnter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseLeave: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseDown: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseUp: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isToggle: () => boolean;
    render(): JSX.Element;
}
export default StatelessCheckbox;
