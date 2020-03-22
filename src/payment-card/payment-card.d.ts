import * as React from 'react';
import type { PaymentCardPropsT } from './types';
declare class PaymentCard extends React.Component<PaymentCardPropsT> {
    caretPosition: number;
    inRef: HTMLInputElement | HTMLTextAreaElement | null;
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
        size: string;
        startEnhancer: any;
        endEnhancer: any;
    };
    componentDidUpdate(prevProps: PaymentCardPropsT): void;
    render(): JSX.Element;
}
export default PaymentCard;
