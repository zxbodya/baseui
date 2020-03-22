import * as React from 'react';
import type { OverrideT } from '../helpers/overrides';
import { STATE_CHANGE_TYPE, SIZE, TYPE } from './constants';
import type { OnItemSelectFnT } from '../menu/types';
import { ReactNode, SyntheticEvent, ChangeEvent } from 'react';
export declare type ChangeActionT = keyof typeof STATE_CHANGE_TYPE;
export declare type SizeT = keyof typeof SIZE;
export declare type TypeT = keyof typeof TYPE;
export declare type OptionT = Readonly<{
    id?: string | number;
    label?: string;
    disabled?: boolean;
    clearableValue?: boolean;
    isCreatable?: boolean;
    __optgroup?: string;
    [x: string]: any;
}>;
export declare type ValueT = ReadonlyArray<OptionT>;
export declare type OptgroupsT = {
    __ungrouped?: ValueT;
    [x: string]: ValueT;
};
export declare type OptionsT = ValueT | undefined | null | OptgroupsT;
export declare type OnChangeParamsT = {
    value: ValueT;
    option: OptionT | undefined | null;
    type: ChangeActionT;
};
export declare type OverridesT = {
    Root?: OverrideT<any>;
    ControlContainer?: OverrideT<any>;
    Placeholder?: OverrideT<any>;
    ValueContainer?: OverrideT<any>;
    SingleValue?: OverrideT<any>;
    MultiValue?: OverrideT<any>;
    InputContainer?: OverrideT<any>;
    Input?: OverrideT<any>;
    IconsContainer?: OverrideT<any>;
    SelectArrow?: OverrideT<any>;
    ClearIcon?: OverrideT<any>;
    LoadingIndicator?: OverrideT<any>;
    SearchIconContainer?: OverrideT<any>;
    SearchIcon?: OverrideT<any>;
    Popover?: OverrideT<any>;
    DropdownContainer?: OverrideT<any>;
    Dropdown?: OverrideT<any>;
    DropdownOption?: OverrideT<any>;
    DropdownListItem?: OverrideT<any>;
    OptionContent?: OverrideT<any>;
    StatefulMenu?: OverrideT<any>;
    StyledClearIcon?: OverrideT<any>;
};
export declare type OverridesDropdownT = {
    DropdownContainer?: OverrideT<any>;
    Dropdown?: OverrideT<any>;
    DropdownOption?: OverrideT<any>;
    DropdownListItem?: OverrideT<any>;
    OptionContent?: OverrideT<any>;
    StatefulMenu?: OverrideT<any>;
};
export declare type PropsT = {
    'aria-label'?: string | null;
    'aria-describedby'?: string | null;
    'aria-errormessage'?: string | null;
    'aria-labelledby'?: string | null;
    /** Defines if select element is focused on the first mount. */
    autoFocus?: boolean;
    /** Defines if options can be removed by pressing backspace. If you have customized labels, it will remove the option entirely, otherwise, it starts removing characters from the end of the string. */
    backspaceRemoves?: boolean;
    /** Defines if the select value can be cleared. If true a clear icon is rendered when a value is set. */
    clearable?: boolean;
    /** Defines if the menu closes after a selection if made. */
    closeOnSelect?: boolean;
    /** Defines if new options can be created along with choosing existing options. */
    creatable?: boolean;
    /** Defines if options can be removed by pressing backspace. */
    deleteRemoves?: boolean;
    /** Defines if the control is disabled. */
    disabled?: boolean;
    /** Defines if the control is in error state. */
    error?: boolean;
    /** Defines if the control is in positive state. */
    positive?: boolean;
    /** Defines if the value is cleared when escape is pressed and the dropdown is closed. */
    escapeClearsValue?: boolean;
    /** Defaults to filterOptions that excludes selected options for
     * multi select. A custom method to filter options to be displayed in the dropdown. */
    filterOptions?: ((options: ValueT, filterValue: string, excludeOptions: ValueT | undefined | null, a: {
        valueKey: string;
        labelKey: string;
    }) => ValueT) | null;
    /** Defines if currently selected options are filtered out in the dropdown options. */
    filterOutSelected?: boolean;
    /** A custom method to get a display value for a dropdown option. */
    getOptionLabel?: ((a: {
        option: OptionT;
        optionState: {
            $selected: boolean;
            $disabled: boolean;
            $isHighlighted: boolean;
        };
    }) => React.ReactNode) | null;
    /** A custom method to get a display value for a selected option. */
    getValueLabel?: ((a: {
        option: OptionT;
        index?: number;
    }) => React.ReactNode) | null;
    /** Sets the id attribute of the internal input element. Allows for usage with labels. */
    id?: string;
    /** Defines if the select is in a loading (async) state. */
    isLoading?: boolean;
    /** Defines an option key for a default label value. */
    labelKey?: string;
    /** Sets max height of the dropdown list. */
    maxDropdownHeight?: string;
    /** Defines if multiple options can be selected. */
    multi?: boolean;
    /** Message to be displayed if no options is found for a search query. */
    noResultsMsg?: React.ReactNode;
    onBlur?: (e: React.FocusEvent | MouseEvent) => unknown;
    /** Defines if the input value is reset to an empty string when a blur event happens on the select. */
    onBlurResetsInput?: boolean;
    /** change handler of the select to be called when a value is changed. */
    onChange?: (params: OnChangeParamsT) => unknown;
    onFocus?: (e: SyntheticEvent<HTMLElement>) => unknown;
    onInputChange?: (e: ChangeEvent<HTMLInputElement>) => unknown;
    /** Defines if the input value is reset to an empty string when dropdown is closed. */
    onCloseResetsInput?: boolean;
    /** Defines if the input value is reset to an empty string when a selection is made. */
    onSelectResetsInput?: boolean;
    /** A function that is called when the dropdown opens. */
    onOpen?: (() => unknown) | null;
    /** A function that is called when the dropdown closes. */
    onClose?: (() => unknown) | undefined | null;
    /** Defines if the dropdown opens on a click event on the select. */
    openOnClick?: boolean;
    /** If true, opens the dropdown when the select mounts. */
    startOpen?: boolean;
    /** Options to be displayed in the dropdown. If an option has a
     * disabled prop value set to true it will be rendered as a disabled option in the dropdown. */
    options: OptionsT;
    overrides?: OverridesT;
    /** Sets the placeholder. */
    placeholder?: React.ReactNode;
    /** Defines if the select field is required to have a selection. */
    required?: boolean;
    /** Defines if the search functionality is enabled. */
    searchable?: boolean;
    /** Defines the size (scale) of dropdown menu items. See the Menu component API. */
    size?: SizeT;
    /** Defines type of the component to be in select or search mode.
     * When set to TYPE.search the search icon is rendered on the
     * left and the select arrow icon is not rendered. */
    type?: TypeT;
    /** A current selected value(s). If a selected value has a clearableValue
     * prop set to true it will be rendered as a disabled selected option that can't be cleared. */
    value: ValueT;
    valueComponent?: React.ComponentType<any>;
    /** Defines a key name for an option's unique identifier value.
     * The value of the `valueKey` prop is used to identify what options are selected
     * or removed from the selection, it also used for default filtering out the
     * selected options from the dropdown list. */
    valueKey?: string;
    /** Where to mount the popover */
    mountNode?: HTMLElement;
};
export declare type SelectStateT = {
    activeDescendant: string | undefined | null;
    inputValue: string;
    isFocused: boolean;
    isOpen: boolean;
    isPseudoFocused: boolean;
};
export declare type StateT = {
    value: ValueT;
};
export declare type StateReducerT = (stateType: string, nextState: StateT, currentState: StateT) => StateT;
export declare type StatefulContainerPropsT = {
    overrides: OverridesT;
    children: (a: PropsT) => ReactNode;
    initialState: StateT;
    stateReducer: StateReducerT;
    onChange: (params: OnChangeParamsT) => unknown;
};
export declare type StatefulSelectPropsT = Omit<PropsT, 'onChange' | 'overrides' | 'initialState' | 'stateReducer'> & {
    overrides?: OverridesT;
    initialState?: StateT;
    stateReducer?: StateReducerT;
    onChange?: (params: OnChangeParamsT) => unknown;
};
export declare type DropdownPropsT = {
    error: boolean;
    getOptionLabel: (a: {
        option: OptionT;
        optionState: {
            $selected: boolean;
            $disabled: boolean;
            $isHighlighted: boolean;
        };
    }) => React.ReactNode;
    id?: string;
    innerRef: React.RefObject<any>;
    isLoading: boolean;
    labelKey: string;
    maxDropdownHeight: string;
    multi: boolean;
    noResultsMsg?: React.ReactNode;
    onActiveDescendantChange?: (id?: string) => unknown;
    onItemSelect: OnItemSelectFnT;
    options: ValueT;
    overrides?: OverridesDropdownT;
    required: boolean;
    searchable: boolean;
    size: SizeT;
    type: TypeT;
    value: ValueT;
    valueKey: string;
    width: number | undefined | null;
};
export declare type AutosizeInputOverridesT = {
    Input?: OverrideT<any>;
};
export declare type AutosizeInputPropsT = {
    value: string;
    defaultValue?: string;
    inputRef: (ref: any) => any;
    overrides: AutosizeInputOverridesT;
    $size: SizeT;
};
export declare type AutosizeInputStateT = {
    inputWidth: number;
};
export declare type SharedStylePropsArgT = {
    $clearable?: boolean;
    $creatable?: boolean;
    $disabled?: boolean;
    $error?: boolean;
    $positive?: boolean;
    $isFocused?: boolean;
    $isLoading?: boolean;
    $isOpen?: boolean;
    $isPseudoFocused?: boolean;
    $multi?: boolean;
    $required?: boolean;
    $searchable?: boolean;
    $size?: SizeT;
    $type?: TypeT;
    $width?: string;
    $maxHeight?: string;
    $isHighlighted?: boolean;
    $selected?: boolean;
    $isEmpty?: boolean;
};
