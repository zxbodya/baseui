/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {
  PhoneInput,
  COUNTRIES,
  CountrySelectDropdown,
  StyledFlag,
} from '../../phone-input/index';
import type {CountryIsoT} from '../../phone-input/index';

function CustomFlag(props: {children: React.ReactNode; $iso: CountryIsoT}) {
  const {children, ...rest} = props;
  return <StyledFlag iso={props.$iso} {...rest} />;
}

export default function Scenario() {
  const [text, setText] = React.useState('');
  const [country, setCountry] = React.useState(COUNTRIES.US);
  return (
    <PhoneInput
      text={text}
      country={country}
      onTextChange={event => {
        setText(event.currentTarget.value);
      }}
      // eslint-disable-next-line flowtype/no-weak-types
      onCountryChange={(event: any) => {
        setCountry(event.option);
      }}
      overrides={{
        FlagContainer: {
          component: CustomFlag,
        },
        CountrySelect: {
          props: {
            overrides: {
              Dropdown: {
                component: CountrySelectDropdown,
              },
            },
          },
        },
      }}
    />
  );
}
