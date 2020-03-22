import * as React from 'react';
import type { LayersManagerPropsT, LayersManagerStateT, LayersContextT } from './types';
export declare const LayersContext: React.Context<LayersContextT>;
export declare const Provider: React.Provider<LayersContextT>;
export declare const Consumer: React.Consumer<LayersContextT>;
export default class LayersManager extends React.Component<LayersManagerPropsT, LayersManagerStateT> {
    host: React.RefObject<HTMLElement>;
    containerRef: {
        current: React.RefObject<any> | null;
    };
    constructor(props: LayersManagerPropsT);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onDocumentClick: (event: MouseEvent) => void;
    onKeyUp: (event: KeyboardEvent) => void;
    onAddEscapeHandler: (escapeKeyHandler: () => unknown) => void;
    onRemoveEscapeHandler: (escapeKeyHandler: () => unknown) => void;
    onAddDocClickHandler: (docClickHandler: (event: MouseEvent) => unknown) => void;
    onRemoveDocClickHandler: (docClickHandler: (event: MouseEvent) => unknown) => void;
    render(): JSX.Element;
}
