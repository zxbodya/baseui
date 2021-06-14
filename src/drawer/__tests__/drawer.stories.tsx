/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import DrawerRenderAll from './drawer-render-all.scenario';
import DrawerSelect from './drawer-select.scenario';
import DrawerDefault from './drawer.scenario';

export const RenderAll = () => <DrawerRenderAll />;
export const Select = () => <DrawerSelect />;
export const Drawer = () => <DrawerDefault />;
