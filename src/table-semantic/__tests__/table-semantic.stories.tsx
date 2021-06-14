/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import TableSemanticBuilder from './table-semantic-builder.scenario';
import TableSemanticCompose from './table-semantic-compose.scenario';
import TableSemanticDefault from './table-semantic.scenario';
import TableSemanticDivider from './table-semantic-divider.scenario';
import TableSemanticSize from './table-semantic-size.scenario';

export const Builder = () => <TableSemanticBuilder />;
export const Compose = () => <TableSemanticCompose />;
export const TableSemantic = () => <TableSemanticDefault />;
export const Divider = () => <TableSemanticDivider />;
export const Size = () => <TableSemanticSize />;
