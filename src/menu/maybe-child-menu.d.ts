import * as React from 'react';
import { ReactElement } from 'react';
declare type PropsT = {
    children: React.ReactNode;
    getChildMenu: ((item: any) => React.ReactNode) | undefined | null;
    isOpen: boolean;
    item: any;
    resetParentMenu: () => void;
    renderAll?: boolean;
};
export default function MaybeChildMenu(props: PropsT): ReactElement | null;
export {};
