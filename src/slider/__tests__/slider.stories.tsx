/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import SliderCustomLabel from './slider-custom-label.scenario';
import SliderDisabled from './slider-disabled.scenario';
import SliderMarks from './slider-marks.scenario';
import SliderRange from './slider-range.scenario';
import SliderStep from './slider-step.scenario';
import SliderDefault from './slider.scenario';

export const CustomLabel = () => <SliderCustomLabel />;
export const Disabled = () => <SliderDisabled />;
export const Marks = () => <SliderMarks />;
export const Range = () => <SliderRange />;
export const Step = () => <SliderStep />;
export const Slider = () => <SliderDefault />;
