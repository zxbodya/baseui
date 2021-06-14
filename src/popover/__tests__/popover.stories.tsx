/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import PopoverClick from './popover-click.scenario';
import PopoverFocusLoop from './popover-focus-loop.scenario';
import PopoverHover from './popover-hover.scenario';
import PopoverLargeMargin from './popover-large-margin.scenario';
import PopoverPosition from './popover-position.scenario';
import PopoverRenderAll from './popover-render-all.scenario';
import PopoverReposition from './popover-reposition.scenario';
import PopoverSelect from './popover-select.scenario';
import PopoverDefault from './popover.scenario';
import PopoverRepositionWithAnchorUpdate from './popover-reposition-with-anchor-update.scenario';

export const Click = () => <PopoverClick />;
export const FocusLoop = () => <PopoverFocusLoop />;
export const Hover = () => <PopoverHover />;
export const LargeMargin = () => <PopoverLargeMargin />;
export const Position = () => <PopoverPosition />;
export const RenderAll = () => <PopoverRenderAll />;
export const Reposition = () => <PopoverReposition />;
export const Select = () => <PopoverSelect />;
export const Popover = () => <PopoverDefault />;
export const RepositionWithAnchorUpdate = () => (
  <PopoverRepositionWithAnchorUpdate />
);
