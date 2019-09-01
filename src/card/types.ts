/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {ReactNode} from 'react';
import {OverrideT} from '../helpers/overrides';

export type CardComponentsT = {
  Action?: OverrideT<{} | undefined | null>;
  Body?: OverrideT<{} | undefined | null>;
  Contents?: OverrideT<{} | undefined | null>;
  HeaderImage?: OverrideT<{} | undefined | null>;
  Root?: OverrideT<{} | undefined | null>;
  Thumbnail?: OverrideT<{} | undefined | null>;
  Title?: OverrideT<{} | undefined | null>;
};

export type CardsPropsT = {
  /** Contents to be rendered at the bottom of the Card. Used to organize UI which enables user action. */
  readonly action?: ReactNode;
  /** Content to be rendered within the Card body. */
  readonly children?: ReactNode;
  /** Function that takes Card props and returns a boolean that represents if a thumbnail will be rendered. */
  readonly hasThumbnail: (a: {readonly thumbnail?: string}) => boolean;
  /** Image src to be positioned at the top of the Card. */
  readonly headerImage?: string;
  readonly overrides: CardComponentsT;
  /** Image src that by default is rendered to the side of children content. */
  readonly thumbnail?: string;
  /** Content to render above the body content. */
  readonly title?: ReactNode;
};
