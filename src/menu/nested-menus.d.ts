import * as React from 'react';
declare type Ref = {
    current: HTMLElement | null;
};
declare type ContextT = {
    addMenuToNesting: (ref: Ref) => void;
    removeMenuFromNesting: (ref: Ref) => void;
    getParentMenu: (ref: Ref) => Ref | undefined | null;
    getChildMenu: (ref: Ref) => Ref | undefined | null;
    mountRef: {
        current: HTMLElement | null;
    };
};
declare type StateT = {
    menus: Ref[];
};
declare type PropsT = {
    children: React.ReactNode;
};
export declare const NestedMenuContext: React.Context<ContextT>;
export default class NestedMenus extends React.Component<PropsT, StateT> {
    state: {
        menus: any[];
    };
    mountRef: {
        current: HTMLElement;
    };
    addMenuToNesting: (ref: Ref) => void;
    removeMenuFromNesting: (ref: Ref) => void;
    findMenuIndexByRef: (ref: Ref) => number;
    getParentMenu: (ref: Ref) => Ref;
    getChildMenu: (ref: Ref) => Ref;
    render(): JSX.Element;
}
export {};
