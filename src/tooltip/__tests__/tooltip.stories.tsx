/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import TooltipArrowMargin from './tooltip-arrow-margin.scenario';
import TooltipComplex from './tooltip-complex.scenario';
import TooltipDefault from './tooltip.scenario';
import TooltipInteractiveElement from './tooltip-interactive-element.scenario';

export const ArrowMargin = () => <TooltipArrowMargin />;
export const Complex = () => <TooltipComplex />;
export const Tooltip = () => <TooltipDefault />;
export const TooltipInteractive = () => <TooltipInteractiveElement />;
