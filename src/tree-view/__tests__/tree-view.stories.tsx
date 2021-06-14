/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import TreeViewInteractable from './tree-view-interactable.scenario';
import TreeViewRenderAll from './tree-view-render-all.scenario';
import TreeViewSingleExpanded from './tree-view-single-expanded.scenario';
import TreeViewDefault from './tree-view.scenario';

export const Interactable = () => <TreeViewInteractable />;
export const RenderAll = () => <TreeViewRenderAll />;
export const SingleExpanded = () => <TreeViewSingleExpanded />;
export const TreeView = () => <TreeViewDefault />;
