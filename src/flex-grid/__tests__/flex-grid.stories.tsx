/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import FlexGridFractionalPixel from './flex-grid-fractional-pixel.scenario';
import FlexGridMissing from './flex-grid-missing.scenario';
import FlexGridResponsive from './flex-grid-responsive.scenario';
import FlexGridUnequalNarrow from './flex-grid-unequal-narrow.scenario';
import FlexGridUnequalWide from './flex-grid-unequal-wide.scenario';
import FlexGridDefault from './flex-grid.scenario';

export const FractionalPixel = () => <FlexGridFractionalPixel />;
export const Missing = () => <FlexGridMissing />;
export const Responsive = () => <FlexGridResponsive />;
export const UnequalNarrow = () => <FlexGridUnequalNarrow />;
export const UnequalWide = () => <FlexGridUnequalWide />;
export const FlexGrid = () => <FlexGridDefault />;
