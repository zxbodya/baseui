/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {FileUploader} from '../index';

export const name = 'file-uploader-progress-bar';

export const component = () => (
  <FileUploader
    progressAmount={40}
    progressMessage="Uploading... 8.24 of 45.08MB"
  />
);
