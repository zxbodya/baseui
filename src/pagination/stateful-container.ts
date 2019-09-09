/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
// Files
import {STATE_CHANGE_TYPE} from './constants.js';
import {clamp} from './utils.js';
// Types
import {StatefulContainerPropsT, StatefulContainerStateT} from './types.js';

export default class PaginationStatefulContainer extends React.Component<
  StatefulContainerPropsT,
  StatefulContainerStateT
> {
  static defaultProps = {
    initialState: {
      currentPage: 1,
    },
    stateReducer: (changeType: any, changes: any) => changes,
  };

  state = {...this.props.initialState};

  // Internal set state function that will also invoke stateReducer
  internalSetState(
    changeType: keyof typeof STATE_CHANGE_TYPE,
    changes: StatefulContainerStateT,
  ) {
    const {stateReducer} = this.props;
    if (stateReducer) {
      this.setState(stateReducer(changeType, changes, this.state));
    } else {
      this.setState(changes);
    }
  }

  onPageChange: StatefulContainerPropsT['onPageChange'] = ({nextPage}) => {
    const {numPages, onPageChange} = this.props;
    const {currentPage} = this.state;
    const clamped = clamp(nextPage, 1, numPages);
    if (clamped !== currentPage) {
      onPageChange && onPageChange({nextPage: clamped, prevPage: currentPage});
      this.internalSetState(STATE_CHANGE_TYPE.changePage, {
        currentPage: clamped,
      });
    }
  };

  render() {
    const {currentPage} = this.state;
    const {children} = this.props;
    return children({
      currentPage,
      onPageChange: this.onPageChange,
    });
  }
}
