/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import colorTokens from './color-tokens';
import getSemanticColorTokens from './color-semantic-tokens';
import getComponentColorTokens from './color-component-tokens';
import getDeprecatedSemanticColorTokens from './color-deprecated-semantic-tokens';
import borders from './borders';
import lighting from '../shared/lighting';
import getTypography from '../shared/typography';
import animation from '../shared/animation';
import breakpoints from '../shared/breakpoints';
import grid from '../shared/grid';
import mediaQuery from '../shared/media-query';
import sizing from '../shared/sizing';

import type {ThemeT} from '../../styles/types';

export const DarkTheme: ThemeT = {
  name: 'dark-theme',
  colors: {
    ...colorTokens,
    ...getComponentColorTokens(),
    ...getDeprecatedSemanticColorTokens(),
    ...getSemanticColorTokens(),
  },
  animation,
  breakpoints,
  borders,
  direction: 'auto',
  grid,
  lighting,
  mediaQuery,
  sizing,
  typography: getTypography(),
  // TODO(#2318) Remove it in the next v11 major version.
  // Do not use.
  zIndex: {
    modal: 2000,
  },
};
