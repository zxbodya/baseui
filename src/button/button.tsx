/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import * as React from 'react';
import {
  BaseButton as StyledBaseButton,
  LoadingSpinner as StyledLoadingSpinner,
  LoadingSpinnerContainer as StyledLoadingSpinnerContainer,
} from './styled-components';
import {getSharedProps} from './utils';
import ButtonInternals from './button-internals';
import {defaultProps} from './default-props';
import {getOverrides} from '../helpers/overrides';
import {isFocusVisible, forkFocus, forkBlur} from '../utils/focusVisible';

import type {ButtonPropsT} from './types';

import type {SyntheticEvent} from 'react';
import type {ComponentProps} from 'react';

class Button extends React.Component<
  ButtonPropsT & {
    forwardedRef: any;
  } & Omit<ComponentProps<'button'>, keyof ButtonPropsT | 'ref'>,
  {
    isFocusVisible: boolean;
  }
> {
  static defaultProps = defaultProps;
  state = {isFocusVisible: false};

  internalOnClick = (...args: any) => {
    const {isLoading, onClick} = this.props;
    if (isLoading) {
      args[0].preventDefault();
      return;
    }
    // @ts-ignore
    onClick && onClick(...args);
  };

  handleFocus = (event: SyntheticEvent) => {
    if (isFocusVisible(event)) {
      this.setState({isFocusVisible: true});
    }
  };

  handleBlur = (event: SyntheticEvent) => {
    if (this.state.isFocusVisible !== false) {
      this.setState({isFocusVisible: false});
    }
  };

  render() {
    const {
      overrides = {},
      size,
      kind,
      shape,
      isLoading,
      isSelected,
      // Removing from restProps
      startEnhancer,
      endEnhancer,
      children,
      forwardedRef,
      ...restProps
    } = this.props;
    // Get overrides
    const [BaseButton, baseButtonProps] = getOverrides(
      // adding both (1) BaseButton and (2) Root
      // (1) because it's a Button under the hood
      // (2) because we want consistency with the rest of the components
      overrides.BaseButton || overrides.Root,
      StyledBaseButton,
    );
    const [LoadingSpinner, loadingSpinnerProps] = getOverrides(
      overrides.LoadingSpinner,
      StyledLoadingSpinner,
    );
    const [LoadingSpinnerContainer, loadingSpinnerContainerProps] =
      getOverrides(
        overrides.LoadingSpinnerContainer,
        StyledLoadingSpinnerContainer,
      );
    const sharedProps = {
      ...getSharedProps(this.props),
      $isFocusVisible: this.state.isFocusVisible,
    };
    return (
      <BaseButton
        ref={forwardedRef}
        data-baseweb="button"
        {...(isLoading
          ? {
              // we want the screenreader to say loading and also the content of child
              // this seems like the best option even tho the child might not be a string
              ['aria-label']: `loading ${
                typeof this.props.children === 'string'
                  ? this.props.children
                  : ''
              }`,
              ['aria-busy']: 'true',
            }
          : {})}
        {...sharedProps}
        {...restProps}
        {...baseButtonProps}
        // Applies last to override passed in onClick
        onClick={this.internalOnClick}
        onFocus={forkFocus(
          {...restProps, ...baseButtonProps},
          this.handleFocus,
        )}
        onBlur={forkBlur({...restProps, ...baseButtonProps}, this.handleBlur)}
      >
        {isLoading ? (
          <React.Fragment>
            {/* This is not meant to be overridable by users */}
            <div style={{opacity: 0, display: 'flex', height: '0px'}}>
              <ButtonInternals {...this.props} />
            </div>
            <LoadingSpinnerContainer
              {...sharedProps}
              {...loadingSpinnerContainerProps}
            >
              <LoadingSpinner {...sharedProps} {...loadingSpinnerProps} />
            </LoadingSpinnerContainer>
          </React.Fragment>
        ) : (
          <ButtonInternals {...this.props} />
        )}
      </BaseButton>
    );
  }
}

const ForwardedButton = React.forwardRef<any, Omit<ComponentProps<typeof Button>, 'forwardedRef'>>(
  (props, ref) => <Button {...props} forwardedRef={ref} />);
ForwardedButton.displayName = 'Button';
export default ForwardedButton;
