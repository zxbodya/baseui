import * as React from 'react';
import type { RadioPropsT, RadioStateT } from './types';
declare class Radio extends React.Component<RadioPropsT, RadioStateT> {
    static defaultProps: Partial<RadioPropsT>;
    state: {
        isActive: boolean;
        isHovered: boolean;
    };
    componentDidMount(): void;
    onMouseEnter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseLeave: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseDown: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseUp: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
export default Radio;
