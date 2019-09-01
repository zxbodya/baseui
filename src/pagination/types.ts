/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides';
import {STATE_CHANGE_TYPE} from './constants';

export type LabelsT = {
  prevButton?: string;
  nextButton?: string;
  preposition?: string;
};

export type CallbacksT = {
  /** Callback for prev button click. */
  onPrevClick?: (a: {event: any}) => any;
  /** Callback for next button click. */
  onNextClick?: (a: {event: any}) => any;
  /** Callback for when page changes. */
  onPageChange?: (a: {nextPage: number; prevPage: number}) => any;
};

export type StateReducerFnT = (
  changeType: keyof typeof STATE_CHANGE_TYPE,
  changes: StatefulContainerStateT,
  currentState: StatefulContainerStateT,
) => StatefulContainerStateT;

export type OverridesT = {
  Root?: OverrideT<any>;
  PrevButton?: OverrideT<any>;
  NextButton?: OverrideT<any>;
  MaxLabel?: OverrideT<any>;
  DropdownContainer?: OverrideT<any>;
  Select?: OverrideT<any>;
};

export type PaginationPropsT = CallbacksT & {
  /** Max number of pages. */
  numPages: number;
  /** The current page. */
  currentPage: number;
  /** Set of labels to use for the buttons and preposition. */
  labels?: LabelsT;
  overrides?: OverridesT;
};

export type StatefulPaginationPropsT = CallbacksT & {
  /** Max number of pages. */
  numPages: number;
  /** Set of labels to use for the buttons and preposition. */
  labels?: LabelsT;
  /** Reducer function to manipulate internal state updates. */
  stateReducer?: StateReducerFnT;
  /** Initial state populated into the component */
  initialState?: StatefulContainerStateT;
  overrides?: OverridesT;
};

export type StatefulContainerPropsT = {
  children: any;
  numPages: number;
  /** Reducer function to manipulate internal state updates. */
  stateReducer?: StateReducerFnT;
  /** Initial state populated into the component */
  initialState?: StatefulContainerStateT;
  /** Callback for when page changes. */
  onPageChange?: CallbacksT['onPageChange'];
};

export type StatefulContainerStateT = {
  currentPage: number;
};
