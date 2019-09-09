/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import Day from './day';
import {StyledWeek} from './styled-components';
import {getStartOfWeek, addDays, isDayDisabled, isSameDay} from './utils/index';
import {WEEKDAYS} from './constants';
import {getOverrides} from '../helpers/overrides';
import {WeekPropsT} from './types';

export default class Week extends React.Component<WeekPropsT> {
  static defaultProps = {
    date: new Date(),
    highlightedDate: null,
    onDayClick: () => {},
    onDayMouseOver: () => {},
    onDayMouseLeave: () => {},
    onChange: () => {},
    overrides: {},
    peekNextMonth: false,
  };

  renderDays = () => {
    const startOfWeek = getStartOfWeek(this.props.date, this.props.locale);
    const days = [];
    // $FlowFixMe
    return days.concat(
      WEEKDAYS.map((offset: number) => {
        const day = addDays(startOfWeek, offset);
        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <Day
            date={day}
            disabled={isDayDisabled(day, this.props)}
            excludeDates={this.props.excludeDates}
            filterDate={this.props.filterDate}
            highlightedDate={this.props.highlightedDate}
            highlighted={isSameDay(day, this.props.highlightedDate)}
            includeDates={this.props.includeDates}
            focusedCalendar={this.props.focusedCalendar}
            range={this.props.range}
            key={offset}
            locale={this.props.locale}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            month={this.props.month}
            onSelect={this.props.onChange}
            onBlur={this.props.onDayBlur}
            onFocus={this.props.onDayFocus}
            onClick={this.props.onDayClick}
            onMouseOver={this.props.onDayMouseOver}
            onMouseLeave={this.props.onDayMouseLeave}
            overrides={this.props.overrides}
            peekNextMonth={this.props.peekNextMonth}
            value={this.props.value}
          />
        );
      }),
    );
  };

  render() {
    const {overrides = {}} = this.props;
    const [Week, weekProps] = getOverrides(overrides.Week, StyledWeek);
    return <Week {...weekProps}>{this.renderDays()}</Week>;
  }
}
