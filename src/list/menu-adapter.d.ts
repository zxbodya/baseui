import * as React from 'react';
declare const MenuAdapter: React.ForwardRefExoticComponent<{
    item: any;
    onMouseEnter: (a: MouseEvent) => unknown;
    onClick: (a: MouseEvent) => unknown;
    $size: string;
    $isHighlighted: boolean;
    $disabled: boolean;
} & import("./types").PropsT & React.RefAttributes<HTMLLIElement>>;
export default MenuAdapter;
