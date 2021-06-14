/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import ButtonCircle from './button-circle.scenario';
import ButtonEnhancersCompact from './button-enhancers-compact.scenario';
import ButtonEnhancers from './button-enhancers.scenario';
import ButtonShapes from './button-shapes.scenario';
import ButtonSizesLoading from './button-sizes-loading.scenario';
import ButtonSizes from './button-sizes.scenario';
import ButtonDefault from './button.scenario';

export const Circle = () => <ButtonCircle />;
export const EnhancersCompact = () => <ButtonEnhancersCompact />;
export const Enhancers = () => <ButtonEnhancers />;
export const Shapes = () => <ButtonShapes />;
export const SizesLoading = () => <ButtonSizesLoading />;
export const Sizes = () => <ButtonSizes />;
export const Button = () => <ButtonDefault />;
