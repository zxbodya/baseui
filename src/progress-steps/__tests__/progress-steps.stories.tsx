/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import NumberedStepsScenario from './numbered-steps.scenario';
import ProgressStepOverridesScenario from './progress-step-overrides.scenario';
import ProgressStepsIsActive from './progress-steps-isActive.scenario';
import ProgressStepsNumber from './progress-steps-number.scenario';
import ProgressStepsDefault from './progress-steps.scenario';

export const NumberedSteps = () => <NumberedStepsScenario />;
export const ProgressStepOverrides = () => <ProgressStepOverridesScenario />;
export const IsActive = () => <ProgressStepsIsActive />;
export const Number = () => <ProgressStepsNumber />;
export const ProgressSteps = () => <ProgressStepsDefault />;
