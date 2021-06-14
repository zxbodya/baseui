/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import AppNavBarGetUniqueIdentifier from './app-nav-bar-get-unique-identifier.scenario';
import AppNavBarIsMainItemActive from './app-nav-bar-is-main-item-active.scenario';
import AppNavBarMapItemToNode from './app-nav-bar-map-item-to-node.scenario';
import AppNavBarOverrides from './app-nav-bar-overrides.scenario';
import AppNavBarTitleNode from './app-nav-bar-title-node.scenario';
import AppNavBarDefault from './app-nav-bar.scenario';

export const GetUniqueIdentifier = () => <AppNavBarGetUniqueIdentifier />;
export const IsMainItemActive = () => <AppNavBarIsMainItemActive />;
export const MapItemToNode = () => <AppNavBarMapItemToNode />;
export const Overrides = () => <AppNavBarOverrides />;
export const TitleNode = () => <AppNavBarTitleNode />;
export const AppNavBar = () => <AppNavBarDefault />;
