/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import React, {Children} from 'react';

import {LocaleContext} from '../locale/index';
import ChevronRight from '../icon/chevron-right';
import {BreadcrumbsPropsT} from './types';
import {BreadcrumbLocaleT} from './locale';
import {
  StyledRoot,
  StyledSeparator,
  StyledList,
  StyledListItem,
} from './styled-components';
import {getOverrides, mergeOverrides} from '../helpers/overrides';

type LocaleT = {
  locale?: BreadcrumbLocaleT;
};

export function BreadcrumbsRoot(props: {} & BreadcrumbsPropsT & LocaleT) {
  const {overrides = {}} = props;
  const numChildren = Children.count(props.children);
  const childrenWithSeparators = [];

  const [Root, baseRootProps] = getOverrides(overrides.Root, StyledRoot);
  const [Icon, baseIconProps] = getOverrides(overrides.Icon, ChevronRight);
  const [List, baseListProps] = getOverrides(overrides.List, StyledList);
  const [ListItem, baseListItemProps] = getOverrides(
    overrides.ListItem,
    StyledListItem,
  );
  const [Separator, baseSeparatorProps] = getOverrides(
    overrides.Separator,
    StyledSeparator,
  );

  const iconOverrides = mergeOverrides(
    {Svg: {style: {verticalAlign: 'text-bottom'}}},
    // @ts-ignore
    baseIconProps && baseIconProps.overrides,
  );
  // @ts-ignore
  baseIconProps.overrides = iconOverrides;

  Children.forEach(props.children, (child, index) => {
    childrenWithSeparators.push(
      <ListItem
        key={`breadcrumb-item-${index}`}
        $itemIndex={index}
        {...baseListItemProps}
      >
        {child}
        {index !== numChildren - 1 && (
          <Separator {...baseSeparatorProps} key={`separator-${index}`}>
            <Icon {...baseIconProps} />
          </Separator>
        )}
      </ListItem>,
    );
  });

  return (
    <Root
      aria-label={
        props.ariaLabel || (props.locale ? props.locale.ariaLabel : '')
      }
      data-baseweb="breadcrumbs"
      {...baseRootProps}
    >
      <List {...baseListProps}>{childrenWithSeparators}</List>
    </Root>
  );
}

function Breadcrumbs(props: BreadcrumbsPropsT) {
  return (
    <LocaleContext.Consumer>
      {locale => <BreadcrumbsRoot {...props} locale={locale.breadcrumbs} />}
    </LocaleContext.Consumer>
  );
}

Breadcrumbs.defaultProps = {
  overrides: {},
};

export default Breadcrumbs;
