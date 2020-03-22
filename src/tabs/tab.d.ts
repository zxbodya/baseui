import * as React from 'react';
import type { TabPropsT, SharedStylePropsArgT } from './types';
declare class TabComponent extends React.Component<TabPropsT, {
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        disabled: boolean;
        expanded: boolean;
        onSelect: () => void;
        onClick: () => void;
        onKeyDown: () => void;
        title: string;
    };
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    onClick: (e: Event) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    getSharedProps(): SharedStylePropsArgT;
    render(): JSX.Element;
}
export default TabComponent;
