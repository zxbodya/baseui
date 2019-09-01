/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {TETHER_PLACEMENT} from './constants';

/** LayersManager */
export type LayersManagerPropsT = {
  children: React.ReactNode;
  // z-index to be set for all the layers.
  zIndex?: number;
};

export type LayersContextT = {
  host: HTMLElement | undefined | null;
  zIndex?: number;
};

/** Layer */
export type LayerPropsT = {
  /** Content to be rendered in the Layer. */
  children: React.ReactNode;
  /** A DOM element where the Layer will be inserted into as a child.
   The host value comes from the layers context provider.
   If there is no `LayersManager` added and therefore no host element
   in the context, `document.body` will be used as a container element. */
  host?: HTMLElement | null;
  /** Defines the location (child order) at which the layer will be inserted in
   the `host` element. */
  index?: number;
  /** A custom DOM element where the layer is inserted to as a child.
   Note that the `index` prop does not work with a custom `mountNode`. */
  mountNode?: HTMLElement;
  /** A handler that is called when the Layer is mounted. */
  onMount?: () => unknown;
  /** A handler that is called when the Layer is unmounted. */
  onUnmount?: () => unknown;
  /** A value of z-index to be set on the layer.
   The zIndex value comes from the layers context provider. */
  zIndex?: number;
};

export type LayerComponentPropsT = {
  children: React.ReactNode;
  host: HTMLElement | undefined | null;
  index?: number;
  mountNode?: HTMLElement;
  onMount?: () => unknown;
  onUnmount?: () => unknown;
  zIndex?: number;
};

export type LayerStateT = {
  container: HTMLElement | undefined | null;
};

/** TetherBehavior */
export type TetherPlacementT = keyof typeof TETHER_PLACEMENT;

export type NormalizedOffsetT = {
  top: number;
  left: number;
};

export type NormalizedOffsetsT = {
  arrow?: NormalizedOffsetT;
  popper: NormalizedOffsetT;
};

export type PopperOffsetT = {
  top?: number | null;
  left?: number | null;
};

export type PopperDataObjectT = {
  offsets: {
    arrow?: PopperOffsetT;
    popper: PopperOffsetT;
  };
  placement: string;
};

export type PopperOptionsT = {
  placement: string;
  modifiers: {
    arrow: {};
    computeStyle: {};
    applyStyle: {};
    applyReactStyle: {
      fn: (data: PopperDataObjectT) => void;
    };
  };
};

export type TetherPropsT = {
  /** The reference element used to position the popper. */
  anchorRef: HTMLElement | undefined | null;
  /** The arrow element that is passed as an arrow modifier to alter
   the popper positioning. */
  arrowRef?: HTMLElement | null;
  /** The element used as a popper. */
  popperRef: HTMLElement | undefined | null;
  /** Content to be rendered in the Popper. */
  children: React.ReactNode;
  /** A handler that is called when popper positioning changes. */
  onPopperUpdate: (b: NormalizedOffsetsT, a: PopperDataObjectT) => unknown;
  /** Recommended placement of the popper. */
  placement: TetherPlacementT;
  /** Options to be passes to the Popper on its initialization.
   Refer to the [Popper documentation](https://popper.js.org/popper-documentation.html)
   for the full list of available options. */
  // eslint-disable-next-line flowtype/no-weak-types
  popperOptions: any;
};

export type TetherStateT = {
  isMounted: boolean;
};
