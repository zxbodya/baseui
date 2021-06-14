/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';

import {StatefulPinCode} from '../index';

export default function Scenario() {
  return (
    <>
      <StatefulPinCode disabled />
      <br />
      <StatefulPinCode error />
      <br />
      <StatefulPinCode positive />
      <br />
    </>
  );
}
