/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
type NodeT = {
  target: string;
};

type ViolationT = {
  description: string;
  nodes: NodeT;
};

export type ViolationPropsT = {
  target: string;
  violations: Array<ViolationT>;
};
