/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {getOverrides} from '../helpers/overrides';
import {Svg as StyledSvg} from './styled-components';
import {IconPropsT} from './types';

export default function Icon(props: IconPropsT) {
  const {children, title, overrides = {}, size, color, ...restProps} = props;

  const sharedProps = {
    $size: size,
    $color: color,
  };

  const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg);

  return (
    <Svg data-baseweb="icon" {...restProps} {...sharedProps} {...overrideProps}>
      {title ? <title>{title}</title> : null}
      {children}
    </Svg>
  );
}
