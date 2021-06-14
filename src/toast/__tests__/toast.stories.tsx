/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import ToastDefault from './toast.scenario';
import ToasterFocusScenario from './toaster-focus.scenario';
import ToasterScenario from './toaster.scenario';

export const Toast = () => <ToastDefault />;
export const ToasterFocus = () => <ToasterFocusScenario />;
export const Toaster = () => <ToasterScenario />;
