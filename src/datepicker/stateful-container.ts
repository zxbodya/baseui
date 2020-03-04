/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {STATE_CHANGE_TYPE} from './constants';
import type {
  CalendarPropsT,
  ContainerStateT,
  DatepickerPropsT,
  StatefulContainerPropsT,
  StateChangeTypeT,
  StateReducerT,
} from './types';

type InputProps<T> = CalendarPropsT<T> | DatepickerPropsT<T>;
type PropsT<T> = StatefulContainerPropsT<InputProps<T>, T>;

class StatefulContainer<T = Date> extends React.Component<
  PropsT<T>,
  ContainerStateT<T>
> {
  static defaultProps: {
    stateReducer: StateReducerT<T>;
  } = {
    initialState: {},
    stateReducer: (type, nextState) => nextState,
    onChange: () => {},
  };

  constructor(props: PropsT<T>) {
    super(props);
    const value = props.range ? [] : (null as T | undefined | null);
    this.state = {value, ...props.initialState};
  }

  onChange: (a: {date: T | undefined | null | Array<T>}) => unknown = data => {
    const {date} = data;
    this.internalSetState(STATE_CHANGE_TYPE.change, {value: date});
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(data);
    }
  };

  internalSetState(type: StateChangeTypeT, changes: ContainerStateT<T>) {
    const {stateReducer} = this.props;
    this.setState(prevState => stateReducer(type, changes, prevState));
  }

  render() {
    const {children, initialState, stateReducer, ...restProps} = this.props;
    return this.props.children({
      ...restProps,
      value: this.state.value,
      onChange: this.onChange,
    });
  }
}

export default StatefulContainer;