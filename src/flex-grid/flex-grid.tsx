/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Block} from '../block/index';
import {flattenFragments} from '../helpers/react-helpers';
import {getOverrides} from '../helpers/overrides';
import type {BlockPropsT} from '../block/types';
import type {FlexGridPropsT} from './types';

export const BaseFlexGrid = React.forwardRef<HTMLElement, BlockPropsT>(
  ({display, flexWrap, ...restProps}, ref) => (
    <Block
      display={display || 'flex'}
      flexWrap={flexWrap || flexWrap === false ? flexWrap : true}
      data-baseweb="flex-grid"
      {...restProps}
      ref={ref}
    />
  ),
);

const FlexGrid = ({
  forwardedRef,
  children,
  as,
  overrides,
  flexGridColumnCount,
  flexGridColumnGap,
  flexGridRowGap,
  ...restProps
}): React.ReactNode => {
  const [FlexGrid, flexGridProps] = getOverrides(
    overrides && overrides.Block,
    BaseFlexGrid,
  );
  return (
    <FlexGrid
      // coerced to any because because of how react components are typed.
      // cannot guarantee an html element
      // eslint-disable-next-line flowtype/no-weak-types
      ref={forwardedRef as any}
      as={as}
      {...restProps}
      {...flexGridProps}
    >
      {
        // flatten fragments so FlexGrid correctly iterates over fragments’ children
        flattenFragments(children).map(
          (
            child: React.ReactNode,
            flexGridItemIndex: number,
            {length: flexGridItemCount}: React.ReactNode[],
          ) => {
            // $FlowFixMe https://github.com/facebook/flow/issues/4864
            return React.cloneElement(child, {
              flexGridColumnCount,
              flexGridColumnGap,
              flexGridRowGap,
              flexGridItemIndex,
              flexGridItemCount,
            });
          },
        )
      }
    </FlexGrid>
  );
};

const FlexGridComponent = React.forwardRef<HTMLElement, FlexGridPropsT>(
  (props: FlexGridPropsT, ref) => <FlexGrid {...props} forwardedRef={ref} />,
);
FlexGridComponent.displayName = 'FlexGrid';
export default FlexGridComponent;