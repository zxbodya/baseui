/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import {getOverrides} from '../helpers/overrides';
import {StyledProgressSteps} from './styled-components';
import type {ProgressStepsPropsT, StepPropsT} from './types';

function ProgressSteps({
  overrides = {},
  current,
  children,
}: ProgressStepsPropsT) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledProgressSteps);
  const numChildren = React.Children.count(children);
  // @ts-ignore todo: stricter types - only elements can be cloned, not any child is an element
  const modifiedChildren = React.Children.map(children, (child:any, index) => {
    if (!child) return;

    const childOverrides = child.props.overrides || {};

    const isActive =
      child.props.isActive !== undefined
        ? child.props.isActive
        : index === current;

    return React.cloneElement(child, {
      isLast: index === numChildren - 1,
      isCompleted: index < current,
      isActive,
      step: index + 1,
      overrides: {
        ...overrides,
        Root: overrides.StepRoot,
        ...childOverrides,
      },
    } as StepPropsT);
  });

  return (
    <Root data-baseweb="progress-steps" {...rootProps}>
      {modifiedChildren}
    </Root>
  );
}

ProgressSteps.defaultProps = {
  current: 0,
};

export default ProgressSteps;
