/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {List, AutoSizer} from 'react-virtualized';
import defaultProps from './default-props';
import {
  StyledFlagContainer,
  StyledCountrySelectDropdownContainer as DefaultContainer,
  StyledCountrySelectDropdownListItem as DefaultListItem,
  StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn,
  StyledCountrySelectDropdownNameColumn as DefaultNameColumn,
  StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn,
} from './styled-components';
import {getOverrides} from '../helpers/overrides';
import {iso2FlagEmoji} from './utils';

import {CountrySelectDropdownPropsT} from './types';
import {ComponentProps} from 'react';

CountrySelectDropdown.defaultProps = {
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  overrides: {},
};

function CountrySelectDropdown(
  props: CountrySelectDropdownPropsT & {
    $forwardedRef: React.Ref<any>;
  },
) {
  const {
    $country: country,
    $forwardedRef: forwardedRef,
    $maxDropdownHeight: maxDropdownHeight,
    $mapIsoToLabel: mapIsoToLabel,
    $overrides: overrides,
  } = props;

  const children = React.Children.toArray(props.children);

  const [Container, containerProps] = getOverrides(
    overrides.CountrySelectDropdown,
    DefaultContainer,
  );
  const [ListItem, listItemProps] = getOverrides(
    overrides.CountrySelectDropdownListItem,
    DefaultListItem,
  );
  const [FlagColumn, flagColumnProps] = getOverrides(
    overrides.CountrySelectDropdownFlagColumn,
    DefaultFlagColumn,
  );
  const [FlagContainer, flagContainerProps] = getOverrides(
    overrides.FlagContainer,
    StyledFlagContainer,
  );
  const [NameColumn, nameColumnProps] = getOverrides(
    overrides.CountrySelectDropdownNameColumn,
    DefaultNameColumn,
  );
  const [Dialcode, dialcodeProps] = getOverrides(
    overrides.CountrySelectDropdownDialcodeColumn,
    DefaultDialcodeColumn,
  );
  const scrollIndex = Math.min(
    children.findIndex(opt => opt.props.item.id === country.id) + 5,
    children.length - 1,
  );
  return (
    <Container
      ref={forwardedRef}
      $height={maxDropdownHeight}
      {...containerProps}
    >
      <AutoSizer>
        {({height, width}) => {
          return (
            <List
              role="listbox"
              height={height}
              width={width}
              rowCount={children.length}
              rowHeight={42}
              scrollToIndex={scrollIndex}
              rowRenderer={({index, key, style}) => {
                // resetMenu and getItemLabel should not end up on native html elements
                const {resetMenu, getItemLabel, ...rest} = children[
                  index
                ].props;
                const iso = children[index].props.item.id;
                return (
                  <ListItem
                    key={key}
                    style={style}
                    {...rest}
                    {...listItemProps}
                    data-iso={iso}
                  >
                    <FlagColumn {...flagColumnProps}>
                      <FlagContainer
                        $iso={iso}
                        data-iso={iso}
                        {...flagContainerProps}
                      >
                        ABC {iso2FlagEmoji(iso)}
                      </FlagContainer>
                    </FlagColumn>
                    <NameColumn {...nameColumnProps}>
                      {mapIsoToLabel
                        ? mapIsoToLabel(iso)
                        : children[index].props.item.label}
                    </NameColumn>
                    <Dialcode {...dialcodeProps}>
                      {children[index].props.item.dialCode}
                    </Dialcode>
                  </ListItem>
                );
              }}
            />
          );
        }}
      </AutoSizer>
    </Container>
  );
}

export default React.forwardRef<
  any,
  ComponentProps<typeof CountrySelectDropdown>
>((props, ref) => <CountrySelectDropdown {...props} $forwardedRef={ref} />);
