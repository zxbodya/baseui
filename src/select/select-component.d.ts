import * as React from 'react';
import type { LocaleT } from '../locale/types';
import type { PropsT, SelectStateT, ValueT, OptionT, ChangeActionT } from './types';
export declare function isInteractive(rootTarget: EventTarget, rootElement: Element): boolean;
declare class Select extends React.Component<PropsT, SelectStateT> {
    static defaultProps: {
        'aria-label': any;
        'aria-describedby': any;
        'aria-errormessage': any;
        'aria-labelledby': any;
        autoFocus: boolean;
        backspaceRemoves: boolean;
        clearable: boolean;
        closeOnSelect: boolean;
        creatable: boolean;
        deleteRemoves: boolean;
        disabled: boolean;
        error: boolean;
        positive: boolean;
        escapeClearsValue: boolean;
        filterOptions: (options: ValueT, filterValue: string, excludeOptions?: ValueT, newProps?: Partial<{
            filterOption: (option: Readonly<{
                [x: string]: any;
                id?: React.ReactText;
                label?: string;
                disabled?: boolean;
                clearableValue?: boolean;
                isCreatable?: boolean;
                __optgroup?: string;
            }>, filterValue: string) => boolean;
            ignoreCase: boolean;
            labelKey: string;
            matchPos: "start" | "any";
            matchProp: "label" | "value" | "any";
            trimFilter: boolean;
            valueKey: string;
        }>) => Readonly<{
            [x: string]: any;
            id?: React.ReactText;
            label?: string;
            disabled?: boolean;
            clearableValue?: boolean;
            isCreatable?: boolean;
            __optgroup?: string;
        }>[];
        filterOutSelected: boolean;
        getOptionLabel: any;
        getValueLabel: any;
        isLoading: boolean;
        labelKey: string;
        maxDropdownHeight: string;
        multi: boolean;
        onBlur: () => void;
        onBlurResetsInput: boolean;
        onChange: () => void;
        onFocus: () => void;
        onInputChange: () => void;
        onCloseResetsInput: boolean;
        onSelectResetsInput: boolean;
        onOpen: any;
        onClose: any;
        openOnClick: boolean;
        startOpen: boolean;
        options: any[];
        overrides: {};
        required: boolean;
        searchable: boolean;
        size: "default";
        type: "select";
        value: any[];
        valueKey: string;
    };
    anchor: React.RefObject<HTMLElement>;
    dropdown: React.RefObject<HTMLElement>;
    input?: HTMLInputElement;
    dragging: boolean;
    focusAfterClear: boolean;
    openAfterFocus: boolean;
    justSelected: boolean;
    options: ValueT;
    listboxId: string;
    constructor(props: PropsT);
    state: {
        activeDescendant: any;
        inputValue: string;
        isFocused: boolean;
        isOpen: boolean;
        isPseudoFocused: boolean;
    };
    isMounted: boolean;
    componentDidMount(): void;
    componentDidUpdate(prevProps: PropsT, prevState: SelectStateT): void;
    componentWillUnmount(): void;
    focus(): void;
    handleTouchOutside: (event: TouchEvent) => void;
    handleTouchMove: () => boolean;
    handleTouchStart: () => boolean;
    handleTouchEnd: (event: TouchEvent) => void;
    handleTouchEndClearValue: (event: TouchEvent) => void;
    handleClick: (event: MouseEvent | TouchEvent) => void;
    closeMenu(): void;
    handleInputFocus: (event: React.SyntheticEvent<HTMLElement, Event>) => void;
    handleBlur: (event: MouseEvent | React.FocusEvent<Element>) => void;
    handleClickOutside: (event: MouseEvent) => void;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    getOptionLabel: (locale: LocaleT, { option, }: {
        option: Readonly<{
            [x: string]: any;
            id?: React.ReactText;
            label?: string;
            disabled?: boolean;
            clearableValue?: boolean;
            isCreatable?: boolean;
            __optgroup?: string;
        }>;
        optionState: {
            $selected: boolean;
            $disabled: boolean;
            $isHighlighted: boolean;
        };
    }) => React.ReactNode;
    getValueLabel: ({ option }: {
        option: Readonly<{
            [x: string]: any;
            id?: React.ReactText;
            label?: string;
            disabled?: boolean;
            clearableValue?: boolean;
            isCreatable?: boolean;
            __optgroup?: string;
        }>;
    }) => React.ReactNode;
    /**
     * Extends the value into an array from the given options
     */
    getValueArray(value: ValueT): Array<OptionT>;
    setValue(value: ValueT, option: OptionT | undefined | null, type: ChangeActionT): void;
    handleActiveDescendantChange: (id?: string) => void;
    selectValue: ({ item }: {
        item: Readonly<{
            [x: string]: any;
            id?: React.ReactText;
            label?: string;
            disabled?: boolean;
            clearableValue?: boolean;
            isCreatable?: boolean;
            __optgroup?: string;
        }>;
    }) => void;
    addValue: (item: Readonly<{
        [x: string]: any;
        id?: React.ReactText;
        label?: string;
        disabled?: boolean;
        clearableValue?: boolean;
        isCreatable?: boolean;
        __optgroup?: string;
    }>) => void;
    backspaceValue: () => void;
    popValue: () => Readonly<{
        [x: string]: any;
        id?: React.ReactText;
        label?: string;
        disabled?: boolean;
        clearableValue?: boolean;
        isCreatable?: boolean;
        __optgroup?: string;
    }>;
    removeValue: (item: Readonly<{
        [x: string]: any;
        id?: React.ReactText;
        label?: string;
        disabled?: boolean;
        clearableValue?: boolean;
        isCreatable?: boolean;
        __optgroup?: string;
    }>) => void;
    clearValue: (event: MouseEvent | KeyboardEvent | TouchEvent) => void;
    shouldShowPlaceholder: () => boolean;
    shouldShowValue: () => boolean;
    renderLoading(): JSX.Element;
    renderValue(valueArray: ValueT, isOpen: boolean, locale: LocaleT): React.ReactNode | undefined | null | Array<React.ReactNode | undefined | null>;
    renderInput(): JSX.Element;
    renderClear(): JSX.Element;
    renderArrow(): JSX.Element;
    renderSearch(): JSX.Element;
    filterOptions(excludeOptions?: ValueT | null): ValueT;
    getSharedProps(): {
        $clearable: boolean;
        $creatable: boolean;
        $disabled: boolean;
        $error: boolean;
        $positive: boolean;
        $isFocused: boolean;
        $isLoading: boolean;
        $isOpen: boolean;
        $isPseudoFocused: boolean;
        $multi: boolean;
        $required: boolean;
        $searchable: boolean;
        $size: "default" | "large" | "mini" | "compact";
        $type: "select" | "search";
        $isEmpty: boolean;
    };
    render(): JSX.Element;
}
export default Select;
