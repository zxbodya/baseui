/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Calendar from './calendar';
import {CalendarPropsT, StatefulDatepickerPropsT} from './types';

function StatefulComponent(props: StatefulDatepickerPropsT<CalendarPropsT>) {
  return (
    <StatefulContainer {...props}>
      {extendedProps => <Calendar {...extendedProps} />}
    </StatefulContainer>
  );
}

StatefulComponent.defaultProps = {
  initialState: {},
  stateReducer: (type, nextState) => nextState,
  onSelect: () => {},
};

export default StatefulComponent;
