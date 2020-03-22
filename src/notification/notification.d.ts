import * as React from 'react';
import type { ToastPropsT, ToastPropsShapeT } from '../toast/types';
export default class Notification extends React.Component<ToastPropsT> {
    static defaultProps: ToastPropsShapeT;
    render(): JSX.Element;
}
