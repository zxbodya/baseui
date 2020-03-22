import * as React from 'react';
import type { DayPropsT, DayStateT } from './types';
import type { LocaleT } from '../locale/types';
export default class Day extends React.Component<DayPropsT, DayStateT> {
    static defaultProps: {
        disabled: boolean;
        date: Date;
        highlighted: boolean;
        range: boolean;
        month: number;
        onClick: () => void;
        onSelect: () => void;
        onFocus: () => void;
        onBlur: () => void;
        onMouseOver: () => void;
        onMouseLeave: () => void;
        overrides: {};
        peekNextMonth: boolean;
        value: any;
    };
    dayElm: any;
    state: {
        isHovered: boolean;
        isFocusVisible: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(prevProps: DayPropsT): void;
    onSelect(selectedDate: Date): void;
    onKeyDown: (event: KeyboardEvent) => void;
    onClick: (event: Event) => void;
    onFocus: (event: Event) => void;
    onBlur: (event: Event) => void;
    onMouseOver: (event: Event) => void;
    onMouseLeave: (event: Event) => void;
    isWeekend: () => boolean;
    isOutsideMonth: () => boolean;
    isSelected(): boolean;
    isPseudoSelected(): boolean;
    isPseudoHighlighted(): boolean;
    getSharedProps(): {
        $date: Date;
        $disabled: boolean;
        $endDate: boolean;
        $hasRangeHighlighted: boolean;
        $hasRangeOnRight: boolean;
        $hasRangeSelected: boolean;
        $highlightedDate: Date;
        $isHighlighted: boolean;
        $isHovered: boolean;
        $isFocusVisible: boolean;
        $startOfMonth: boolean;
        $endOfMonth: boolean;
        $outsideMonth: boolean;
        $peekNextMonth: boolean;
        $pseudoHighlighted: boolean;
        $pseudoSelected: boolean;
        $range: boolean;
        $selected: boolean;
        $startDate: boolean;
    };
    getAriaLabel(sharedProps: {
        $disabled: boolean;
        $range: boolean;
        $selected: boolean;
        $startDate: boolean;
        $endDate: boolean;
    }, localeContext: LocaleT): string;
    render(): JSX.Element;
}
