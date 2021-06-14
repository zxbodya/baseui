/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import AvatarCustomInitials from './avatar-custom-initials.scenario';
import AvatarError from './avatar-error.scenario';
import AvatarNoSrc from './avatar-no-src.scenario';
import AvatarDefault from './avatar.scenario';

export const CustomInitials = () => <AvatarCustomInitials />;
export const Error = () => <AvatarError />;
export const NoSrc = () => <AvatarNoSrc />;
export const Avatar = () => <AvatarDefault />;
