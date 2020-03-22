import * as React from 'react';
import type { ComponentPropsT, SharedStylePropsT } from './types';
declare class Component extends React.Component<ComponentPropsT> {
    static defaultProps: Partial<ComponentPropsT>;
    getSharedProps(): Omit<SharedStylePropsT, 'children'>;
    render(): JSX.Element;
}
export default Component;
