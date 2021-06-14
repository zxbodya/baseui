/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {getOverrides} from '../helpers/overrides';
import {StyledGrid as DefaultStyledGrid} from './styled-components';

import type {GridPropsT, SharedGridPropsT} from './types';

export const GridContext: React.Context<SharedGridPropsT> = React.createContext(
  {},
);

export default function Grid({
  align,
  behavior,
  children,
  gridColumns,
  gridGaps,
  gridGutters,
  gridMargins,
  gridMaxWidth,
  gridUnit,
  overrides = {},
}: GridPropsT) {
  const [StyledGrid, overrideProps] = getOverrides(
    overrides.Grid,
    DefaultStyledGrid,
  );
  return (
    <StyledGrid
      $align={align}
      $behavior={behavior}
      $gridGutters={gridGutters}
      $gridMargins={gridMargins}
      $gridMaxWidth={gridMaxWidth}
      $gridUnit={gridUnit}
      {...overrideProps}
    >
      <GridContext.Provider
        value={{gridColumns, gridGaps, gridGutters, gridUnit}}
      >
        {children}
      </GridContext.Provider>
    </StyledGrid>
  );
}
