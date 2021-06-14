/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {StatefulMenu, OptionProfile} from '../index.js';

const ITEMS = Array.from({length: 4}, () => ({
  title: 'David Smith',
  subtitle: 'Senior Engineering Manager',
  body: 'Uber Everything',
  imgUrl: 'https://via.placeholder.com/60x60',
}));

export default function Scenario() {
  return (
    <StatefulMenu
      items={ITEMS}
      overrides={{
        List: {
          style: {
            width: '350px',
          },
        },
        Option: {
          component: OptionProfile,
          props: {
            getProfileItemLabels: ({title, subtitle, body}) => ({
              title,
              subtitle,
              body,
            }),
            getProfileItemImg: item => item.imgUrl,
            getProfileItemImgText: item => item.title,
          },
        },
      }}
    />
  );
}
