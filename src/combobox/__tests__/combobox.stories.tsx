/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import ComboboxAsync from './combobox-async.scenario';
import ComboboxAutocompleteFalse from './combobox-autocomplete-false.scenario';
import ComboboxDisabled from './combobox-disabled.scenario';
import ComboboxFormControl from './combobox-form-control.scenario';
import ComboboxForm from './combobox-form.scenario';
import ComboboxInlineTextSearch from './combobox-inline-text-search.scenario';
import ComboboxOverrides from './combobox-overrides.scenario';
import ComboboxReplacementNode from './combobox-replacement-node.scenario';
import ComboboxSearch from './combobox-search.scenario';
import ComboboxSizes from './combobox-sizes.scenario';
import ComboboxDefault from './combobox.scenario';

export const Async = () => <ComboboxAsync />;
export const AutocompleteFalse = () => <ComboboxAutocompleteFalse />;
export const Disabled = () => <ComboboxDisabled />;
export const FormControl = () => <ComboboxFormControl />;
export const Form = () => <ComboboxForm />;
export const InlineTextSearch = () => <ComboboxInlineTextSearch />;
export const Overrides = () => <ComboboxOverrides />;
export const ReplacementNode = () => <ComboboxReplacementNode />;
export const Search = () => <ComboboxSearch />;
export const Sizes = () => <ComboboxSizes />;
export const Combobox = () => <ComboboxDefault />;
