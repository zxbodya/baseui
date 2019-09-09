/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {useStyletron} from '../styles/index.js';

import {COLUMNS} from './constants.js';
import {ColumnT} from './types.js';
import {ComponentProps} from 'react';

// I could not re-use the ColumnT type to build this.. tried to spread the ColumnT
// and define renderFilter, etc. to optional, but required status was maintained.
type OptionsT<ValueT, FilterParamsT> = {
  title: string;
  sortable?: boolean;
  filterable?: boolean;
  renderCell: React.ComponentType<{
    value: ValueT;
    isMeasured?: boolean;
  }>;
  renderFilter?: React.ComponentType<{
    data: ValueT[];
    close: () => void;
    setFilter: (filterParams: FilterParamsT, description: string) => void;
  }>;
  buildFilter?: (a: FilterParamsT) => (a: ValueT) => boolean;
  sortFn?: (b: ValueT, a: ValueT) => number;
};

const CustomCell = React.forwardRef<
  HTMLDivElement,
  {
    isMeasured?: boolean;
    children: React.ReactNode;
  }
>((props, ref) => {
  const [useCss, theme] = useStyletron();
  return (
    <div
      ref={ref}
      className={useCss({
        display: props.isMeasured ? 'inline-block' : null,
        paddingLeft: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
      })}
    >
      {props.children}
    </div>
  );
});

function CustomColumn<ValueT, FilterParamsT>(
  options: OptionsT<ValueT, FilterParamsT>,
): ColumnT<ValueT, FilterParamsT> {
  return {
    kind: COLUMNS.CUSTOM,
    title: options.title,
    sortable: Boolean(options.sortable) && Boolean(options.sortFn),
    filterable:
      Boolean(options.filterable) &&
      Boolean(options.renderFilter) &&
      Boolean(options.buildFilter),
    renderCell: React.forwardRef<HTMLDivElement, {value: ValueT}>(
      (props, ref) => {
        const ProvidedCell = options.renderCell;
        return (
          <CustomCell {...props} ref={ref}>
            <ProvidedCell value={props.value} />
          </CustomCell>
        );
      },
    ),
    renderFilter: options.renderFilter || (() => null),
    buildFilter: options.buildFilter || (() => () => true),
    sortFn: options.sortFn || (() => 0),
  };
}

export default CustomColumn;
