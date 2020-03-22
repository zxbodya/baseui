declare type NodeT = {
    target: string;
};
declare type ViolationT = {
    description: string;
    nodes: NodeT;
};
export declare type ViolationPropsT = {
    target: string;
    violations: Array<ViolationT>;
};
export {};
