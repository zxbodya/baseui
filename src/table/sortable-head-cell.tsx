/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {getOverrides} from '../helpers/overrides.js';
import TriangleDown from '../icon/triangle-down.js';
import TriangleUp from '../icon/triangle-up.js';

import {SORT_DIRECTION} from './constants.js';
import {StyledHeadCell, StyledSortableLabel} from './styled-components.js';
import {SortDirectionT, HeadCellPropsT} from './types.js';

function SortDirectionIcon({direction}: {direction: SortDirectionT}) {
  switch (direction) {
    case SORT_DIRECTION.ASC:
      return <TriangleDown />;
    case SORT_DIRECTION.DESC:
      return <TriangleUp />;
    default:
      return null;
  }
}

export default function SortableHeadCell(props: HeadCellPropsT) {
  const {overrides = {}} = props;

  const [HeadCell, headCellProps] = getOverrides(
    overrides.HeadCell,
    StyledHeadCell,
  );
  const [SortableLabel, sortableLabelProps] = getOverrides(
    overrides.SortableLabel,
    StyledSortableLabel,
  );

  return (
    <HeadCell role="columnheader" {...headCellProps}>
      <SortableLabel
        aria-label={`sorts table by ${props.title} column`}
        disabled={props.disabled}
        onClick={() => {
          props.onSort && props.onSort();
        }}
        {...sortableLabelProps}
      >
        <SortDirectionIcon direction={props.direction} />
        {props.title}
      </SortableLabel>
      {props.children}
    </HeadCell>
  );
}
