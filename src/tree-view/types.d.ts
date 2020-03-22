import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { SyntheticEvent } from 'react';
export declare type TreeLabelOverridesT = {
    TreeItemContent?: OverrideT<{}>;
    IconContainer?: OverrideT<{}>;
    ExpandIcon?: OverrideT<{}>;
    CollapseIcon?: OverrideT<{}>;
    LeafIconContainer?: OverrideT<{}>;
    LeafIcon?: OverrideT<{}>;
};
export declare type TreeViewOverridesT = {
    Root?: OverrideT<{}>;
    TreeItemList?: OverrideT<{
        $isChildNode?: boolean;
    }>;
    TreeItem?: OverrideT<{
        $isLeafNode?: boolean;
    }>;
    TreeLabel?: OverrideT<TreeLabelT>;
} & TreeLabelOverridesT;
export declare type TreeNodeIdT = number | string;
export declare type TreeNodeT = {
    id?: TreeNodeIdT;
    children?: TreeNodeT[];
    isExpanded?: boolean;
    label: ((node: TreeNodeT) => React.ReactNode) | string;
    info?: any;
    [key: string]: any;
};
export declare type TreeLabelT = {
    hasChildren: boolean;
    isExpanded?: boolean;
    isSelected?: boolean;
    isFocusVisible?: boolean;
    label: ((node: TreeNodeT) => React.ReactNode) | string;
    overrides?: TreeLabelOverridesT;
    node: TreeNodeT;
};
export declare type SharedStylePropsT = {
    $hasChildren: boolean;
    $isExpanded: boolean;
    $isSelected: boolean;
    $isFocusVisible: boolean;
};
export declare type TreeNodePropsT = {
    node: TreeNodeT;
    getId: (node: TreeNodeT) => TreeNodeIdT;
    onToggle?: (node: TreeNodeT) => void;
    overrides?: TreeViewOverridesT;
    renderAll?: boolean;
    onKeyDown?: (e: KeyboardEvent, node: TreeNodeT) => unknown;
    onFocus?: (event: SyntheticEvent) => unknown;
    onBlur?: (event: SyntheticEvent) => unknown;
    selectedNodeId?: TreeNodeIdT;
    addRef: (id: TreeNodeIdT, ref: React.RefObject<any>) => unknown;
    removeRef: (id: TreeNodeIdT) => unknown;
    isFocusVisible?: boolean;
    indentGuides?: boolean;
};
export declare type StatefulContainerPropsT = {
    children: (props: TreeViewPropsT) => React.ReactNode;
} & TreeViewPropsT;
export declare type TreeViewPropsT = {
    data: TreeNodeT[];
    indentGuides?: boolean;
    onToggle?: (node: TreeNodeT) => void;
    overrides?: TreeViewOverridesT;
    renderAll?: boolean;
    getId?: (node: TreeNodeT) => TreeNodeIdT;
    singleExpanded?: boolean;
};
