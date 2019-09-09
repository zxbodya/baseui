/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {mount} from 'enzyme';
import {STATE_TYPE} from '../constants';

import {StatefulContainer} from '../index';
import {StateReducerT} from '../types';

describe('Stateful container', function() {
  let allProps: any, childFn;
  let wrapper;

  beforeEach(function() {
    const stateReducer: StateReducerT = (type, nextState) => nextState;
    childFn = jest.fn(() => <div>test</div>);
    allProps = {
      children: childFn,
      initialState: {},
      stateReducer: stateReducer,
      prop1: 'some other prop',
    };
  });

  afterEach(function() {
    jest.restoreAllMocks();
    wrapper && wrapper.unmount();
  });

  test('should provide all needed props to children render func', function() {
    wrapper = mount(<StatefulContainer {...allProps} />);
    const actualProps = childFn.mock.calls[0][0];
    expect(actualProps).toMatchObject({
      prop1: allProps.prop1,
    });
  });

  test('should provide initial state as part of state', function() {
    allProps.initialState = {prop3: 'some initial state'};
    wrapper = mount(<StatefulContainer {...allProps} />);
    const actualProps = childFn.mock.calls[0][0];
    expect(actualProps).toMatchObject(allProps.initialState);
  });

  describe('Events', function() {
    let events, stateReducerMock, instance, event;
    event = {target: {value: 'someValue'}};
    const handlers = [
      ['onChange', STATE_TYPE.change, {value: event.target.value}],
    ];
    beforeEach(function() {
      events = {
        onChange: jest.fn(),
      };
      allProps = {...allProps, ...events};
      stateReducerMock = jest.fn();
      allProps.stateReducer = stateReducerMock;
      wrapper = mount(<StatefulContainer {...allProps} />);
      instance = wrapper.instance();
    });

    test.each([handlers[0]])(
      'should call state reducer to apply new state for %s event',
      (eventHandler, type, newState) => {
        // $FlowFixMe
        const handler = instance[eventHandler];
        handler(event);
        expect(stateReducerMock).toHaveBeenCalledWith(
          type,
          newState,
          {},
          event,
        );
      },
    );

    test.each(handlers)(
      'should call handler for %s event if it is present',
      eventHandler => {
        // $FlowFixMe
        const handler = instance[eventHandler];
        handler(event);
        expect(events[eventHandler]).toHaveBeenCalledWith(event);
      },
    );
  });
});
