/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import ProgressbarNegativeScenario from './progressbar-negative.scenario';
import ProgressbarRoundedAnimatedScenario from './progressbar-rounded-animated.scenario';
import ProgressbarRoundedOverridesScenario from './progressbar-rounded-overrides.scenario';
import ProgressbarRoundedScenario from './progressbar-rounded.scenario';
import ProgressbarScenario from './progressbar.scenario';

export const ProgressbarNegative = () => <ProgressbarNegativeScenario />;
export const ProgressbarRoundedAnimated = () => (
  <ProgressbarRoundedAnimatedScenario />
);
export const ProgressbarRoundedOverrides = () => (
  <ProgressbarRoundedOverridesScenario />
);
export const ProgressbarRounded = () => <ProgressbarRoundedScenario />;
export const Progressbar = () => <ProgressbarScenario />;
