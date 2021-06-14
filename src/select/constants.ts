/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
export {SIZE} from '../input/index';

export const TYPE = {
  select: 'select',
  search: 'search',
};

export const STATE_CHANGE_TYPE = Object.freeze({
  select: 'select',
  remove: 'remove',
  clear: 'clear',
});
