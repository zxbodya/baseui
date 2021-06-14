/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import CardImageLink from './card-image-link.scenario';
import CardImageObject from './card-image-object.scenario';
import CardTextOnly from './card-text-only.scenario';
import CardDefault from './card.scenario';

export const ImageLink = () => <CardImageLink />;
export const ImageObject = () => <CardImageObject />;
export const TextOnly = () => <CardTextOnly />;
export const Card = () => <CardDefault />;
