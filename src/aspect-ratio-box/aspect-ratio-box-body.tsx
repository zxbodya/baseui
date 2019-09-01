/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import Block from '../block/block';
import type {BlockPropsT} from '../block/types';
import type {ComponentProps} from 'react';

export const AspectRatioBoxBody: React.FC<ComponentProps<typeof Block>> = ({
  position,
  top,
  bottom,
  width,
  ...restProps
}: BlockPropsT) => (
  <Block
    data-baseweb="aspect-ratio-box-body"
    position={position || 'absolute'}
    top={top || 0}
    bottom={bottom || 0}
    width={width || '100%'}
    {...restProps}
  />
);

export default AspectRatioBoxBody;
