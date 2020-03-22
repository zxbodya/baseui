import * as React from 'react';
import type { AccordionPropsT, AccordionStateT, StateChangeTypeT, SharedStylePropsArgT } from './types';
export default class Accordion extends React.Component<AccordionPropsT, AccordionStateT> {
    static defaultProps: Partial<AccordionPropsT>;
    state: {
        expanded: React.ReactText[];
    };
    onPanelChange(key: React.Key, onChange: (...args: any[]) => {}, ...args: any): void;
    internalSetState(type: StateChangeTypeT, changes: AccordionStateT): void;
    getItems(): React.DetailedReactHTMLElement<{
        key: any;
        expanded: any;
        accordion: boolean;
        renderPanelContent: boolean;
        renderAll: boolean;
        overrides: any;
        disabled: any;
        onChange: (...args: any[]) => void;
    }, HTMLElement>[];
    getSharedProps(): SharedStylePropsArgT;
    componentDidMount(): void;
    render(): JSX.Element;
}
