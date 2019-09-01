/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Block from '../block/block';
import {LevelContext} from './heading-level';
import {HeadingPropsT} from './types';
import {ElementType} from 'react';

const FONTS = [
  '',
  'font1000',
  'font900',
  'font800',
  'font700',
  'font600',
  'font500',
];

const Heading = ({styleLevel, ...restProps}: HeadingPropsT) => (
  <LevelContext.Consumer>
    {level => {
      if (level === 0) {
        throw new Error(
          'Heading component must be a descendant of HeadingLevel component.',
        );
      }
      if (level > 6) {
        throw new Error(
          `HeadingLevel cannot be nested ${level} times. The maximum is 6 levels.`,
        );
      }
      if (
        typeof styleLevel !== 'undefined' &&
        (styleLevel < 1 || styleLevel > 6)
      ) {
        throw new Error(`styleLevel = ${styleLevel} is out of 1-6 range.`);
      }
      return (
        <Block
          data-baseweb="heading"
          as={`h${level}` as ElementType}
          font={styleLevel ? FONTS[styleLevel] : FONTS[level]}
          color="colorPrimary"
          {...restProps}
        />
      );
    }}
  </LevelContext.Consumer>
);

export default Heading;
