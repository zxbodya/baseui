/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import SpinnerNegative from './spinner-negative.scenario';
import SpinnerNext from './spinner-next.scenario';
import SpinnerDefault from './spinner.scenario';

export const Negative = () => <SpinnerNegative />;
export const Next = () => <SpinnerNext />;
export const Spinner = () => <SpinnerDefault />;
