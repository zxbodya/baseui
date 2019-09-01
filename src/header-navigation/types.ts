/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides';

export type OverridesT = {
  Root?: OverrideT<any>;
};

export type PropsT = {
  overrides: OverridesT;
};
