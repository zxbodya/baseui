/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import FocusLock from 'react-focus-lock';

import {Button, KIND, SIZE} from '../button/index';
import {getOverrides} from '../helpers/overrides';
import FilterIcon from '../icon/filter';
import {StatefulPopover, PLACEMENT} from '../popover/index';

import {
  StyledFilterButton,
  StyledFilterContent,
  StyledFilterHeading,
  StyledFilterFooter,
} from './styled-components';
import {FilterProps} from './types';

export default function Filter(props: FilterProps) {
  const {onSelectAll = () => {}, onReset = () => {}, overrides = {}} = props;

  const [MenuButton, menuButtonProps] = getOverrides(
    overrides.MenuButton,
    StyledFilterButton,
  );

  const [Content, contentProps] = getOverrides(
    overrides.Content,
    StyledFilterContent,
  );

  const [Heading, headingProps] = getOverrides(
    overrides.Heading,
    StyledFilterHeading,
  );

  const [Footer, footerProps] = getOverrides(
    overrides.Footer,
    StyledFilterFooter,
  );

  function getIconColor(theme) {
    if (props.disabled) {
      return theme.colors.mono500;
    }

    if (props.active) {
      return theme.colors.colorPrimary;
    }

    return theme.colors.tableFilter;
  }

  function getIconHoverColor(theme) {
    if (props.disabled || props.active) {
      return null;
    }

    return theme.colors.colorPrimary;
  }

  return (
    <StatefulPopover
      placement={PLACEMENT.bottom}
      stateReducer={(_, nextState) => {
        if (props.disabled) {
          return {...nextState, isOpen: false};
        }
        return nextState;
      }}
      content={
        // eslint-disable-next-line jsx-a11y/no-autofocus
        <FocusLock autoFocus={false}>
          <Heading {...headingProps}>Filter Column</Heading>
          <Content {...contentProps}>{props.children}</Content>
          <Footer {...footerProps}>
            <Button
              kind={KIND.minimal}
              size={SIZE.compact}
              onClick={() => {
                onSelectAll();
              }}
            >
              Select All
            </Button>

            <Button
              kind={KIND.minimal}
              size={SIZE.compact}
              onClick={() => {
                onReset();
              }}
            >
              Reset
            </Button>
          </Footer>
        </FocusLock>
      }
    >
      <MenuButton {...menuButtonProps}>
        <FilterIcon
          overrides={{
            Svg: {
              style: ({$theme}) => ({
                color: getIconColor($theme),

                ':hover': {
                  color: getIconHoverColor($theme),
                  cursor: props.disabled ? null : 'pointer',
                },
              }),
            },
          }}
          size={18}
        />
      </MenuButton>
    </StatefulPopover>
  );
}
