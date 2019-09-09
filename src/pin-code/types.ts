/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {OverrideT} from '../helpers/overrides.js';
import {SIZE, STATE_CHANGE_TYPE} from '../input/index.js';

export type ChangeEventT = {
  values: string[];
  event: InputEvent;
};

export type PropsT = {
  /** Sets aria-label attribute for each input element. */
  'aria-label': string | undefined | null;
  /** Sets aria-labelledby attribute for each input element. */
  'aria-labelledby': string | undefined | null;
  /** Sets aria-describedby attribute for each input element. */
  'aria-describedby': string | undefined | null;
  /** If true, the first input will be focused upon mounting. */
  autoFocus: boolean;
  /** Render the component in a disabled state. */
  disabled: boolean;
  /** Renders the component in an error state. */
  error: boolean;
  /** Sets the base id string that will be applied to the id attribute of each input element. The index of the input will be appended to this base string. Ex: `id="foo"` -> `id="foo-1"`, `id="foo-2",` etc... */
  id: string | undefined | null;
  /** Sets the name attribute of each input element. */
  name: string | undefined | null;
  /** A handler for when any pin code input changes value. */
  onChange: (a: ChangeEventT) => unknown;
  overrides: {
    Root?: OverrideT<any>;
    Input?: OverrideT<any>;
  };
  /** Sets the placeholder text for each pin code input element. */
  placeholder: string;
  /** Renders the component in a positive state. */
  positive: boolean;
  /** Sets the required attribute of each pin code input element. */
  required: boolean;
  /** Renders the component at a given size. */
  size: keyof typeof SIZE;
  /** If true, when a pin code input receives a valid value, focus will be transfered to the next pin code input (until the end of the inputs). */
  manageFocus: boolean;
  /** An array of values respective to each pin code input. */
  values: string[];
};

// Stateful stuff below

export type StateT = {
  hasFocus: boolean;
};

export type StatefulPinCodeContainerStateT = {
  values: string[];
};

export type StateChangeT = keyof typeof STATE_CHANGE_TYPE;

export type StateReducerT = (
  type: StateChangeT,
  nextState: StatefulPinCodeContainerStateT,
  currentState: StatefulPinCodeContainerStateT,
) => StatefulPinCodeContainerStateT;

export type StatefulPinCodeContainerPropsT = {
  children: (a: PropsT) => React.ReactNode;
  initialState: StatefulPinCodeContainerStateT;
  onChange: (event: ChangeEventT) => unknown;
  stateReducer: StateReducerT;
};

export type StatefulPinCodePropsT = PropsT & {
  initialState?: StatefulPinCodeContainerStateT;
  onChange?: (event: ChangeEventT) => unknown;
  stateReducer?: StateReducerT;
};
