/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import {ReactNode} from 'react';

import {OverrideT} from '../helpers/overrides.js';

export type OverridesT = {
  Root?: OverrideT<any>;
  Separator?: OverrideT<any>;
  List?: OverrideT<any>;
  ListItem?: OverrideT<any>;
  Icon?: OverrideT<any>;
};

export type BreadcrumbsPropsT = {
  children?: ReactNode;
  overrides?: OverridesT;
  ariaLabel?: string;
};
