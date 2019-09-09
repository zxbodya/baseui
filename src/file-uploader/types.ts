/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {OverrideT} from '../helpers/overrides.js';

import {
  SyntheticEvent,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  DragEvent,
} from 'react';

export type StylePropsT = {
  $afterFileDrop: boolean;
  $isDisabled: boolean;
  $isDragActive: boolean;
  $isDragAccept: boolean;
  $isDragReject: boolean;
  $isFocused: boolean;
};

export type OverridesT<T> = {
  Root?: OverrideT<T>;
  FileDragAndDrop?: OverrideT<T>;
  ContentMessage?: OverrideT<T>;
  ContentSeparator?: OverrideT<T>;
  HiddenInput?: OverrideT<T>;
  ProgressMessage?: OverrideT<T>;
  ErrorMessage?: OverrideT<T>;
  ButtonComponent?: OverrideT<T>;
};

export type PropsT = {
  // react-dropzone: https://github.com/react-dropzone/react-dropzone/blob/master/typings/react-dropzone.d.ts
  accept?: string | string[];
  /** Disallow clicking on the dropzone container to open file dialog */
  disableClick?: boolean;
  disabled?: boolean;
  getDataTransferItems?: GetDataTransferItemsT;
  maxSize?: number;
  minSize?: number;
  multiple?: boolean;
  name?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => unknown;
  onFocus?: (event: FocusEvent<HTMLElement>) => unknown;
  onBlur?: (event: FocusEvent<HTMLElement>) => unknown;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => unknown;
  onDragStart?: (event: DragEvent<HTMLElement>) => unknown;
  onDragEnter?: (event: DragEvent<HTMLElement>) => unknown;
  onDragOver?: (event: DragEvent<HTMLElement>) => unknown;
  onDragLeave?: (event: DragEvent<HTMLElement>) => unknown;
  onDrop?: DropFilesEventHandlerT;
  onDropAccepted?: DropFileEventHandlerT;
  onDropRejected?: DropFileEventHandlerT;
  onFileDialogCancel?: () => unknown;
  preventDropOnDocument?: boolean;
  // baseui
  errorMessage?: string;
  onCancel?: () => unknown;
  onRetry?: () => unknown;
  overrides?: OverridesT<StylePropsT>;
  progressAmount?: number;
  progressMessage?: string;
};

export type DropFilesEventHandlerT = (
  accepted: File[],
  rejected: File[],
  event: DragEvent<HTMLElement>,
) => unknown;

type DropFileEventHandlerT = (
  acceptedOrRejected: File[],
  event: DragEvent<HTMLElement>,
) => unknown;
type DataTransferEventT =
  | DragEvent<HTMLElement>
  | ChangeEvent<HTMLInputElement>
  | DragEvent<any>
  | SyntheticEvent<any>;
type GetDataTransferItemsT = (
  event: DataTransferEventT,
) => Promise<Array<File | DataTransferItem>>;
