import * as React from 'react';
import type { PaginationPropsT } from './types';
import type { LocaleT } from '../locale/types';
declare type PageOptionT = {
    label: number;
};
export default class Pagination extends React.PureComponent<PaginationPropsT, {
    isFocusVisible: boolean;
}> {
    static defaultProps: {
        labels: {};
        overrides: {};
    };
    state: {
        isFocusVisible: boolean;
    };
    handleFocus: (event: React.SyntheticEvent<Element, Event>) => void;
    handleBlur: (event: React.SyntheticEvent<Element, Event>) => void;
    getMenuOptions: (numPages: number) => any[];
    onMenuItemSelect: (data: {
        value: readonly PageOptionT[];
    }) => void;
    onPrevClick: (event: React.SyntheticEvent<any, Event>) => void;
    onNextClick: (event: React.SyntheticEvent<any, Event>) => void;
    constructAriaWayfinderLabel: (locale: LocaleT, prefix: string) => string;
    render(): JSX.Element;
}
export {};
