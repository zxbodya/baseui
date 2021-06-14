/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import React from 'react';
import PaymentCardDefault from './payment-card.scenario';
import StatefulPaymentCard from './stateful-payment-card.scenario';

export const PaymentCard = () => <PaymentCardDefault />;
export const Stateful = () => <StatefulPaymentCard />;
