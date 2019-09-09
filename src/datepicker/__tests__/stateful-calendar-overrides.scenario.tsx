/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {StatefulCalendar} from '../index.js';

export const name = 'Stateful calendar overrides';

const arrowBtnOverrides = ({$theme}) => {
  return {
    ':focus': {
      backgroundColor: $theme.colors.positive500,
    },
  };
};

export const component = () => (
  <StatefulCalendar
    initialState={{value: new Date('2019-02-14T10:00:00Z')}}
    overrides={{
      CalendarHeader: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.positive,
        }),
      },
      MonthHeader: {
        style: ({$theme}) => ({
          backgroundColor: $theme.colors.positive,
        }),
      },
      MonthYearSelectButton: {
        style: ({$theme}) => ({
          ':focus': {
            backgroundColor: $theme.colors.positive500,
            outline: 'none',
          },
        }),
      },
      PrevButton: {
        style: arrowBtnOverrides,
      },
      NextButton: {
        style: arrowBtnOverrides,
      },
      Day: {
        style: ({$theme, $selected, $isHovered, $isHighlighted}) => ({
          backgroundColor: $selected
            ? $theme.colors.positive
            : $isHovered || $isHighlighted
            ? $theme.colors.positive100
            : 'transparent',
        }),
      },
    }}
  />
);
