/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-disable flowtype/generic-spacing */
import * as React from 'react';

import {OverrideT} from '../helpers/overrides.js';
import {KIND, PLACEMENT, TYPE} from './constants.js';

export type KindTypeT = typeof KIND[keyof typeof KIND];
export type NotificationTypeT = typeof TYPE[keyof typeof TYPE];
export type PlacementTypeT = typeof PLACEMENT[keyof typeof PLACEMENT];

export type SharedStylePropsArgT = {
  $color?: string;
  $size?: number | string;
  $kind: KindTypeT;
  $type: NotificationTypeT;
  $closeable: boolean;
  $isRendered: boolean;
  $isVisible: boolean;
};

export type ToasterSharedStylePropsArgT = {
  $placement: PlacementTypeT;
};

export type OverridesT = {
  Body?: OverrideT<SharedStylePropsArgT>;
  CloseIcon?: OverrideT<SharedStylePropsArgT>;
  InnerContainer?: OverrideT<SharedStylePropsArgT>;
};

export type ComponentRenderPropT = (props: {
  dismiss: () => void;
}) => React.ReactNode;

export type ChildT = React.ReactNode;

export type ChildrenT = React.ChildrenArray<ChildT>;

export type ToastPrivateStateT = {
  isVisible: boolean;
  isRendered: boolean;
};

export type ToastPropsT = {
  /** The number of milliseconds to wait before automatically dismissing a
   * notification. This behavior is disabled when the value is set to 0.*/
  autoHideDuration: number;
  /** Toast notification content. The children-as-function
   *  receives a dismiss method that can be called to
   * dismiss the notification and can be used as a
   * handler for an action inside the toast content. */
  children: ChildrenT | ComponentRenderPropT;
  /** When set to true a close button is displayed and the notification can be dismissed by a user. */
  closeable: boolean;
  /** Defines the type of notification. */
  kind: KindTypeT;
  notificationType: NotificationTypeT;
  /** A callback function called when a notification is dismissed. */
  onClose: () => unknown;
  onBlur: (e: Event) => unknown;
  onFocus: (e: Event) => unknown;
  onMouseEnter: (e: Event) => unknown;
  onMouseLeave: (e: Event) => unknown;
  'data-baseweb'?: string;
  overrides: OverridesT;
  key: React.Key;
};

export type ToastPropsShapeT = Partial<Omit<ToastPropsT, 'children'>>;

export type ToasterOverridesT = {
  Root?: OverrideT<ToasterSharedStylePropsArgT>;
  ToastBody?: OverrideT<SharedStylePropsArgT>;
  ToastCloseIcon?: OverrideT<SharedStylePropsArgT>;
};

export type ToasterPropsT = {
  overrides: ToasterOverridesT;
  placement: PlacementTypeT;
  usePortal: boolean;
  /** The number of milliseconds to wait before automatically dismissing a
   * notification. This behavior is disabled when the value is set to 0.*/
  autoHideDuration: number;
};
export type ToasterContainerStateT = {
  isMounted: boolean;
  toasts: Array<ToastPropsShapeT>;
};
