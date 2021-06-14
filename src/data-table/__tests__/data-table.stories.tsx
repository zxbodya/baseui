/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import DataTableAddRemoveColumns from './data-table-add-remove-columns.scenario';
import DataTableBatchAction from './data-table-batch-action.scenario';
import DataTableCategoricalColumn from './data-table-categorical-column.scenario';
import DataTableCellIndices from './data-table-cell-indices.scenario';
import DataTableCollectionOfObjects from './data-table-collection-of-objects.scenario';
import DataTableColumnsNotSortable from './data-table-columns-not-sortable.scenario';
import DataTableColumns from './data-table-columns.scenario';
import DataTableDatetimeColumn from './data-table-datetime-column.scenario';
import DataTableEmpty from './data-table-empty.scenario';
import DataTableExtractedFilters from './data-table-extracted-filters.scenario';
import DataTableExtractedHighlight from './data-table-extracted-highlight.scenario';
import DataTableFullWindow from './data-table-full-window.scenario';
import DataTableIncludedRowsChange from './data-table-included-rows-change.scenario';
import DataTableInitialFilters from './data-table-initial-filters.scenario';
import DataTableInitialSelectedRows from './data-table-initial-selected-rows.scenario';
import DataTableInitialSort from './data-table-initial-sort.scenario';
import DataTableLoading from './data-table-loading.scenario';
import DataTableNotFilterable from './data-table-not-filterable.scenario';
import DataTableNotSearchable from './data-table-not-searchable.scenario';
import DataTableNumericalColumn from './data-table-numerical-column.scenario';
import DataTableResizableColumnWidths from './data-table-resizable-column-widths.scenario';
import DataTableRowActions from './data-table-row-actions.scenario';
import DataTableRowHeight from './data-table-row-height.scenario';
import DataTableTextSearch from './data-table-text-search.scenario';
import DataTableDefault from './data-table.scenario';
import DataTableRtl from './data-table-rtl.scenario';

export const AddRemoveColumns = () => <DataTableAddRemoveColumns />;
export const BatchAction = () => <DataTableBatchAction />;
export const CategoricalColumn = () => <DataTableCategoricalColumn />;
export const CellIndices = () => <DataTableCellIndices />;
export const CollectionOfObjects = () => <DataTableCollectionOfObjects />;
export const ColumnsNotSortable = () => <DataTableColumnsNotSortable />;
export const Columns = () => <DataTableColumns />;
export const DatetimeColumn = () => <DataTableDatetimeColumn />;
export const Empty = () => <DataTableEmpty />;
export const ExtractedFilters = () => <DataTableExtractedFilters />;
export const ExtractedHighlight = () => <DataTableExtractedHighlight />;
export const FullWindow = () => <DataTableFullWindow />;
export const IncludedRowsChange = () => <DataTableIncludedRowsChange />;
export const InitialFilters = () => <DataTableInitialFilters />;
export const InitialSelectedRows = () => <DataTableInitialSelectedRows />;
export const InitialSort = () => <DataTableInitialSort />;
export const Loading = () => <DataTableLoading />;
export const NotFilterable = () => <DataTableNotFilterable />;
export const NotSearchable = () => <DataTableNotSearchable />;
export const NumericalColumn = () => <DataTableNumericalColumn />;
export const ResizableColumnWidths = () => <DataTableResizableColumnWidths />;
export const RowActions = () => <DataTableRowActions />;
export const RowHeight = () => <DataTableRowHeight />;
export const TextSearch = () => <DataTableTextSearch />;
export const DataTable = () => <DataTableDefault />;
export const TestRtl = () => <DataTableRtl />;
