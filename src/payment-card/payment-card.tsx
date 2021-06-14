/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import * as valid from 'card-validator';

import {addGaps, getCaretPosition} from './utils';

import {getOverrides} from '../helpers/overrides';
import {Input, SIZE} from '../input/index';
import {ThemeContext} from '../styles/theme-provider';

import AmexIcon from './icons/amex';
import DinersClubIcon from './icons/dinersclub';
import DiscoverIcon from './icons/discover';
import EloIcon from './icons/elo';
import GenericIcon from './icons/generic';
import JcbIcon from './icons/jcb';
import MaestroIcon from './icons/maestro';
import MastercardIcon from './icons/mastercard';
import UnionPayIcon from './icons/unionpay';
import VisaIcon from './icons/visa';

import {IconWrapper as StyledIconWrapper} from './styled-components';

import type {PaymentCardPropsT} from './types';

const CardTypeToComponent = {
  visa: VisaIcon,
  mastercard: MastercardIcon,
  'american-express': AmexIcon,
  'diners-club': DinersClubIcon,
  discover: DiscoverIcon,
  jcb: JcbIcon,
  unionpay: UnionPayIcon,
  maestro: MaestroIcon,
  elo: EloIcon,
  generic: GenericIcon,
};

class PaymentCard extends React.Component<PaymentCardPropsT> {
  caretPosition = 0;
  inRef: HTMLInputElement | undefined | null = null;

  static defaultProps = {
    autoComplete: 'cc-number',
    autoFocus: false,
    disabled: false,
    name: '',
    error: false,
    onBlur: () => {},
    onFocus: () => {},
    overrides: {},
    required: false,
    size: 'default',
    startEnhancer: null,
    endEnhancer: null,
  };

  componentDidUpdate(prevProps: PaymentCardPropsT) {
    if (this.inRef && prevProps.value !== this.props.value) {
      this.inRef.setSelectionRange(this.caretPosition, this.caretPosition);
    }
  }
  render() {
    const {
      overrides = {},
      size = SIZE.default,
      onChange,
      value,
      'aria-label': ariaLabel = 'Please enter a debit or credit card number.',
      ...restProps
    } = this.props;

    const {IconWrapper: IconWrapperOverride, ...restOverrides} = overrides;
    const [IconWrapper, iconWrapperProps] = getOverrides(
      IconWrapperOverride,
      StyledIconWrapper,
    );

    const validatedValue = valid.number(value);
    let gaps: number[] = [];
    let type: string | undefined | null = undefined;
    if (validatedValue.card) {
      gaps = validatedValue.card.gaps || [];
      type = validatedValue.card.type;
    }

    const getBeforeComponent = theme => {
      const iconSize = {
        [SIZE.mini]: theme.sizing.scale600,
        [SIZE.compact]: theme.sizing.scale800,
        [SIZE.default]: theme.sizing.scale900,
        [SIZE.large]: theme.sizing.scale1000,
      };
      return () => (
        <IconWrapper $size={size} {...iconWrapperProps}>
          {React.createElement(
            CardTypeToComponent[type || 'generic'] || GenericIcon,
            {
              size: iconSize[size],
            },
          )}
        </IconWrapper>
      );
    };

    return (
      <ThemeContext.Consumer>
        {theme => (
          <Input
            size={size}
            aria-label={ariaLabel}
            data-baseweb="payment-card-input"
            inputMode="numeric"
            overrides={Object.freeze({
              ...restOverrides,
              Before: getBeforeComponent(theme),
            })}
            onChange={e => {
              const [position, value] = getCaretPosition(
                e.target.value,
                this.props.value ? String(this.props.value) : '',
                e.target.selectionStart,
              );
              this.caretPosition = position;
              this.inRef = e.target;
              e.target.value = value;
              onChange && onChange(e);
            }}
            value={addGaps(gaps, String(value) || '')}
            {...restProps}
          />
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default PaymentCard;
