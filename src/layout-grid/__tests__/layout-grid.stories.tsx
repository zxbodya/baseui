/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import LayoutGridAlign from './layout-grid-align.scenario';
import LayoutGridCustom from './layout-grid-custom.scenario';
import LayoutGridHide from './layout-grid-hide.scenario';
import LayoutGridOrder from './layout-grid-order.scenario';
import LayoutGridOverrides from './layout-grid-overrides.scenario';
import LayoutGridSizing from './layout-grid-sizing.scenario';
import LayoutGridSkip from './layout-grid-skip.scenario';
import LayoutGridUnit from './layout-grid-unit.scenario';
import LayoutGridWrap from './layout-grid-wrap.scenario';
import LayoutGridDefault from './layout-grid.scenario';

export const Align = () => <LayoutGridAlign />;
export const Custom = () => <LayoutGridCustom />;
export const Hide = () => <LayoutGridHide />;
export const Order = () => <LayoutGridOrder />;
export const Overrides = () => <LayoutGridOverrides />;
export const Sizing = () => <LayoutGridSizing />;
export const Skip = () => <LayoutGridSkip />;
export const Unit = () => <LayoutGridUnit />;
export const Wrap = () => <LayoutGridWrap />;
export const LayoutGrid = () => <LayoutGridDefault />;
