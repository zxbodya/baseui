/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import Pagination from './pagination';
import StatefulContainer from './stateful-container';
import {StatefulPaginationPropsT} from './types';

export default function StatefulPagination({
  numPages,
  initialState,
  stateReducer,
  onPageChange,
  ...props
}: StatefulPaginationPropsT) {
  return (
    <StatefulContainer
      numPages={numPages}
      initialState={initialState}
      stateReducer={stateReducer}
      onPageChange={onPageChange}
    >
      {renderProps => (
        <Pagination numPages={numPages} {...renderProps} {...props} />
      )}
    </StatefulContainer>
  );
}

StatefulPagination.defaultProps = {
  initialState: {
    currentPage: 1,
  },
  stateReducer: (changeType: any, changes: any) => changes,
  overrides: {},
};
