/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE} from './constants';
import {BasePopoverPropsT} from './types';

const baseDefaultProps: Partial<BasePopoverPropsT> = {
  accessibilityType: ACCESSIBILITY_TYPE.menu,
  // Remove the `ignoreBoundary` prop in the next major version
  // and have it replaced with the TetherBehavior props overrides
  ignoreBoundary: false,
  overrides: {},
  onMouseEnterDelay: 200,
  onMouseLeaveDelay: 200,
  placement: PLACEMENT.auto,
  showArrow: false,
  triggerType: TRIGGER_TYPE.click,
};

export default baseDefaultProps;
