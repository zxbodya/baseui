/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import MenuChildInPopover from './menu-child-in-popover.scenario';
import MenuChildRenderAll from './menu-child-render-all.scenario';
import MenuChild from './menu-child.scenario';
import MenuEmpty from './menu-empty.scenario';
import MenuGroupedItems from './menu-grouped-items.scenario';
import MenuPropagation from './menu-propagation.scenario';
import MenuStateful from './menu-stateful.scenario';
import MenuVirtualized from './menu-virtualized.scenario';
import MenuDefault from './menu.scenario';
import MenuProfileMenu from './menu-profile-menu.scenario';

export const ChildInPopover = () => <MenuChildInPopover />;
export const ChildRenderAll = () => <MenuChildRenderAll />;
export const Child = () => <MenuChild />;
export const Empty = () => <MenuEmpty />;
export const GroupedItems = () => <MenuGroupedItems />;
export const Propagation = () => <MenuPropagation />;
export const Stateful = () => <MenuStateful />;
export const Virtualized = () => <MenuVirtualized />;
export const Menu = () => <MenuDefault />;
export const ProfileMenu = () => <MenuProfileMenu />;
