/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {StatefulContainer as StatefulPopoverContainer} from '../popover/index.js';
import baseDefaultProps from './default-props.js';
import {StatefulTooltipContainerPropsT} from './types.js';

class StatefulContainer extends React.Component<
  StatefulTooltipContainerPropsT
> {
  static defaultProps: Partial<StatefulTooltipContainerPropsT> = {
    ...baseDefaultProps,
  };

  render() {
    return <StatefulPopoverContainer {...this.props} />;
  }
}

export default StatefulContainer;
