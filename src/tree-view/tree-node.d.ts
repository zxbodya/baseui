import * as React from 'react';
import type { TreeNodePropsT } from './types';
export default class TreeNode extends React.Component<TreeNodePropsT> {
    treeItemRef: React.RefObject<HTMLLIElement>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onToggle: () => void;
    render(): JSX.Element;
}
