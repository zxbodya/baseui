import * as React from 'react';
declare type PropsT = {
    children: React.ReactNode;
    isMeasured?: boolean;
    isSelected?: boolean;
    onSelect?: () => void;
};
declare const CellShell: React.ForwardRefExoticComponent<PropsT & React.RefAttributes<HTMLDivElement>>;
export default CellShell;
