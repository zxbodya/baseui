/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import isValid from 'date-fns/isValid/index';
import isAfter from 'date-fns/isAfter/index';

import {MaskedInput} from '../input/index';
import {Popover, PLACEMENT} from '../popover/index';
import Calendar from './calendar';
import {formatDate} from './utils/index';
import {getOverrides} from '../helpers/overrides';
import {LocaleContext} from '../locale/index';
import {DatepickerPropsT} from './types';

import {ChangeEvent} from 'react';

export default class Datepicker extends React.Component<
  DatepickerPropsT,
  {
    calendarFocused: boolean;
    isOpen: boolean;
    isPseudoFocused: boolean;
    lastActiveElm: HTMLElement | undefined | null;
    inputValue?: string;
    isInputUsed?: boolean;
  }
> {
  static defaultProps = {
    'aria-describedby': 'datepicker--screenreader--message--input',
    value: null,
  };

  calendar: HTMLElement | undefined | null;

  state = {
    calendarFocused: false,
    isOpen: false,
    isPseudoFocused: false,
    lastActiveElm: null,
    inputValue: this.formatDisplayValue(this.props.value) || '',
    isInputUsed: false,
  };

  onChange = (data: {date: Date | undefined | null | Array<Date>}) => {
    const {date} = data;
    let isOpen = false;
    let isPseudoFocused = false;
    let calendarFocused = false;
    if (Array.isArray(date) && this.props.range && date.length < 2) {
      isOpen = true;
      isPseudoFocused = true;
      calendarFocused = null;
    } else if (this.state.lastActiveElm) {
      this.state.lastActiveElm.focus();
    }
    this.setState({
      isOpen,
      isPseudoFocused,
      ...(calendarFocused === null ? {} : {calendarFocused}),
      inputValue: this.formatDisplayValue(date),
    });
    this.props.onChange && this.props.onChange(data);
  };

  formatDate(
    date: Date | undefined | null | Array<Date>,
    formatString: string,
  ) {
    if (!date) {
      return '';
    } else if (Array.isArray(date)) {
      return date.map(day => formatDate(day, formatString)).join(' - ');
    } else {
      return formatDate(date, formatString);
    }
  }

  formatDisplayValue(date: Date | undefined | null | Array<Date>) {
    const formatDisplayValue = this.props.formatDisplayValue || this.formatDate;
    return formatDisplayValue(date, this.props.formatString || 'yyyy/MM/dd');
  }

  open = () => {
    this.setState({
      isOpen: true,
      isPseudoFocused: true,
    });
  };

  close = () => {
    const isPseudoFocused = false;
    this.setState(
      {
        isOpen: false,
        isPseudoFocused,
        calendarFocused: false,
      },
      this.props.onClose,
    );
  };

  handleEsc = () => {
    if (this.state.lastActiveElm) {
      this.state.lastActiveElm.focus();
    }
    this.close();
  };

  handleInputBlur = () => {
    if (!this.state.isPseudoFocused) {
      this.close();
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    const date = [];

    this.setState({
      inputValue,
      isInputUsed: true,
    });

    if (this.props.range) {
      const dates = inputValue.split(' - ');
      const startDate = new Date(dates[0]);
      const endDate = new Date(dates[1]);
      date.push(startDate);
      date.push(endDate);
    } else {
      date.push(new Date(inputValue));
    }

    isValid(date[0]) &&
      // if it's a range selector, make sure that the endDate is after the startDate
      (date[1] ? isValid(date[1]) && isAfter(date[1], date[0]) : true) &&
      this.props.onChange &&
      this.props.onChange({
        date,
      });
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (!this.state.isOpen && event.keyCode === 40) {
      this.open();
    } else if (this.state.isOpen && event.key === 'ArrowDown') {
      // next line prevents the page jump on the initial arrowDown
      event.preventDefault();
      this.focusCalendar();
    } else if (this.state.isOpen && event.keyCode === 9) {
      this.close();
    }
  };

  focusCalendar = () => {
    if (__BROWSER__) {
      const lastActiveElm = document.activeElement;
      this.setState({
        calendarFocused: true,
        lastActiveElm,
      });
    }
  };

  render() {
    const {overrides = {}} = this.props;
    const [InputComponent, inputProps] = getOverrides(
      overrides.Input,
      MaskedInput,
    );
    const [PopoverComponent, popoverProps] = getOverrides(
      overrides.Popover,
      Popover,
    );

    return (
      <LocaleContext.Consumer>
        {locale => (
          <React.Fragment>
            <PopoverComponent
              mountNode={this.props.mountNode}
              placement={PLACEMENT.bottom}
              isOpen={this.state.isOpen}
              onClickOutside={event => {
                // Required to check that items rendered in a sub-popover does not trigger close.
                // For example, upon selecting an option from the month dropdown it would cause
                // this code to run since the two popovers are DOM siblings rather than parent/child.
                // There's likely a more robust way to check this, but ignores clicks from elements
                // that are select options for now.
                function isOption(element) {
                  if (!element) return false;
                  return element.getAttribute('role') === 'option';
                }
                if (
                  isOption(event.target) ||
                  isOption(event.target.parentElement)
                ) {
                  return;
                }

                this.close();
              }}
              onEsc={this.handleEsc}
              content={
                <Calendar
                  autoFocusCalendar={this.state.calendarFocused}
                  trapTabbing={true}
                  value={this.props.value}
                  {...this.props}
                  onChange={this.onChange}
                />
              }
              {...popoverProps}
            >
              <span>
                <InputComponent
                  aria-disabled={this.props.disabled}
                  aria-label={
                    this.props['aria-label'] || locale.datepicker.ariaLabel
                  }
                  error={this.props.error}
                  positive={this.props.positive}
                  aria-labelledby={this.props['aria-labelledby']}
                  aria-describedby={this.props['aria-describedby']}
                  aria-required={this.props.required || null}
                  disabled={this.props.disabled}
                  value={this.state.inputValue}
                  onFocus={this.open}
                  onBlur={this.handleInputBlur}
                  onKeyDown={this.handleKeyDown}
                  onChange={this.handleInputChange}
                  placeholder={
                    this.props.placeholder || this.props.range
                      ? 'YYYY/MM/DD - YYYY/MM/DD'
                      : 'YYYY/MM/DD'
                  }
                  mask={
                    this.props.mask || this.props.range
                      ? '9999/99/99 - 9999/99/99'
                      : '9999/99/99'
                  }
                  required={this.props.required}
                  {...inputProps}
                />
              </span>
            </PopoverComponent>
            <p
              id="datepicker--screenreader--message--input"
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                margin: '-1px',
                border: 0,
                padding: 0,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                clipPath: 'inset(100%)',
              }}
            >
              {locale.datepicker.screenReaderMessageInput}
            </p>
          </React.Fragment>
        )}
      </LocaleContext.Consumer>
    );
  }
}
