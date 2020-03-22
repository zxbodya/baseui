import type { ButtonPropsT } from './types';
export declare function getSharedProps({ disabled, isLoading, isSelected, kind, shape, size, }: ButtonPropsT): {
    $disabled: boolean;
    $isLoading: boolean;
    $isSelected: boolean;
    $kind: "primary" | "secondary" | "tertiary" | "minimal";
    $shape: "round" | "default" | "square" | "pill";
    $size: "default" | "large" | "mini" | "compact";
};
