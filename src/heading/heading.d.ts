import * as React from 'react';
import Block from '../block/block';
import type { HeadingPropsT } from './types';
import type { ComponentProps } from 'react';
declare const Heading: React.FC<HeadingPropsT & ComponentProps<typeof Block>>;
export default Heading;
