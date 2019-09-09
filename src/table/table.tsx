/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  StyledTable,
  StyledHead,
  StyledHeadCell,
  StyledBody,
  StyledRow,
  StyledCell,
} from './styled-components';

import {TablePropsT} from './types';

export default class Table extends React.Component<TablePropsT> {
  static defaultProps = {
    columns: [],
    data: [[]],
    isLoading: false,
  };

  render() {
    return (
      <StyledTable
        data-baseweb="table"
        aria-colcount={this.props.columns.length}
        aria-rowcount={this.props.data.length}
      >
        <StyledHead $width={this.props.horizontalScrollWidth}>
          {this.props.columns.map((column, index) => (
            <StyledHeadCell key={index}>{column}</StyledHeadCell>
          ))}
        </StyledHead>

        <StyledBody $width={this.props.horizontalScrollWidth}>
          {this.props.data.map((row, index) => (
            <StyledRow key={index}>
              {row.map((cell, cellIndex) => (
                <StyledCell key={cellIndex}>{cell}</StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledBody>
      </StyledTable>
    );
  }
}
