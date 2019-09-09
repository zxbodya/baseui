/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import {styled} from '../styles/index';
import {SIZE} from '../input/index';

export const IconWrapper = styled<
  'div',
  {
    // todo: incorrect flow type
    $size: keyof typeof SIZE;
  }
>('div', props => {
  const {$size, $theme} = props;
  const margin: {[k in keyof typeof SIZE]: string} = {
    [SIZE.compact]: $theme.sizing.scale500,
    [SIZE.default]: $theme.sizing.scale600,
    [SIZE.large]: $theme.sizing.scale700,
  };
  return {
    //$FlowFixMe
    [$theme.direction === 'rtl' ? 'marginRight' : 'marginLeft']: margin[$size],
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  };
});
