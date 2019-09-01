/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

type Ref = {
  current: HTMLElement | null;
};

type ContextT = {
  addMenuToNesting: (ref: Ref) => void;
  removeMenuFromNesting: (ref: Ref) => void;
  getParentMenu: (ref: Ref) => Ref | undefined | null;
  getChildMenu: (ref: Ref) => Ref | undefined | null;
};

type StateT = {
  menus: Ref[];
};

type PropsT = {
  children: React.ReactNode;
};

export const NestedMenuContext: React.Context<ContextT> = React.createContext<
  ContextT
>({
  addMenuToNesting: () => {},
  removeMenuFromNesting: () => {},
  // @ts-ignore todo: incorrect default value
  getParentMenu: () => {},
  // @ts-ignore todo: incorrect default value
  getChildMenu: () => {},
});

function isSame(a?: HTMLElement | null, b?: HTMLElement | null) {
  if (!a || !b) {
    return false;
  }

  return a.isSameNode(b);
}

export default class NestedMenus extends React.Component<PropsT, StateT> {
  state = {menus: []};

  addMenuToNesting = (ref: Ref) => {
    this.setState({menus: [...this.state.menus, ref]});
  };

  removeMenuFromNesting = (ref: Ref) => {
    const nextMenus = this.state.menus.filter(
      r => !isSame(r.current, ref.current),
    );
    this.setState({menus: nextMenus});
  };

  findMenuIndexByRef = (ref: Ref) => {
    return this.state.menus.findIndex(r => isSame(r.current, ref.current));
  };

  getParentMenu = (ref: Ref): Ref | undefined | null => {
    const index = this.findMenuIndexByRef(ref) - 1;
    return this.state.menus[index];
  };

  getChildMenu = (ref: Ref): Ref | undefined | null => {
    const index = this.findMenuIndexByRef(ref) + 1;
    return this.state.menus[index];
  };

  render() {
    return (
      <NestedMenuContext.Provider
        value={{
          addMenuToNesting: this.addMenuToNesting,
          removeMenuFromNesting: this.removeMenuFromNesting,
          getParentMenu: this.getParentMenu,
          getChildMenu: this.getChildMenu,
        }}
      >
        {this.props.children}
      </NestedMenuContext.Provider>
    );
  }
}
