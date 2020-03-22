import * as React from 'react';
import { StyledNavLink } from './styled-components';
import type { NavItemPropsT } from './types';
declare type SharedProps = Omit<React.ComponentProps<typeof StyledNavLink> & React.ComponentProps<typeof NavItem>, 'onSelect' | 'item' | 'overrides' | 'itemMemoizationComparator'>;
declare class NavItem extends React.Component<NavItemPropsT & SharedProps> {
    static defaultProps: {
        overrides: {};
        onSelect: () => void;
    };
    handleClick: (event: Event) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    render(): JSX.Element;
}
declare const _default: React.MemoExoticComponent<typeof NavItem>;
export default _default;
