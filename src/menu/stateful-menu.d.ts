import * as React from 'react';
import type { StatefulMenuPropsT, StatelessMenuPropsT } from './types';
export default class StatefulMenu extends React.PureComponent<StatefulMenuPropsT & Omit<StatelessMenuPropsT, keyof StatefulMenuPropsT>> {
    render(): JSX.Element;
}
