/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import StatefulContainer from '../input/stateful-container';
import PaymentCard from './payment-card';
import type {StatefulPaymentCardPropsT} from './types';

export default function StatefulPaymentCard(props: StatefulPaymentCardPropsT) {
  return (
    <StatefulContainer {...props}>
      {(childrenProps: any) => <PaymentCard {...childrenProps} />}
    </StatefulContainer>
  );
}
