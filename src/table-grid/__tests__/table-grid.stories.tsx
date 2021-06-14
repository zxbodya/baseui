/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import TableGridJobs from './table-grid-jobs.scenario';
import TableGridRecords from './table-grid-records.scenario';
import TableGridSortable from './table-grid-sortable.scenario';
import TableGridDefault from './table-grid.scenario';

export const Jobs = () => <TableGridJobs />;
export const Records = () => <TableGridRecords />;
export const Sortable = () => <TableGridSortable />;
export const TableGrid = () => <TableGridDefault />;
