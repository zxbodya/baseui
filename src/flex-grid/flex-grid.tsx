/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Block} from '../block/index';
import {flattenFragments} from '../helpers/react-helpers';
import {getOverrides} from '../helpers/overrides';
import {BlockPropsT} from '../block/types';
import {FlexGridPropsT} from './types';

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
        // todo: incorrect component typings - children should be strictly ReactElement[] or implementation below needs to be updated to handle other things that can be in ReactNode
        child: React.ReactElement,
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
