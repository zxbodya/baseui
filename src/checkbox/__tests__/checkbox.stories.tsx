/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import CheckboxIndeterminate from './checkbox-indeterminate.scenario';
import CheckboxPlacement from './checkbox-placement.scenario';
import CheckboxSelect from './checkbox-select.scenario';
import CheckboxStates from './checkbox-states.scenario';
import CheckboxToggleRound from './checkbox-toggle-round.scenario';
import CheckboxToggle from './checkbox-toggle.scenario';
import CheckboxUnlabeled from './checkbox-unlabeled.scenario';
import CheckboxDefault from './checkbox.scenario';

export const Indeterminate = () => <CheckboxIndeterminate />;
export const Placement = () => <CheckboxPlacement />;
export const Select = () => <CheckboxSelect />;
export const States = () => <CheckboxStates />;
export const ToggleRound = () => <CheckboxToggleRound />;
export const Toggle = () => <CheckboxToggle />;
export const Unlabeled = () => <CheckboxUnlabeled />;
export const Checkbox = () => <CheckboxDefault />;
