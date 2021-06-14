/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import SelectAsyncOptions from './select-async-options.scenario';
import SelectBackspaceBehavior from './select-backspace-behavior.scenario';
import SelectCallsProvidedBlur from './select-calls-provided-blur.scenario';
import SelectClickMaintainsFocus from './select-click-maintains-focus.scenario';
import SelectCreatableMulti from './select-creatable-multi.scenario';
import SelectCreatable from './select-creatable.scenario';
import SelectDisableHrefAnchor from './select-disable-href-anchor.scenario';
import SelectHighlight from './select-highlight.scenario';
import SelectInFlexContainer from './select-in-flex-container.scenario';
import SelectInModal from './select-in-modal.scenario';
import SelectMaintainsInputValue from './select-maintains-input-value.scenario';
import SelectOpen from './select-open.scenario';
import SelectOptionGroup from './select-option-group.scenario';
import SelectOverriddenMenu from './select-overridden-menu.scenario';
import SelectSearchMulti from './select-search-multi.scenario';
import SelectSearchSingleFontsize from './select-search-single-fontsize.scenario';
import SelectSearchSingle from './select-search-single.scenario';
import SelectSizes from './select-sizes.scenario';
import SelectStates from './select-states.scenario';
import SelectUnmountBlur from './select-unmount-blur.scenario';
import SelectDefault from './select.scenario';

export const AsyncOptions = () => <SelectAsyncOptions />;
export const BackspaceBehavior = () => <SelectBackspaceBehavior />;
export const CallsProvidedBlur = () => <SelectCallsProvidedBlur />;
export const ClickMaintainsFocus = () => <SelectClickMaintainsFocus />;
export const CreatableMulti = () => <SelectCreatableMulti />;
export const Creatable = () => <SelectCreatable />;
export const DisableHrefAnchor = () => <SelectDisableHrefAnchor />;
export const Highlight = () => <SelectHighlight />;
export const InFlexContainer = () => <SelectInFlexContainer />;
export const InModal = () => <SelectInModal />;
export const MaintainsInputValue = () => <SelectMaintainsInputValue />;
export const Open = () => <SelectOpen />;
export const OptionGroup = () => <SelectOptionGroup />;
export const OverriddenMenu = () => <SelectOverriddenMenu />;
export const SearchMulti = () => <SelectSearchMulti />;
export const SearchSingleFontsize = () => <SelectSearchSingleFontsize />;
export const SearchSingle = () => <SelectSearchSingle />;
export const Sizes = () => <SelectSizes />;
export const States = () => <SelectStates />;
export const UnmountBlur = () => <SelectUnmountBlur />;
export const Select = () => <SelectDefault />;
