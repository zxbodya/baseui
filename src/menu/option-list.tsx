/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {getOverrides} from '../helpers/overrides.js';

import {OPTION_LIST_SIZE} from './constants.js';
import MaybeChildMenu from './maybe-child-menu.js';
import {StyledListItem} from './styled-components.js';
import {OptionListPropsT} from './types.js';

function OptionList(props: OptionListPropsT, ref: React.RefObject<any>) {
  const {
    getChildMenu,
    getItemLabel = item => (item ? item.label : ''),
    item,
    onMouseEnter = () => {},
    overrides = {},
    resetMenu = () => {},
    size = OPTION_LIST_SIZE.default,
    $isHighlighted,
    ...restProps
  } = props;

  const [ListItem, listItemProps] = getOverrides(
    overrides.ListItem,
    StyledListItem,
  );

  return (
    <MaybeChildMenu
      getChildMenu={getChildMenu}
      isOpen={!!$isHighlighted}
      item={item}
      resetParentMenu={resetMenu}
    >
      <ListItem
        ref={ref}
        onMouseEnter={onMouseEnter}
        $size={size}
        $isHighlighted={$isHighlighted}
        {...restProps}
        {...listItemProps}
      >
        {getItemLabel({isHighlighted: $isHighlighted, ...item})}
      </ListItem>
    </MaybeChildMenu>
  );
}

function areEqualShallow(a, b) {
  if (!a || !b) return false;

  for (var key in a) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

function compare(prevProps, nextProps) {
  return (
    prevProps.$isHighlighted === nextProps.$isHighlighted &&
    prevProps.$isFocused === nextProps.$isFocused &&
    areEqualShallow(prevProps.item, nextProps.item) &&
    areEqualShallow(prevProps.overrides, nextProps.overrides) &&
    prevProps.size === nextProps.size &&
    prevProps.getItemLabel === nextProps.getItemLabel &&
    prevProps.getChildMenu === nextProps.getChildMenu &&
    prevProps.resetMenu === nextProps.resetMenu
  );
}

const forwarded = React.forwardRef<HTMLElement, OptionListPropsT>(OptionList);
forwarded.displayName = 'OptionList';

export default React.memo<OptionListPropsT>(forwarded, compare);
