/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';

import {NestedMenuContext} from './nested-menus';
import {Popover} from '../popover/index';
import type {OverrideT} from '../helpers/overrides';
import {getOverrides, mergeOverrides} from '../helpers/overrides';

type PropsT = {
  children: React.ReactNode;
  getChildMenu: ((item: any) => React.ReactNode) | undefined | null;
  isOpen: boolean;
  item: any;
  resetParentMenu: () => void;
  renderAll?: boolean;
  onClick?: (event: React.MouseEvent) => unknown;
  overrides?: {
    ChildMenuPopover?: OverrideT;
  };
};

export default function MaybeChildMenu(props: PropsT): React.ReactElement | null {
  if (!props.getChildMenu) {
    // @ts-ignore todo: children should be of type ReactElement or null
    return props.children;
  }

  const ChildMenu = props.getChildMenu(props.item);
  if (!ChildMenu) {
    // @ts-ignore todo: children should be of type ReactElement or null
    return props.children;
  }
  const {overrides = {}} = props;
  const [PopoverOverride, popoverProps] = getOverrides(
    overrides.ChildMenuPopover,
    Popover,
  );

  return (
    <NestedMenuContext.Consumer>
      {ctx => {
        return (
          <PopoverOverride
            focusLock={false}
            isOpen={props.isOpen}
            renderAll={props.renderAll}
            content={ChildMenu}
            ignoreBoundary
            mountNode={ctx.mountRef.current ? ctx.mountRef.current : undefined}
            onClick={props.onClick}
            onMouseEnterDelay={30}
            onMouseLeaveDelay={30}
            onEsc={props.resetParentMenu}
            placement="rightTop"
            {...popoverProps}
            overrides={mergeOverrides(
              {
                Body: {
                  props: {
                    // Adds mouseleave to popover body so that child menu closes when user mouses out.
                    onMouseLeave: props.resetParentMenu,
                    // Trap tabbing when focused on a child menu. Popover mounts the element at the end of
                    // the html body by default. If a user was to tab to the next element it would navigate
                    // to elements not within the immediate area surrounding the menu.
                    onKeyDown: (e: KeyboardEvent) => {
                      if (e.keyCode === 9) {
                        e.preventDefault();
                      }
                    },
                  },
                },
              },
              // $FlowFixMe - getOverrides' return type for props is {}
              popoverProps.overrides,
            )}
          >
            {props.children}
          </PopoverOverride>
        );
      }}
    </NestedMenuContext.Consumer>
  );
}
