/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {LayersManager} from '../layer/index';
import {ThemeProvider} from '../styles/index';
import type {BaseProviderPropsT} from './types';

const BaseProvider = (props: BaseProviderPropsT) => {
  const {children, overrides, theme, zIndex} = props;
  return (
    <LayersManager zIndex={zIndex} overrides={overrides}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayersManager>
  );
};

export default BaseProvider;
