import * as React from 'react';
import type { TabsPropsT, SharedStylePropsArgT } from './types';
export default class Tabs extends React.Component<TabsPropsT> {
    static defaultProps: Partial<TabsPropsT>;
    onChange({ activeKey }: {
        activeKey: string;
    }): void;
    getTabs(): React.DetailedReactHTMLElement<{
        key: any;
        id: any;
        active: boolean;
        disabled: any;
        $orientation: "horizontal" | "vertical";
        onSelect: () => void;
        children: any;
    }, HTMLElement>[];
    getPanels(): JSX.Element[];
    getSharedProps(): SharedStylePropsArgT;
    render(): JSX.Element;
}
