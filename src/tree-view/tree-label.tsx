/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import {ThemeContext} from '../styles/theme-provider';
import type {TreeLabelT, SharedStylePropsT} from './types';
import {StyledIconContainer, StyledItemContent} from './styled-components';
import ChevronRight from '../icon/chevron-right';
import ChevronDown from '../icon/chevron-down';
import ChevronLeft from '../icon/chevron-left';
import BlankIcon from '../icon/blank';
import {
  getOverride,
  getOverrideProps,
  getOverrides,
} from '../helpers/overrides';

import type {ComponentType} from 'react';

const TreeLabel: ComponentType<TreeLabelT> = ({
  hasChildren,
  isExpanded,
  label,
  overrides = {},
  node,
  isSelected,
  isFocusVisible,
  ...props
}) => {
  const sharedProps: SharedStylePropsT = {
    $isExpanded: !!isExpanded,
    $isSelected: !!isSelected,
    $isFocusVisible: !!isFocusVisible,
    $hasChildren: !!hasChildren,
  };
  const {
    IconContainer: IconContainerOverride,
    ExpandIcon: ExpandIconOverride,
    CollapseIcon: CollapseIconOverride,
    LeafIconContainer: LeafIconContainerOverride,
    LeafIcon: LeafIconOverride,
    TreeItemContent: TreeItemContentOverride,
  } = overrides;
  const IconContainer =
    getOverride(IconContainerOverride) || StyledIconContainer;
  const [Left, LeftProps] = getOverrides(ExpandIconOverride, ChevronLeft);
  const [Right, RightProps] = getOverrides(ExpandIconOverride, ChevronRight);
  const CollapseIcon = getOverride(CollapseIconOverride) || ChevronDown;
  const LeafIconContainer =
    getOverride(LeafIconContainerOverride) || StyledIconContainer;
  const LeafIcon = getOverride(LeafIconOverride) || BlankIcon;
  const TreeItemContent =
    getOverride(TreeItemContentOverride) || StyledItemContent;
  return (
    <TreeItemContent {...sharedProps} {...props}>
      {hasChildren && (
        <IconContainer
          {...sharedProps}
          {...getOverrideProps(IconContainerOverride)}
        >
          {!isExpanded ? (
            <ThemeContext.Consumer>
              {theme =>
                theme.direction === 'rtl' ? (
                  <Left {...sharedProps} {...LeftProps} />
                ) : (
                  <Right {...sharedProps} {...RightProps} />
                )
              }
            </ThemeContext.Consumer>
          ) : (
            <CollapseIcon
              {...sharedProps}
              {...getOverrideProps(CollapseIconOverride)}
            />
          )}
        </IconContainer>
      )}
      {!hasChildren && LeafIcon && (
        <LeafIconContainer
          {...sharedProps}
          {...getOverrideProps(LeafIconContainerOverride)}
        >
          <LeafIcon {...sharedProps} {...getOverrideProps(LeafIconOverride)} />
        </LeafIconContainer>
      )}
      {typeof label === 'function' ? label(node) : label}
    </TreeItemContent>
  );
};

export default TreeLabel;
