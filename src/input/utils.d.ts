import type { InputPropsT, BaseInputPropsT, InternalStateT } from './types';
export declare function getSharedProps<T>(props: BaseInputPropsT<T> | InputPropsT, state: InternalStateT): {
    $isFocused: boolean;
    $disabled: boolean;
    $error: boolean;
    $positive: boolean;
    $adjoined: "left" | "right" | "none" | "both";
    $size: "default" | "large" | "mini" | "compact";
    $required: boolean;
};
