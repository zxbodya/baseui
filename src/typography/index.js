/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import Block from '../block/block.js';
import type {BlockPropsT} from '../block/types.js';

// Captions - aka Caption, CaptionLabel
export const Caption1 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-caption1"
    {...props}
    font={props.font || 'font100'}
    color={props.color || 'colorSecondary'}
  />
);

export const Caption2 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-caption2"
    {...props}
    font={props.font || 'font150'}
    color={props.color || 'colorSecondary'}
  />
);

// Display
export const Display1 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-display-large"
    {...props}
    font={props.font || 'font1200'}
    color={props.color || 'colorPrimary'}
  />
);

// We used to have only one display, alias for backwards compatability
export const Display = Display1;

export const Display2 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-display-medium"
    {...props}
    font={props.font || 'font1100'}
    color={props.color || 'colorPrimary'}
  />
);

export const Display3 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-display-small"
    {...props}
    font={props.font || 'font1000'}
    color={props.color || 'colorPrimary'}
  />
);

export const Display4 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-display-x-small"
    {...props}
    font={props.font || 'font900'}
    color={props.color || 'colorPrimary'}
  />
);

// Headings
export const H1 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h1"
    as={props.as || 'h1'}
    {...props}
    font={props.font || 'font800'}
    color={props.color || 'colorPrimary'}
  />
);

export const H2 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h2"
    as={props.as || 'h2'}
    {...props}
    font={props.font || 'font700'}
    color={props.color || 'colorPrimary'}
  />
);

export const H3 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h3"
    as={props.as || 'h3'}
    {...props}
    font={props.font || 'font600'}
    color={props.color || 'colorPrimary'}
  />
);

export const H4 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h4"
    as={props.as || 'h4'}
    {...props}
    font={props.font || 'font500'}
    color={props.color || 'colorPrimary'}
  />
);

export const H5 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h5"
    as={props.as || 'h5'}
    {...props}
    font={props.font || 'font470'}
    color={props.color || 'colorPrimary'}
  />
);

export const H6 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-h6"
    as={props.as || 'h6'}
    {...props}
    font={props.font || 'font460'}
    color={props.color || 'colorPrimary'}
  />
);

// Labels - aka Label1, Label2
export const Label1 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-label1"
    {...props}
    font={props.font || 'font450'}
    color={props.color || 'colorPrimary'}
  />
);

export const Label2 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-label2"
    {...props}
    font={props.font || 'font350'}
    color={props.color || 'colorPrimary'}
  />
);

export const Label3 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-label3"
    {...props}
    font={props.font || 'font250'}
    color={props.color || 'colorPrimary'}
  />
);

export const Label4 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-label4"
    {...props}
    font={props.font || 'font150'}
    color={props.color || 'colorPrimary'}
  />
);

// Paragraphs - Paragraph1, Paragraph2
export const Paragraph1 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-p1"
    as={props.as || 'p'}
    {...props}
    font={props.font || 'font400'}
    color={props.color || 'colorPrimary'}
  />
);

export const Paragraph2 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-p2"
    as={props.as || 'p'}
    {...props}
    font={props.font || 'font300'}
    color={props.color || 'colorPrimary'}
  />
);

export const Paragraph3 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-p3"
    as={props.as || 'p'}
    {...props}
    font={props.font || 'font200'}
    color={props.color || 'colorPrimary'}
  />
);

export const Paragraph4 = (props: BlockPropsT) => (
  <Block
    data-baseweb="typo-p4"
    as={props.as || 'p'}
    {...props}
    font={props.font || 'font100'}
    color={props.color || 'colorPrimary'}
  />
);
