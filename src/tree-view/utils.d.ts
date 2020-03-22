/// <reference types="react" />
import type { TreeNodeT } from './types';
export declare const getParentId: (nodes: TreeNodeT[], nodeId: import("react").ReactText, parentId: import("react").ReactText, getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const getPrevId: (nodes: TreeNodeT[], nodeId: import("react").ReactText, parentId: import("react").ReactText, getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const getFirstChildId: (nodes: TreeNodeT[], nodeId: import("react").ReactText, getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const getNextId: (nodes: TreeNodeT[], nodeId: import("react").ReactText, closestOmmer: import("react").ReactText, getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const getEndId: (nodes: TreeNodeT[], getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const getExpandableSiblings: (nodes: TreeNodeT[], nodeId: import("react").ReactText, getId: (a: TreeNodeT) => import("react").ReactText) => any;
export declare const toggleIsExpanded: (arr: TreeNodeT[], toggledNode: TreeNodeT, getId?: (node: TreeNodeT) => import("react").ReactText) => TreeNodeT[];
export declare const defaultGetId: (node: TreeNodeT) => import("react").ReactText;
