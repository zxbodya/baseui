/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

export type {
  PopoverPropsT as PropsT,
  StatefulPopoverPropsT as StatefulPropsT,
} from '../popover/index';

export type HelperStepsPropsT = {
  index: number;
  length: number;
  onFinish: () => unknown;
  onPrev: () => unknown;
  onNext: () => unknown;
};
