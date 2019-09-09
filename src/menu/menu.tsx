/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {LocaleContext} from '../locale/index';
// Components
import {StyledList, StyledEmptyState} from './styled-components';
import OptionList from './option-list';
import {getOverrides} from '../helpers/overrides';
// Types
import {RenderItemPropsT, StatelessMenuPropsT} from './types';
import {LocaleT} from '../locale/types';

export default function Menu(props: StatelessMenuPropsT) {
  const {
    activedescendantId,
    getRequiredItemProps = (item, index) => ({} as RenderItemPropsT),
    items,
    noResultsMsg,
    overrides = {},
    rootRef = React.createRef(),
    focusMenu = () => {},
    unfocusMenu = () => {},
  } = props;

  const [List, listProps] = getOverrides(overrides.List, StyledList);
  const [Option, optionProps] = getOverrides(overrides.Option, OptionList);
  const [EmptyState, emptyStateProps] = getOverrides(
    overrides.EmptyState,
    StyledEmptyState,
  );
  return (
    <LocaleContext.Consumer>
      {(locale: LocaleT) => (
        <List
          aria-activedescendant={activedescendantId || null}
          role="listbox"
          ref={rootRef}
          onMouseEnter={focusMenu}
          onMouseOver={focusMenu}
          onFocus={focusMenu}
          onBlur={unfocusMenu}
          tabIndex={0}
          data-baseweb="menu"
          {...listProps}
        >
          {!items || !items.length ? (
            <EmptyState {...emptyStateProps}>
              {noResultsMsg || locale.menu.noResultsMsg}
            </EmptyState>
          ) : (
            items.map((item, index) => {
              const {
                disabled,
                isFocused,
                isHighlighted,
                ref,
                resetMenu = () => {},
                ...restProps
              } = getRequiredItemProps(item, index);

              return (
                <Option
                  key={index}
                  item={item}
                  overrides={overrides}
                  resetMenu={resetMenu}
                  role="option"
                  $disabled={disabled}
                  ref={ref}
                  $isFocused={isFocused}
                  $isHighlighted={isHighlighted}
                  aria-selected={isHighlighted && isFocused}
                  {...restProps}
                  {...optionProps}
                />
              );
            })
          )}
        </List>
      )}
    </LocaleContext.Consumer>
  );
}
