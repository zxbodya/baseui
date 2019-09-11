/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from './stateful-container';
import Datepicker from './datepicker';
import {StatefulDatepickerPropsT, DatepickerPropsT} from './types';

const StatefulComponent: React.FC<
  StatefulDatepickerPropsT<DatepickerPropsT> & Omit<DatepickerPropsT, keyof StatefulDatepickerPropsT<DatepickerPropsT>>
> = props => (
  <StatefulContainer {...props}>
    {extendedProps => <Datepicker {...extendedProps} />}
  </StatefulContainer>
);

StatefulComponent.defaultProps = {
  initialState: {},
  stateReducer: (type, nextState) => nextState,
  onChange: () => {},
};

export default StatefulComponent;
