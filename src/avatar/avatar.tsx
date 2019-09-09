/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {getOverrides} from '../helpers/overrides';

import {
  Avatar as StyledAvatar,
  Initials as StyledInitials,
  Root as StyledRoot,
} from './styled-components';
import {PropsT, StateT} from './types';

function getInitials(name) {
  const words = name.split(' ');
  const initials = words.map(word => word[0]);
  return initials
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default class Avatar extends React.Component<PropsT, StateT> {
  static defaultProps: Partial<PropsT> = {
    overrides: {},
    size: 'scale1000',
  };

  constructor(props: PropsT) {
    super(props);
    this.state = {noImageAvailable: !this.props.src};
  }

  componentDidUpdate(prevProps: PropsT, prevState: StateT) {
    if (prevProps.src !== this.props.src && prevState.noImageAvailable) {
      this.setState({noImageAvailable: false});
    }
  }

  handleError = () => {
    this.setState({noImageAvailable: true});
  };

  render() {
    const {noImageAvailable} = this.state;
    const {name, overrides = {}, size, src} = this.props;
    const [Avatar, avatarProps] = getOverrides(overrides.Avatar, StyledAvatar);
    const [Initials, initialsProps] = getOverrides(
      overrides.Initials,
      StyledInitials,
    );
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);

    return (
      <Root
        aria-label={noImageAvailable ? name : null}
        role={noImageAvailable ? 'img' : null}
        $didImageFailToLoad={noImageAvailable}
        $size={size}
        data-baseweb="avatar"
        {...rootProps}
      >
        {noImageAvailable ? (
          <Initials {...initialsProps}>{getInitials(name)}</Initials>
        ) : (
          <Avatar
            alt={name}
            onError={this.handleError}
            src={src}
            $size={size}
            {...avatarProps}
          />
        )}
      </Root>
    );
  }
}
