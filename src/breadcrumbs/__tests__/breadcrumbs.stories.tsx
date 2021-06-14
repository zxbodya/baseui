/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import BreadcrumbsPseudo from './breadcrumbs-pseudo.scenario';
import BreadcrumbsTrailing from './breadcrumbs-trailing.scenario';
import BreadcrumbsDefault from './breadcrumbs.scenario';

export const Pseudo = () => <BreadcrumbsPseudo />;
export const Trailing = () => <BreadcrumbsTrailing />;
export const Breadcrumbs = () => <BreadcrumbsDefault />;
