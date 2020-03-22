import * as React from 'react';
import { StyledInput } from './styled-components';
import type { AutosizeInputPropsT, AutosizeInputStateT } from './types';
import type { ComponentProps } from 'react';
export default class AutosizeInput extends React.Component<AutosizeInputPropsT & Omit<ComponentProps<typeof StyledInput>, keyof AutosizeInputPropsT>, AutosizeInputStateT> {
    mounted: boolean;
    sizer: HTMLElement | undefined | null;
    static defaultProps: {
        inputRef: {
            current: HTMLInputElement;
        };
        value: string;
        overrides: {};
    };
    state: {
        inputWidth: number;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: AutosizeInputPropsT, prevState: AutosizeInputStateT): void;
    componentWillUnmount(): void;
    sizerRef: (el?: HTMLElement) => void;
    updateInputWidth(): void;
    render(): JSX.Element;
}
