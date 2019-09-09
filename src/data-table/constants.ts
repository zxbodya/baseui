/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export const COLUMNS = Object.freeze({
  CATEGORICAL: 'CATEGORICAL',
  NUMERICAL: 'NUMERICAL',
  BOOLEAN: 'BOOLEAN',
  STRING: 'STRING',
  CUSTOM: 'CUSTOM',
});

export const NUMERICAL_FORMATS = Object.freeze({
  DEFAULT: 'DEFAULT',
  ACCOUNTING: 'ACCOUNTING',
  PERCENTAGE: 'PERCENTAGE',
});

export const SORT_DIRECTIONS = Object.freeze({
  ASC: 'ASC',
  DESC: 'DESC',
});
