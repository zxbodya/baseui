import * as React from 'react';
import type { FormControlPropsT, FormControlStateT } from './types';
export default class FormControl extends React.Component<FormControlPropsT, FormControlStateT> {
    static defaultProps: {
        overrides: {};
        label: any;
        caption: any;
        error: boolean;
        positive: boolean;
        disabled: boolean;
    };
    state: {
        captionId: string;
    };
    render(): JSX.Element;
}
