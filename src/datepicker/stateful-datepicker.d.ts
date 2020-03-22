import * as React from 'react';
import type { StatefulDatepickerPropsT, DatepickerPropsT } from './types';
declare const StatefulComponent: React.FC<StatefulDatepickerPropsT<DatepickerPropsT> & Omit<DatepickerPropsT, keyof StatefulDatepickerPropsT<DatepickerPropsT>>>;
export default StatefulComponent;
