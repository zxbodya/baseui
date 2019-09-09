/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React, {ComponentProps} from 'react';

import {
  StyledRoot,
  StyledFlagContainer,
  StyledDialCode,
  StyledCountrySelectDropdownListItem as DefaultListItem,
  StyledCountrySelectDropdownFlagColumn as DefaultFlagColumn,
  StyledCountrySelectDropdownNameColumn as DefaultNameColumn,
  StyledCountrySelectDropdownDialcodeColumn as DefaultDialcodeColumn,
} from './styled-components';
import {COUNTRIES} from './constants';
import {Block} from '../block/index';
import {Select as DefaultSelect} from '../select/index';
import {PLACEMENT} from '../popover/index';
import {getOverrides, mergeOverrides} from '../helpers/overrides';
import defaultProps from './default-props';
import {iso2FlagEmoji} from './utils';

import {CountryT, CountrySelectPropsT} from './types';

CountrySelect.defaultProps = {
  disabled: defaultProps.disabled,
  inputRef: {current: null},
  maxDropdownHeight: defaultProps.maxDropdownHeight,
  maxDropdownWidth: defaultProps.maxDropdownWidth,
  overrides: {},
  size: defaultProps.size,
};

const DropdownListItem = React.forwardRef<
  any,
  ComponentProps<typeof DefaultListItem>
>((props, ref) => {
  const {children, ...rest} = props;
  return (
    <DefaultListItem ref={ref} {...rest}>
      {props.children}
    </DefaultListItem>
  );
});

function DropdownOptionContent(props) {
  return <>{props.children}</>;
}

export default function CountrySelect(props: CountrySelectPropsT) {
  const {
    country,
    disabled,
    error,
    inputRef,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    onCountryChange,
    overrides,
    positive,
    required,
    size,
  } = props;
  const sharedProps = {
    $disabled: disabled,
    $error: error,
    $positive: positive,
    $required: required,
    $size: size,
  };
  const options = Object.values(COUNTRIES);
  const scrollIndex = Math.min(
    // $FlowFixMe
    options.findIndex(opt => opt.id === country.id) + 5,
    options.length - 1,
  );
  const baseOverrides = {
    Root: {
      component: StyledRoot,
    },
    ControlContainer: {
      style: props => {
        if (!props.$isFocused && !props.$isPseudoFocused) {
          return {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          };
        }
      },
    },
    IconsContainer: {
      style: {
        paddingRight: '0',
      },
    },
    SingleValue: {
      style: {
        display: 'flex',
        alignItems: 'center',
      },
    },
    StatefulMenu: {
      props: {
        initialState: {
          isFocused: true,
          highlightedIndex: scrollIndex,
        },
      },
    },
    DropdownContainer: {
      style: {
        width: maxDropdownWidth,
        maxWidth: 'calc(100vw - 10px)',
      },
    },
    Dropdown: {
      props: {
        $country: country,
        $maxDropdownHeight: maxDropdownHeight,
        $mapIsoToLabel: mapIsoToLabel,
        $overrides: {
          CountrySelectDropdown: overrides.CountrySelectDropdown,
          CountrySelectDropdownListItem:
            overrides.CountrySelectDropdownListItem,
          CountrySelectDropdownFlagColumn:
            overrides.CountrySelectDropdownFlagColumn,
          CountrySelectDropdownNameColumn:
            overrides.CountrySelectDropdownNameColumn,
          CountrySelectDropdownDialcodeColumn:
            overrides.CountrySelectDropdownDialcodeColumn,
          FlagContainer: overrides.FlagContainer,
        },
      },
    },
    DropdownListItem: {
      component: DropdownListItem,
    },
    OptionContent: {
      component: DropdownOptionContent,
    },
    Popover: {
      props: {
        placement: PLACEMENT.bottomLeft,
      },
    },
  };

  const [Select, selectProps] = getOverrides(
    overrides.CountrySelect,
    DefaultSelect,
  );
  // $FlowFixMe
  const selectOverrides = mergeOverrides(baseOverrides, {
    Dropdown: overrides.CountrySelectDropdown,
    DropdownListItem: overrides.CountrySelectDropdownListItem,
  });
  // @ts-ignore
  selectProps.overrides = mergeOverrides(
    selectOverrides,
    // @ts-ignore
    selectProps.overrides,
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
  const [DialCode, dialCodeProps] = getOverrides(
    overrides.DialCode,
    StyledDialCode,
  );

  return (
    <Block display="flex" alignItems="center">
      <Select
        clearable={false}
        disabled={disabled}
        getOptionLabel={({option, optionState}) => {
          const iso = option.id;
          return (
            <>
              <FlagColumn {...flagColumnProps}>
                <FlagContainer
                  $iso={iso}
                  data-iso={iso}
                  {...flagContainerProps}
                >
                  {iso2FlagEmoji(iso)}
                </FlagContainer>
              </FlagColumn>
              <NameColumn {...nameColumnProps}>
                {mapIsoToLabel ? mapIsoToLabel(iso) : option.label}
              </NameColumn>
              <Dialcode {...dialcodeProps}>{option.dialCode}</Dialcode>
            </>
          );
        }}
        getValueLabel={(value: {option: CountryT}) => {
          const iso = value.option.id;
          return (
            <FlagContainer
              $iso={iso}
              data-iso={iso}
              {...sharedProps}
              {...flagContainerProps}
            >
              {iso2FlagEmoji(iso)}
            </FlagContainer>
          );
        }}
        error={error}
        maxDropdownHeight={maxDropdownHeight}
        onChange={event => {
          onCountryChange(event);
          // After choosing a country, shift focus to the text input
          if (inputRef && inputRef.current) {
            inputRef.current.focus();
          }
        }}
        options={options}
        positive={positive}
        required={required}
        searchable={false}
        size={size}
        value={[country]}
        {...selectProps}
      />
      <DialCode {...sharedProps} {...dialCodeProps}>
        {country.dialCode}
      </DialCode>
    </Block>
  );
}
