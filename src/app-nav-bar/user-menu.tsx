/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {Avatar} from '../avatar/index';
import {Button} from '../button/index';
import {getOverrides, mergeOverrides} from '../helpers/overrides';
import ChevronDownSmallFilled from '../icon/chevron-down';
import ChevronUpSmallFilled from '../icon/chevron-up';
import {MenuAdapter, ListItemLabel, ARTWORK_SIZES} from '../list/index';
import {StatefulMenu, StyledList} from '../menu/index';
import {StatefulPopover, PLACEMENT, TRIGGER_TYPE} from '../popover/index';

import {
  StyledUserMenuButton,
  StyledUserMenuProfileListItem,
} from './styled-components';
import type {UserMenuPropsT, NavItemT, OverridesT} from './types';
import UserProfileTile from './user-profile-tile';
import {defaultMapItemToNode} from './utils';

const MENU_ITEM_WIDTH = '275px';

const UserMenuListItem = React.forwardRef((props, ref) => {
  const {item, mapItemToNode = defaultMapItemToNode} = props;
  // Replace with a user menu item renderer
  return (
    <MenuAdapter
      {...props}
      ref={ref}
      artwork={item.icon || null}
      artworkSize={ARTWORK_SIZES.LARGE}
    >
      <ListItemLabel>{mapItemToNode(item)}</ListItemLabel>
    </MenuAdapter>
  );
});

const svgStyleOverride = ({$theme}) => ({paddingLeft: $theme.sizing.scale200});

export default function UserMenuComponent(
  props: {
    mapItemToNode: (a: NavItemT) => React.ReactNode;
    onItemSelect: (a: NavItemT) => unknown;
    overrides: OverridesT;
  } & UserMenuPropsT,
) {
  // isOpen is used for displaying different arrow icons in open or closed state
  const [isOpen, setIsOpen] = React.useState(false);
  const {userItems = [], username, userImgUrl, overrides = {}} = props;

  const [UserMenuProfileListItem, userMenuProfileListItemProps] = getOverrides(
    overrides.UserMenuProfileListItem,
    StyledUserMenuProfileListItem,
  );

  const [UserMenuButton, userMenuButtonProps] = getOverrides(
    overrides.UserMenuButton,
    Button,
  );
  // $FlowFixMe
  userMenuButtonProps.overrides = mergeOverrides(
    {BaseButton: {component: StyledUserMenuButton}},
    // $FlowFixMe
    userMenuButtonProps.overrides,
  );

  const [UserMenu, userMenuProps] = getOverrides(
    overrides.UserMenu,
    StatefulMenu,
  );
  // $FlowFixMe
  userMenuProps.overrides = mergeOverrides(
    {
      List: {
        component: React.forwardRef(({children, ...restProps}, ref) => (
          <StyledList {...restProps} ref={ref}>
            <UserMenuProfileListItem {...userMenuProfileListItemProps}>
              {/* Replace with a renderer: renderUserProfileTile() */}
              <UserProfileTile
                username={props.username}
                usernameSubtitle={props.usernameSubtitle}
                userImgUrl={props.userImgUrl}
                overrides={overrides}
              />
            </UserMenuProfileListItem>
            {children}
          </StyledList>
        )),
        style: {width: MENU_ITEM_WIDTH},
      },
      ListItem(listItemProps) {
        return (
          <UserMenuListItem
            {...listItemProps}
            mapItemToNode={props.mapItemToNode}
          />
        );
      },
    },
    // $FlowFixMe
    userMenuProps.overrides,
  );

  return (
    <StatefulPopover
      content={({close}) => (
        <UserMenu
          items={userItems}
          onItemSelect={({item}) => {
            props.onItemSelect(item);
            close();
          }}
          {...userMenuProps}
        />
      )}
      dismissOnEsc={true}
      dismissOnClickOutside={true}
      onOpen={() => setIsOpen(true)}
      onClose={() => setIsOpen(false)}
      placement={PLACEMENT.bottomRight}
      popperOptions={{modifiers: {flip: {enabled: false}}}}
      triggerType={TRIGGER_TYPE.click}
    >
      <UserMenuButton {...userMenuButtonProps}>
        <Avatar name={username || ''} src={userImgUrl} size={'32px'} />
        {isOpen ? (
          <ChevronUpSmallFilled
            size={28}
            overrides={{Svg: {style: svgStyleOverride}}}
          />
        ) : (
          <ChevronDownSmallFilled
            size={28}
            overrides={{Svg: {style: svgStyleOverride}}}
          />
        )}
      </UserMenuButton>
    </StatefulPopover>
  );
}
