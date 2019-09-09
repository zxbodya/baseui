/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Block} from '../block/index.js';
import {flattenFragments} from '../helpers/react-helpers.js';
import {getOverrides} from '../helpers/overrides.js';
import {BlockPropsT} from '../block/types.js';
import {FlexGridPropsT} from './types.js';

export const BaseFlexGrid = ({
  display,
  flexWrap,
  ...restProps
}: BlockPropsT) => (
  <Block
    display={display || 'flex'}
    flexWrap={flexWrap || flexWrap === false ? flexWrap : true}
    data-baseweb="flex-grid"
    {...restProps}
  />
);

const FlexGrid = ({
  children,
  as,
  overrides,
  flexGridColumnCount,
  flexGridColumnGap,
  flexGridRowGap,
  ...restProps
}: FlexGridPropsT) => {
  const [FlexGrid, flexGridProps] = getOverrides(
    overrides && overrides.Block,
    BaseFlexGrid,
  );
  return (
    <FlexGrid as={as} {...restProps} {...flexGridProps}>
      {// flatten fragments so FlexGrid correctly iterates over fragments’ children
      flattenFragments(children).map((
        child: React.ReactNode, // $FlowFixMe https://github.com/facebook/flow/issues/4864
      ) =>
        React.cloneElement(child, {
          flexGridColumnCount,
          flexGridColumnGap,
          flexGridRowGap,
        }),
      )}
    </FlexGrid>
  );
};

export default FlexGrid;
