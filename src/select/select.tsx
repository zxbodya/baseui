/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';

import {getOverrides} from '../helpers/overrides';
import DeleteAlt from '../icon/delete-alt';
import TriangleDownIcon from '../icon/triangle-down';
import SearchIconComponent from '../icon/search';
import {LocaleContext} from '../locale/index';
import {LocaleT} from '../locale/types';
import {Popover, PLACEMENT} from '../popover/index';
import {Spinner} from '../spinner/index';

import AutosizeInput from './autosize-input';
import {TYPE, STATE_CHANGE_TYPE} from './constants';
import defaultProps from './default-props';
import SelectDropdown from './dropdown';
import MultiValue from './multi-value';
import {
  StyledRoot,
  StyledControlContainer,
  StyledPlaceholder,
  StyledValueContainer,
  StyledInputContainer,
  StyledIconsContainer,
  StyledSelectArrow,
  StyledClearIcon,
  getLoadingIconStyles,
  StyledSearchIcon,
} from './styled-components';
import {PropsT, SelectStateT, ValueT, OptionT, ChangeActionT} from './types';
import {
  shouldShowValue,
  shouldShowPlaceholder,
  expandValue,
} from './utils/index';
import Value from './value';

import {SyntheticEvent, ChangeEvent} from 'react';

const isClick = event => event.type === 'click';
const isLeftClick = event =>
  event.button !== null && event.button !== undefined && event.button === 0;

const containsNode = (parent, child) => {
  if (__BROWSER__) {
    // eslint-disable-next-line flowtype/no-weak-types
    return child && parent && parent.contains(child as any);
  }
};

export function isInteractive(rootTarget: EventTarget, rootElement: Element) {
  if (rootTarget instanceof Element) {
    let target: Element | undefined | null = rootTarget;
    while (target && target !== rootElement) {
      const role = target.getAttribute('role');
      if (role === 'button' || role === 'link') {
        return true;
      }
      if (target.tagName) target = target.parentElement;
    }
  }

  return false;
}

class Select extends React.Component<PropsT, SelectStateT> {
  static defaultProps = defaultProps;

  // anchor is a ref that refers to the outermost element rendered when the dropdown menu is not
  // open. This is required so that we can check if clicks are on/off the anchor element.
  anchor: {
    current: HTMLElement | null;
  } = React.createRef();
  // dropdown is a ref that refers to the popover element. This is required so that we can check if
  // clicks are on/off the dropdown element.
  dropdown: {
    current: HTMLElement | null;
  } = React.createRef();
  input: React.RefObject<any>;
  // dragging is a flag to track whether a mobile device in currently scrolling versus clicking.
  dragging: boolean;
  // focusAfterClear is a flag to indicate that the dropdowm menu should open after a selected
  // option has been cleared.
  focusAfterClear: boolean;
  // openAfterFocus is a flag to indicate that the dropdown menu should open when the component is
  // focused. Developers have the option to disable initial clicks opening the dropdown menu. If not
  // disabled, clicks will set this flag true. Upon focusing, look to this to see if the menu should
  // be opened, or only focus.
  openAfterFocus: boolean;
  // When an item is selected, it also triggers handleClickOutside and since the selected item is
  // already out of the menu (DOM), it will not recognize it as a subnode and triggers handleBlur
  // that sets isOpen to false. That's a faulty logic causing visible problems when
  // closeOnSelect is false. This flag helps to detect that selection was just made.
  justSelected: boolean;

  state = {
    inputValue: '',
    isFocused: false,
    isOpen: this.props.startOpen,
    isPseudoFocused: false,
  };

  componentDidMount() {
    if (this.props.autoFocus) {
      this.focus();
    }
  }

  componentDidUpdate(prevProps: PropsT, prevState: SelectStateT) {
    if (__BROWSER__) {
      if (prevState.isOpen !== this.state.isOpen) {
        if (this.state.isOpen) {
          this.props.onOpen && this.props.onOpen();
          document.addEventListener('touchstart', this.handleTouchOutside);
        } else {
          this.props.onClose && this.props.onClose();
          document.removeEventListener('touchstart', this.handleTouchOutside);
        }
      }

      if (!prevState.isFocused && this.state.isFocused) {
        document.addEventListener('click', this.handleClickOutside);
      }
    }
  }

  componentWillUnmount() {
    if (__BROWSER__) {
      document.removeEventListener('touchstart', this.handleTouchOutside);
    }
  }

  focus() {
    if (!this.input) return;
    this.input.focus();
  }

  // Handle touch outside on mobile to dismiss menu, ensures that the
  // touch target is not within the anchor DOM node.
  handleTouchOutside = (event: TouchEvent) => {
    if (containsNode(this.dropdown.current, event.target)) return;
    if (!containsNode(this.anchor.current, event.target)) {
      this.closeMenu();
    }
  };

  // Track dragging state to filter false-positive actions where a user
  // intends to drag/scroll the page.
  handleTouchMove = () => (this.dragging = true);
  handleTouchStart = () => (this.dragging = false);
  handleTouchEnd = (event: TouchEvent) => {
    if (this.dragging) return;
    this.handleClick(event);
  };
  handleTouchEndClearValue = (event: TouchEvent) => {
    if (this.dragging) return;
    this.clearValue(event);
  };

  handleClick = (event: MouseEvent | TouchEvent) => {
    if (this.props.disabled || (!isClick(event) && !isLeftClick(event))) {
      return;
    }

    // Case comes up when text has been typed into the input field. If no text provided,
    // the 'input' element will have essentially 0 width therefore will not be clickable.
    // When click outside does not reset input, text provided will stay rendered after clicks away
    // from the select component. Upon subsequent clicks on the provided text, open the dropdown
    // menu, in addition to text edit operations.
    if (event.target === this.input) {
      // CHASE: not sure why this condition is here. I cannot replicate a situation where clicks
      // on provided text break into here.
      if (!this.state.isFocused) {
        this.openAfterFocus = this.props.openOnClick;
        this.focus();
        return;
      }

      if (!this.state.isOpen) {
        this.setState({
          isOpen: true,
          isPseudoFocused: false,
        });
        return;
      }
    }

    // Ensures that interactive elements within the Select component do not trigger the outer click
    // handler. For example, after an option is selected clicks on the 'clear' icon call here. We
    // should ignore those events. This comes after case where click is on input element, so that
    // those are handled on their own.
    if (this.input && isInteractive(event.target, this.input)) {
      return;
    }

    // For the simple case where clicking on the Select does not allow for providing
    // text input to filter the dropdown options.
    if (!this.props.searchable) {
      this.focus();
      this.setState(prev => ({
        isOpen: !prev.isOpen,
      }));
      return;
    }

    // Cases below only apply to searchable Select component.
    if (this.state.isFocused) {
      // iOS ignores programmatic calls to input.focus() that were not triggered by a click event.
      // This component can get into a state where isFocused is true, but the DOM node is not
      // focused. Call focus here again to ensure.
      this.focus();

      // Case comes up when click outside does not reset input - once text has been provided to
      // the input, and the user closes the dropdown menu the provided text is maintained. After
      // this, if the user focuses back into the select component then clicks on the component,
      // the provided text highlights rather than position's the cursor at the end of the input.
      if (this.input) this.input.value = '';

      this.setState(prev => ({
        isOpen: !this.focusAfterClear && !prev.isOpen,
        isPseudoFocused: false,
      }));

      this.focusAfterClear = false;
    } else {
      this.openAfterFocus = this.props.openOnClick;
      this.focus();
    }
  };

  closeMenu() {
    if (this.props.onCloseResetsInput) {
      this.setState({
        inputValue: '',
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi,
      });
    } else {
      this.setState({
        isOpen: false,
        isPseudoFocused: this.state.isFocused && !this.props.multi,
      });
    }
  }

  handleInputFocus = (event: SyntheticEvent<HTMLElement>) => {
    if (this.props.disabled) return;
    if (this.props.onFocus) this.props.onFocus(event);

    let toOpen = this.state.isOpen || this.openAfterFocus;
    // if focus happens after clear values, don't open dropdown yet.
    toOpen = !this.focusAfterClear && toOpen;

    this.setState({
      isFocused: true,
      isOpen: !!toOpen,
    });

    this.focusAfterClear = false;
    this.openAfterFocus = false;
  };

  handleBlur = (event: Event) => {
    if (containsNode(this.anchor.current, event.target)) {
      return;
    }

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }

    const onBlurredState: Partial<SelectStateT> = {
      isFocused: false,
      isOpen: false,
      isPseudoFocused: false,
    };

    if (this.props.onBlurResetsInput) {
      onBlurredState.inputValue = '';
    }

    this.setState(onBlurredState);

    if (__BROWSER__) {
      document.removeEventListener('click', this.handleClickOutside);
    }
  };

  handleClickOutside = (event: MouseEvent) => {
    if (this.justSelected) {
      this.justSelected = false;
      return;
    }
    if (containsNode(this.dropdown.current, event.target)) return;

    const isFocused = this.state.isFocused || this.state.isPseudoFocused;
    if (isFocused && !containsNode(this.anchor.current, event.target)) {
      this.handleBlur(event);
    }
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newInputValue = event.target.value;
    this.setState({
      inputValue: newInputValue,
      isOpen: true,
      isPseudoFocused: false,
    });
    if (this.props.onInputChange) {
      this.props.onInputChange(event);
    }
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (this.props.disabled) return;
    switch (event.keyCode) {
      case 8: // backspace
        if (!this.state.inputValue && this.props.backspaceRemoves) {
          event.preventDefault();
          this.popValue();
        }
        break;
      case 13: // enter
        event.preventDefault();
        event.stopPropagation();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 9: // tab
        this.setState(prevState => ({
          isPseudoFocused: false,
          isFocused: false,
          isOpen: false,
          inputValue: this.props.onCloseResetsInput ? '' : prevState.inputValue,
        }));
        break;
      case 27: // escape
        event.preventDefault();
        if (this.state.isOpen) {
          this.closeMenu();
          event.stopPropagation();
        } else if (this.props.clearable && this.props.escapeClearsValue) {
          this.clearValue(event);
          this.setState({isFocused: false, isPseudoFocused: false});
          event.stopPropagation();
        }
        break;
      case 32: // space
        if (this.props.searchable) {
          break;
        }
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 38: // up
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 40: // down
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 33: // page up
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 34: // page down
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 35: // end key
        if (event.shiftKey) {
          break;
        }
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 36: // home key
        if (event.shiftKey) {
          break;
        }
        event.preventDefault();
        if (!this.state.isOpen) {
          this.setState({isOpen: true});
        }
        break;
      case 46: // delete
        if (!this.state.inputValue && this.props.deleteRemoves) {
          event.preventDefault();
          this.popValue();
        }
        break;
    }
  };

  getOptionLabel = (
    locale: LocaleT,
    {
      option,
    }: {
      option: OptionT;
      optionState: {
        $selected: boolean;
        $disabled: boolean;
        $isHighlighted: boolean;
      };
    },
  ): React.ReactNode => {
    if (option.isCreatable) {
      return (
        locale.select.create + ' ' + '"' + option[this.props.labelKey] + '"'
      );
    }
    return option[this.props.labelKey];
  };

  getValueLabel = ({option}: {option: OptionT}): React.ReactNode => {
    return option[this.props.labelKey];
  };

  /**
   * Extends the value into an array from the given options
   */
  getValueArray(value: ValueT): Array<OptionT> {
    if (!Array.isArray(value)) {
      if (value === null || value === undefined) return [];
      value = [value];
    }
    return value.map(value => expandValue(value, this.props));
  }

  setValue(
    value: ValueT,
    option: OptionT | undefined | null,
    type: ChangeActionT,
  ) {
    if (this.props.onChange) {
      this.props.onChange({
        value,
        option,
        type,
      });
    }
  }

  selectValue = ({item}: {item: OptionT}) => {
    if (item.disabled) {
      return;
    }
    this.justSelected = true;
    // NOTE: we add/set the value in a callback to make sure the
    // input value is empty to avoid styling issues in Chrome
    const updatedValue = this.props.onSelectResetsInput
      ? ''
      : this.state.inputValue;
    if (this.props.multi) {
      this.setState(
        {
          inputValue: updatedValue,
          isOpen: !this.props.closeOnSelect,
        },
        () => {
          const valueArray = this.props.value;
          if (
            valueArray.some(
              i => i[this.props.valueKey] === item[this.props.valueKey],
            )
          ) {
            this.removeValue(item);
          } else {
            this.addValue(item);
          }
        },
      );
    } else {
      this.setState(
        {
          inputValue: updatedValue,
          isOpen: !this.props.closeOnSelect,
          isFocused: false,
          isPseudoFocused: false,
        },
        () => {
          this.setValue([item], item, STATE_CHANGE_TYPE.select);
        },
      );
    }
  };

  addValue = (item: OptionT) => {
    const valueArray = [...this.props.value];
    this.setValue(valueArray.concat(item), item, STATE_CHANGE_TYPE.select);
  };

  popValue = () => {
    if (this.props.multi) {
      const valueArray = [...this.props.value];
      const valueLength = valueArray.length;
      if (!valueLength) return;
      if (valueArray[valueLength - 1].clearableValue === false) return;
      const item = valueArray.pop();
      this.setValue(valueArray, item, STATE_CHANGE_TYPE.remove);
    }
  };

  removeValue = (item: OptionT) => {
    const valueArray = [...this.props.value];
    this.setValue(
      valueArray.filter(
        i => i[this.props.valueKey] !== item[this.props.valueKey],
      ),
      item,
      STATE_CHANGE_TYPE.remove,
    );
    this.focus();
  };

  clearValue = (event: KeyboardEvent | MouseEvent | TouchEvent) => {
    if (isClick(event) && !isLeftClick(event)) return;

    const resetValue = this.props.value.filter(
      item => item.clearableValue === false,
    );
    this.setValue(resetValue, null, STATE_CHANGE_TYPE.clear);
    this.setState({
      inputValue: '',
      isOpen: false,
    });

    this.focus();
    this.focusAfterClear = true;
  };

  renderLoading() {
    if (!this.props.isLoading) return;
    const sharedProps = this.getSharedProps();
    const {overrides = {}} = this.props;
    const [LoadingIndicator, loadingIndicatorProps] = getOverrides(
      overrides.LoadingIndicator,
      Spinner,
    );
    return (
      <LoadingIndicator
        size={16}
        overrides={{Svg: {style: getLoadingIconStyles}}}
        {...sharedProps}
        {...loadingIndicatorProps}
      />
    );
  }

  renderValue(
    valueArray: ValueT,
    isOpen: boolean,
    locale: LocaleT,
  ):
    | React.ReactNode
    | undefined
    | null
    | Array<React.ReactNode | undefined | null> {
    const {overrides = {}} = this.props;
    const sharedProps = this.getSharedProps();
    const renderLabel = this.props.getValueLabel || this.getValueLabel;
    const [Placeholder, placeholderProps] = getOverrides(
      overrides.Placeholder,
      StyledPlaceholder,
    );
    if (!valueArray.length) {
      const showPlaceholder = shouldShowPlaceholder(
        this.state,
        this.props,
        isOpen,
      );
      return showPlaceholder ? (
        <Placeholder {...sharedProps} {...placeholderProps}>
          {this.props.placeholder || locale.select.placeholder}
        </Placeholder>
      ) : null;
    }
    if (this.props.multi) {
      return valueArray.map((value, i) => {
        const disabled =
          sharedProps.$disabled || value.clearableValue === false;
        return (
          <MultiValue
            value={value}
            key={`value-${i}-${value[this.props.valueKey]}`}
            removeValue={() => this.removeValue(value)}
            disabled={disabled}
            overrides={{MultiValue: overrides.MultiValue}}
            {...sharedProps}
            $disabled={disabled}
          >
            {renderLabel({option: value, index: i})}
          </MultiValue>
        );
      });
    } else if (shouldShowValue(this.state, this.props)) {
      return (
        <Value
          value={valueArray[0][this.props.valueKey]}
          disabled={this.props.disabled}
          overrides={{SingleValue: overrides.SingleValue}}
          {...sharedProps}
        >
          {renderLabel({option: valueArray[0]})}
        </Value>
      );
    }
  }

  renderInput() {
    const {overrides = {}} = this.props;
    const [InputContainer, inputContainerProps] = getOverrides(
      overrides.InputContainer,
      StyledInputContainer,
    );
    const sharedProps = this.getSharedProps();
    const isOpen = this.state.isOpen;
    let value = this.state.inputValue;
    if (value && !this.props.onSelectResetsInput && !this.state.isFocused) {
      // It hides input value when it is not focused and was not reset on select
      value = '';
    }

    if (!this.props.searchable) {
      return (
        <InputContainer
          aria-expanded={isOpen}
          aria-disabled={this.props.disabled}
          aria-label={this.props['aria-label']}
          aria-labelledby={this.props['aria-labelledby']}
          aria-required={this.props.required || null}
          onBlur={this.handleBlur}
          onFocus={this.handleInputFocus}
          ref={ref => (this.input = ref)}
          tabIndex={0}
          {...sharedProps}
          {...inputContainerProps}
        />
      );
    }
    return (
      <InputContainer {...sharedProps} {...inputContainerProps}>
        <AutosizeInput
          aria-autocomplete="list"
          aria-describedby={this.props['aria-describedby']}
          aria-disabled={this.props.disabled || null}
          aria-expanded={isOpen}
          aria-haspopup={isOpen}
          aria-label={this.props['aria-label']}
          aria-labelledby={this.props['aria-labelledby']}
          aria-required={this.props.required || null}
          disabled={this.props.disabled || null}
          id={this.props.id || null}
          inputRef={ref => (this.input = ref)}
          onBlur={this.handleBlur}
          onChange={this.handleInputChange}
          onFocus={this.handleInputFocus}
          overrides={{Input: overrides.Input}}
          required={(this.props.required && !this.props.value.length) || null}
          role="combobox"
          value={value}
          tabIndex={0}
          {...sharedProps}
        />
      </InputContainer>
    );
  }

  renderClear() {
    const sharedProps = this.getSharedProps();
    const value = this.props.value;
    if (
      !this.props.clearable ||
      !value ||
      !value.length ||
      this.props.disabled ||
      this.props.isLoading
    )
      return;
    const {overrides = {}} = this.props;
    const [ClearIcon, clearIconProps] = getOverrides(
      overrides.ClearIcon,
      DeleteAlt,
    );
    const ariaLabel = this.props.multi ? 'Clear all' : 'Clear value';
    return (
      <ClearIcon
        size={16}
        title={ariaLabel}
        aria-label={ariaLabel}
        onClick={this.clearValue}
        onTouchEnd={this.handleTouchEndClearValue}
        onTouchMove={this.handleTouchMove}
        onTouchStart={this.handleTouchStart}
        overrides={{Svg: StyledClearIcon}}
        role="button"
        {...sharedProps}
        {...clearIconProps}
      />
    );
  }

  renderArrow() {
    if (this.props.type !== TYPE.select) {
      return null;
    }
    const {overrides = {}} = this.props;
    const [SelectArrow, selectArrowProps] = getOverrides(
      overrides.SelectArrow,
      TriangleDownIcon,
    );
    const sharedProps = this.getSharedProps();
    return (
      <SelectArrow
        size={16}
        title={'open'}
        overrides={{Svg: StyledSelectArrow}}
        {...sharedProps}
        {...selectArrowProps}
      />
    );
  }

  renderSearch() {
    if (this.props.type !== TYPE.search) {
      return null;
    }
    const {overrides = {}} = this.props;
    const [SearchIcon, searchIconProps] = getOverrides(
      overrides.SearchIcon,
      SearchIconComponent,
    );
    const sharedProps = this.getSharedProps();

    return (
      <StyledSearchIcon {...sharedProps} {...searchIconProps}>
        <SearchIcon size={16} title={'search'} />
      </StyledSearchIcon>
    );
  }

  filterOptions(excludeOptions?: ValueT | null) {
    const filterValue = this.state.inputValue;
    var options = this.props.options || [];
    // apply filter function
    if (this.props.filterOptions) {
      options = this.props.filterOptions(options, filterValue, excludeOptions, {
        valueKey: this.props.valueKey,
        labelKey: this.props.labelKey,
      });
    }
    // can user create a new option + there's no exact match already
    if (
      filterValue &&
      this.props.creatable &&
      options
        .concat(this.props.value)
        .every(
          opt =>
            opt[this.props.labelKey].toLowerCase() !==
            filterValue.toLowerCase().trim(),
        )
    ) {
      // $FlowFixMe
      options.push({
        id: filterValue,
        [this.props.labelKey]: filterValue,
        [this.props.valueKey]: filterValue,
        isCreatable: true,
      });
    }
    return options;
  }

  getSharedProps() {
    const {
      clearable,
      creatable,
      disabled,
      error,
      positive,
      isLoading,
      multi,
      required,
      size,
      searchable,
      type,
    } = this.props;
    const {isOpen, isFocused, isPseudoFocused} = this.state;
    return {
      $clearable: clearable,
      $creatable: creatable,
      $disabled: disabled,
      $error: error,
      $positive: positive,
      $isFocused: isFocused,
      $isLoading: isLoading,
      $isOpen: isOpen,
      $isPseudoFocused: isPseudoFocused,
      $multi: multi,
      $required: required,
      $searchable: searchable,
      $size: size,
      $type: type,
    };
  }

  render() {
    const {
      overrides = {},
      type,
      multi,
      noResultsMsg,
      value,
      filterOutSelected,
    } = this.props;
    const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
    const [ControlContainer, controlContainerProps] = getOverrides(
      overrides.ControlContainer,
      StyledControlContainer,
    );
    const [ValueContainer, valueContainerProps] = getOverrides(
      overrides.ValueContainer,
      StyledValueContainer,
    );
    const [IconsContainer, iconsContainerProps] = getOverrides(
      overrides.IconsContainer,
      StyledIconsContainer,
    );
    const [PopoverOverride, popoverProps] = getOverrides(
      overrides.Popover,
      Popover,
    );
    const sharedProps = this.getSharedProps();

    const valueArray = this.getValueArray(value);
    const options = this.filterOptions(
      multi && filterOutSelected ? valueArray : null,
    );
    let isOpen = this.state.isOpen;
    if (
      multi &&
      !options.length &&
      valueArray.length &&
      !this.state.inputValue
    ) {
      isOpen = false;
    }
    sharedProps.$isOpen = isOpen;

    if (__DEV__) {
      if (this.props.error && this.props.positive) {
        // eslint-disable-next-line no-console
        console.warn(
          `[Select] \`error\` and \`positive\` are both set to \`true\`. \`error\` will take precedence but this may not be what you want.`,
        );
      }
    }

    return (
      <LocaleContext.Consumer>
        {locale => (
          <PopoverOverride
            // Popover does not provide ability to forward refs through, and if we were to simply
            // apply the ref to the Root component below it would be overwritten before the popover
            // renders it. Using this strategy, we will get a ref to the popover, then reuse its
            // anchorRef so we can check if clicks are on the select component or not.
            // eslint-disable-next-line flowtype/no-weak-types
            ref={(ref: any) => {
              if (!ref) return;
              this.anchor = ref.anchorRef;
            }}
            mountNode={this.props.mountNode}
            isOpen={isOpen}
            content={() => {
              const dropdownProps = {
                error: this.props.error,
                positive: this.props.positive,
                getOptionLabel:
                  this.props.getOptionLabel ||
                  this.getOptionLabel.bind(this, locale),
                isLoading: this.props.isLoading,
                labelKey: this.props.labelKey,
                maxDropdownHeight: this.props.maxDropdownHeight,
                multi,
                noResultsMsg,
                onItemSelect: this.selectValue,
                options,
                overrides,
                required: this.props.required,
                searchable: this.props.searchable,
                size: this.props.size,
                type,
                value: valueArray,
                valueKey: this.props.valueKey,
                width: this.anchor.current
                  ? this.anchor.current.clientWidth
                  : null,
              };

              return (
                <SelectDropdown innerRef={this.dropdown} {...dropdownProps} />
              );
            }}
            placement={PLACEMENT.bottom}
            {...popoverProps}
          >
            <Root data-baseweb="select" {...sharedProps} {...rootProps}>
              <ControlContainer
                onKeyDown={this.handleKeyDown}
                onClick={this.handleClick}
                onTouchEnd={this.handleTouchEnd}
                onTouchMove={this.handleTouchMove}
                onTouchStart={this.handleTouchStart}
                {...sharedProps}
                {...controlContainerProps}
              >
                {type === TYPE.search ? this.renderSearch() : null}
                <ValueContainer {...sharedProps} {...valueContainerProps}>
                  {this.renderValue(valueArray, isOpen, locale)}
                  {this.renderInput()}
                </ValueContainer>
                <IconsContainer {...sharedProps} {...iconsContainerProps}>
                  {this.renderLoading()}
                  {this.renderClear()}
                  {type === TYPE.select ? this.renderArrow() : null}
                </IconsContainer>
              </ControlContainer>
            </Root>
          </PopoverOverride>
        )}
      </LocaleContext.Consumer>
    );
  }
}

export default Select;
