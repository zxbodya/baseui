import * as React from 'react';
import type { DropdownPropsT } from './types';
export default class SelectDropdown extends React.Component<DropdownPropsT> {
    getSharedProps(): {
        $error: boolean;
        $isLoading: boolean;
        $multi: boolean;
        $required: boolean;
        $searchable: boolean;
        $size: "default" | "large" | "mini" | "compact";
        $type: "select" | "search";
        $width: number;
    };
    getItemLabel: (option: {
        [x: string]: any;
    }) => JSX.Element;
    onMouseDown: (e: React.SyntheticEvent<Element, Event>) => void;
    getHighlightedIndex: () => number;
    render(): JSX.Element;
}
