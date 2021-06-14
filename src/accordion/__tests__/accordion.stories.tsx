/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import AccordionControlled from './accordion-controlled.scenario';
import AccordionDisabled from './accordion-disabled.scenario';
import AccordionExpanded from './accordion-expanded.scenario';
import AccordionPanelOverride from './accordion-panel-override.scenario';
import AccordionStateless from './accordion-stateless.scenario';
import AccordionDefault from './accordion.scenario';

export const Controlled = () => <AccordionControlled />;
export const Disabled = () => <AccordionDisabled />;
export const Expanded = () => <AccordionExpanded />;
export const PanelOverride = () => <AccordionPanelOverride />;
export const StatelessAccordion = () => <AccordionStateless />;
export const Accordion = () => <AccordionDefault />;
