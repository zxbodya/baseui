import * as React from 'react';
import type { PropsT, DefaultPropsT, StatelessStateT } from './types';
declare class StatelessRadioGroup extends React.Component<PropsT, StatelessStateT> {
    static defaultProps: DefaultPropsT;
    state: {
        isFocusVisible: boolean;
        focusedRadioIndex: number;
    };
    handleFocus: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    handleBlur: (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    render(): JSX.Element;
}
export default StatelessRadioGroup;
