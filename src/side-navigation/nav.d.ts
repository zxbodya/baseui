import * as React from 'react';
import type { NavPropsT, Item } from './types';
export default class SideNav extends React.Component<NavPropsT, {
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        activeItemId: string;
        activePredicate: any;
        items: any[];
        overrides: {};
        mapItem: any;
    };
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    activePredicate: (item: Item) => boolean;
    render(): JSX.Element;
}
