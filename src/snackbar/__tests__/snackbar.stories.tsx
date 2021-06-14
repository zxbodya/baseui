/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import SnackbarElementOverrides from './snackbar-element-overrides.scenario';
import SnackbarElement from './snackbar-element.scenario';
import SnackbarPlacement from './snackbar-placement.scenario';
import SnackbarProviderOverrides from './snackbar-provider-overrides.scenario';
import SnackbarProvider from './snackbar-provider.scenario';

export const ElementOverrides = () => <SnackbarElementOverrides />;
export const Element = () => <SnackbarElement />;
export const Placement = () => <SnackbarPlacement />;
export const ProviderOverrides = () => <SnackbarProviderOverrides />;
export const Provider = () => <SnackbarProvider />;
