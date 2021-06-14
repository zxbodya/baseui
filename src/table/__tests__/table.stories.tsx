/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import TableBorderless from './table-borderless.scenario';
import TableCells from './table-cells.scenario';
import TableFewRows from './table-few-rows.scenario';
import TableFilter from './table-filter.scenario';
import TablePagination from './table-pagination.scenario';
import TableScroll from './table-scroll.scenario';
import TableSortableFillClick from './table-sortable-fill-click.scenario';
import TableSortable from './table-sortable.scenario';

export const Borderless = () => <TableBorderless />;
export const Cells = () => <TableCells />;
export const FewRows = () => <TableFewRows />;
export const Filter = () => <TableFilter />;
export const Pagination = () => <TablePagination />;
export const Scroll = () => <TableScroll />;
export const SortableFillClick = () => <TableSortableFillClick />;
export const Sortable = () => <TableSortable />;
