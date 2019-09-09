/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// Styled elements
import * as React from 'react';
import {Link} from './styled-components';

export const StyledLink = React.forwardRef((props, ref) => (
  <Link data-baseweb="link" {...props} ref={ref} />
));

// @ts-ignore
StyledLink.__STYLETRON__ = Link.__STYLETRON__;
