import type { InputComponentsT, InputPropsT, StInputPropsDiffT } from '../input/types';
import type { OverrideT } from '../helpers/overrides';
export declare type PaymentCardComponentsT = {
    IconWrapper?: OverrideT<any>;
} & InputComponentsT;
export declare type PaymentCardPropsT = {
    overrides: PaymentCardComponentsT;
} & InputPropsT;
export declare type StatefulPaymentCardPropsT = {
    overrides?: PaymentCardComponentsT;
} & StInputPropsDiffT;
