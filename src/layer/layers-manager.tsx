/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {LayersManagerPropsT, LayersContextT} from './types';

export const {Provider, Consumer}: React.Context<LayersContextT> =
  // todo: incorrect default value
  React.createContext({} as LayersContextT);

export default class LayersManager extends React.Component<
  LayersManagerPropsT
> {
  host: {
    current: HTMLDivElement | null;
  } = React.createRef();

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <Consumer>
        {({host}) => {
          if (__DEV__) {
            if (host !== undefined) {
              // eslint-disable-next-line no-console
              console.warn(
                'There is a LayersManager already exists in your application. It is not recommended to have more than one LayersManager in an application.',
              );
            }
          }
          return (
            <Provider
              value={{
                host: host || this.host.current,
                zIndex: this.props.zIndex,
              }}
            >
              <div>{this.props.children}</div>
              <div ref={this.host} />
            </Provider>
          );
        }}
      </Consumer>
    );
  }
}
