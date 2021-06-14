/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import FileUploaderDisabled from './file-uploader-disabled.scenario';
import FileUploaderError from './file-uploader-error.scenario';
import FileUploaderPostDrop from './file-uploader-post-drop.scenario';
import FileUploaderPreDrop from './file-uploader-pre-drop.scenario';
import FileUploaderProgressBar from './file-uploader-progress-bar.scenario';
import FileUploaderSpinner from './file-uploader-spinner.scenario';
import FileUploaderDefault from './file-uploader.scenario';

export const Disabled = () => <FileUploaderDisabled />;
export const Error = () => <FileUploaderError />;
export const PostDrop = () => <FileUploaderPostDrop />;
export const PreDrop = () => <FileUploaderPreDrop />;
export const ProgressBar = () => <FileUploaderProgressBar />;
export const Spinner = () => <FileUploaderSpinner />;
export const FileUploader = () => <FileUploaderDefault />;
